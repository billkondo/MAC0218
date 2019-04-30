class HomeController < ApplicationController
  def index
    print "index\n"
  end

  def test
    print "aki"
    redirect_to :action => :index
  end
end
