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

    multiple_choice_problems = current_user.multiple_choice_problems.all
    render json: { problems: multiple_choice_problems.as_json }
  end

  def get_multiple_choice
    begin 
      id = params[:id]
      problem = MultipleChoiceProblem.find(id)
      alternatives = Alternative.where(multiple_choice_problem_id: problem.id).all
      render json: { status: "OK", problem: problem.as_json, alternatives: alternatives }
    rescue
      render json: { status: "ERROR" }
    end
  end

  private 
    def multiple_choice_problem_params
      params.require(:multiple_choice_problem).permit(:title, :statement, :correct_answer, alternatives_attributes: [:text])
    end
end
