require 'rails_helper'

RSpec.describe ProblemsController, type: :controller do
    describe "GET problems" do
        it "has a 200 status" do 
            get :get_all
            expect(response.status).to eq(200)
            expect(response.content_type).to eq "application/json"
        end
    end
end
