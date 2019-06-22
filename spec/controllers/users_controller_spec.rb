require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    before(:each) do # Tem que ser each pra fazer o login
        login_user
    end
    describe "GET index" do 
        it "has a 200 status code" do
            get :get_public_profile
            expect(response.status).to eq(200)
        end
    end
end
