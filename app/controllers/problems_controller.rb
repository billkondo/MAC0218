class ProblemsController < ApplicationController
  def create_multiple_choice
    @multiple_choice_problem = MultipleChoiceProblem.new(multiple_choice_problem_params)
    @multiple_choice_problem.user_id = current_user.id

    if @multiple_choice_problem.save 
      render json: { status: "OK" }
    else
      render json: @multiple_choice_problem.errors 
    end
  end

  private 
    def multiple_choice_problem_params
      params.require(:multiple_choice_problem).permit(:title, :statement, :correct_answer, alternatives_attributes: [:text])
    end
end
