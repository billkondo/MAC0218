class ProblemsController < ApplicationController
  def get_all
    print "GET ALL\n"
    print Problem.all.as_json 
    print "\n\n"
    render json: { status: "OK" }
  end
end
