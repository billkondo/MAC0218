class MockController < ApplicationController
  def create
    mock = Mock.new(mock_params)
    mock.user_id = current_user.id

    if mock.save 
      render json: { status: "OK", id: mock.id }
    else
      render json: mock.errors 
    end
  end

  def update_mock
    id = params[:id]
    
    mock = Mock.find(id)
    mock.problems.destroy_all

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
      mock = Mock.find(id).as_json

      render json: { status: "OK", mock: mock }
    rescue
      render json: { status: "ERROR" }
    end
  end

  def get_all_mocks
    begin
      mocks = Mock.all
      render json: { status: "OK", mocks: mocks }
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
      params.require(:mock).permit(:title, :description, :problems => [])
    end
end