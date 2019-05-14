class ProblemsController < ApplicationController
  def create_multiple_choice
    multiple_choice_problem = MultipleChoiceProblem.new(multiple_choice_problem_params)
    multiple_choice_problem.user_id = current_user.id

    if multiple_choice_problem.save 
      render json: { status: "OK" }
    else
      render json: multiple_choice_problem.errors 
    end
  end

  def current_user_multiple_choice
    # Get the current user problems
    multiple_choice_problems = current_user.multiple_choice_problems
      .joins(' LEFT OUTER JOIN "multiple_choice_favorites" ON "multiple_choice_favorites"."multiple_choice_problem_id" = "multiple_choice_problems"."id" ')
      .select(:title, :statement, 'multiple_choice_problem_id AS favorite', :id) 

    render json: { problems: multiple_choice_problems.as_json }
  end

  def get_multiple_choice
    begin 
      # TODO Try to reduce number of queries (join tables ?)
      id = params[:id]
      problem = MultipleChoiceProblem.find(id).as_json
      alternatives = Alternative.where(multiple_choice_problem_id: id).all

      problem["isOwner"] = current_user.id == problem["user_id"]

      render json: { status: "OK", problem: problem, alternatives: alternatives }
    rescue
      render json: { status: "ERROR" }
    end
  end

  def get_multiple_choice_favorites
    # Get user favorite problems
    favorite_problems = current_user.multiple_choice_problems.joins(:multiple_choice_favorites).all
      .select(:title, :statement, :id, "multiple_choice_problem_id AS favorite")

    render json: { status: "OK", problems: favorite_problems.as_json }
  end

  def update_multiple_choice_favorites
    flag = params[:flag]
    multiple_choice_problem_id = params[:multiple_choice_problem_id]
    user_id = current_user.id

    if flag
      # Create new favorite relation
      favorite = MultipleChoiceFavorite.new()
      favorite.user_id = current_user.id
      favorite.multiple_choice_problem_id = params[:multiple_choice_problem_id]

      if favorite.save 
        render json: { status: "OK" }
      else
        render json: { status: "ERROR" }
      end
    else
      # Destroy favorite relation
      favorite = MultipleChoiceFavorite.find_by(multiple_choice_problem_id: multiple_choice_problem_id, user_id: user_id)
      
      if favorite.destroy
        render json: { status: "OK "}
      else
        render json: { status: "ERROR" }
      end
    end
  end

  private 
    def multiple_choice_problem_params
      params.require(:multiple_choice_problem).permit(:title, :statement, :correct_answer, alternatives_attributes: [:text])
    end
end
