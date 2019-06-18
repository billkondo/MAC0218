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
  
  private 
    def write_problem_params
      params.require(:write_problem).permit(:title, :statement, write_problem_questions_attributes: [:question])
    end
end
