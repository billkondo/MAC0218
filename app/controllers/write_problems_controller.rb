class WriteProblemsController < ApplicationController
  def create
    write_problem = WriteProblem.new(write_problem_params)
    write_problem.user_id = current_user.id

    if write_problem.save
      render json: { status: "OK", write_problem_id: write_problem.id }
    else 
      render json: { status: "ERROR", errors: write_problem.errors.as_json }
    end
  end

  def get
    id = params[:id]

    problem = WriteProblem.select(:title, :id, :statement).find(id)
    questions = WriteProblemQuestion.select(:question, :id).where(write_problem_id: id).all

    render json: { status: "OK", write_problem: problem.as_json, questions: questions.as_json  }
  end

  def update_favorite
    flag = params[:flag]
    id = params[:id]
    user_id = current_user.id

    # Check params
    # TODO

    if flag
      # Create new favorite relation
      favorite = WriteFavorite.new()

      favorite.user_id = current_user.id
      favorite.write_problem_id = id

      if favorite.save 
        render json: { status: "OK" }
      else
        render json: { status: "ERROR" }
      end
    else
      # Destroy favorite relation
      favorite = WriteFavorite.find_by(write_problem_id: id, user_id: user_id)
      
      if favorite.destroy
        render json: { status: "OK "}
      else
        render json: { status: "ERROR" }
      end
    end
  end
  
  private 
    def write_problem_params
      params.require(:write_problem).permit(:title, :statement, write_problem_questions_attributes: [:question])
    end
end
