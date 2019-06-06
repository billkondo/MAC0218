class WriteProblemsController < ApplicationController
  def create
    render json: { status: "OK",  write_problem_app_id: SecureRandom.uuid }
    # write_problem = WriteProblem.new(write_problem_params)
    # write_problem.user_id = current_user.id
    # write_problem.app_id = SecureRandom.uuid

    # print write_problem.as_json
    # print "\n\n"

    # if write_problem.save
    #   render json: { status: "OK", write_problem_app_id: write_problem.app_id }
    # else 
    #   render json: { status: "ERROR", errors: write_problem.errors.as_json }
    end
  end

  def get
    app_id = params[:app_id]

    print app_id
    print "\n\n"
    # problem = WriteProblem.find(app_id)
  
    write_problem = WriteProblem.new()  
    write_problem[:title] = "OI"

    # print problem.as_json
    # print "\n\n"

    render json: { status: "OK", write_problem: write_problem.as_json  }
  end
  
  private 
    def write_problem_params
      params.require(:write_problem).permit(:title, :statement, write_problem_questions_attributes: [:question, :app_id])
    end
end
