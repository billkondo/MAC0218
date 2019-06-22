class MockController < ApplicationController
  def create
    print "OI\n\n"

    print params[:mock]

    print "\n\n"

    render json: {
      status: 'OK'
    }
    # mock = Mock.new(mock_params)
    # mock.user_id = current_user.id

    # if mock.save 
    #   render json: { status: "OK", id: mock.id }
    # else
    #   render json: mock.errors 
    # end
  end

  def update_mock
    id = params[:id]
    
    mock = Mock.find(id)
    mock.multiple_choice_problems.destroy_all

    if mock.user_id == current_user.id
      if mock.update(mock_params)
        render json: { status: "OK" }
      else
        render json: { status: "ERROR" }
      end
    else
      render json: { status: "ERROR" }
    end  
  end

  def delete_mock
    id = params[:id]

    mock = Mock.find(id)

    if mock.user_id == mock.id
      if mock.destroy
        render json: { status: "OK" }
      else
        render json: { status: "ERROR" }
      end
    else
      render json: { status: "ERROR" }
    end
  end

  def get_mock
    begin 
      id = params[:id]
      problem = Mock.find(id).as_json
      multiple_choice_problem = MultipleChoiceProblem.where(mock_id: id).all

      problem["isOwner"] = current_user.id == problem["user_id"]

      print problem.as_json

      render json: { status: "OK", problem: problem, multiple_choice_problem: multiple_choice_problem }
    rescue
      render json: { status: "ERROR" }
    end
  end

  def get_problems_list
    multiple_choice_problems_record = MultipleChoiceProblem.all.select(:title, :id, :statement).as_json
    write_problems_record = WriteProblem.all.select(:title, :id, :statement).as_json

    multiple_choice_problems = multiple_choice_problems_record.map do |problem| 
      problem["type"] = :multiple_choice
      problem
    end

    write_problems = write_problems_record.map do |problem|
      problem["type"] = :write
      problem
    end

    problems = multiple_choice_problems | write_problems

    render json: { 
      status: 'OK',
      problems: problems
    }
  end

  private 
    def mock_params
      # need to complete
    end
end