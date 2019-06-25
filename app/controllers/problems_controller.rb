class ProblemsController < ApplicationController
  def get_all
    multiple_choice_record = MultipleChoiceProblem.order(created_at: :desc).page(1).select(:title, :id, :statement, :created_at).as_json
    write_record = WriteProblem.order(created_at: :desc).page(1).select(:title, :id, :statement, :created_at).as_json

    multiple_choice = multiple_choice_record.map do |problem|
      problem["type"] = :multiple_choice
      problem
    end

    write = write_record.map do |problem|
      problem["type"] = :write
      problem
    end

    problems_union = multiple_choice | write
    problems = problems_union.sort_by { |problem| problem["created_at"] }.reverse

    render json: { status: "OK" , problems: problems }
  end

  def get_user_problems 
    
    multiple_choice_record = current_user.multiple_choice_problems
      .joins(' LEFT OUTER JOIN "multiple_choice_favorites" ON "multiple_choice_favorites"."multiple_choice_problem_id" = "multiple_choice_problems"."id" ')
      .select(:title, :statement, 'multiple_choice_problem_id AS favorite', :id, :created_at) .as_json

    write_record = current_user.write_problems.select(:title, :id, :statement, :created_at).all.as_json

    multiple_choice = multiple_choice_record.map do |problem|
      problem["type"] = :multiple_choice
      problem
    end

    write = write_record.map do |problem|
      problem["type"] = :write
      problem
    end

    problems_union = multiple_choice | write
    problems = problems_union.sort_by { |problem| problem["created_at"] }.reverse

    render json: { status: "OK" , problems: problems }
  end
end
