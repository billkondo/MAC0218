require 'rails_helper'

#TODO: Create fake user, using devise testing functions
RSpec.describe UsersController, type: :controller do
    before(:all) do
        user = create(:user)
        sign_in user
   #     allow(controller).to receive(:authenticate_user!).and_return(true)
   #     allow(controller).to receive(:current_user).and_return(user)
    end
    describe "GET index" do 
        it "has a 200 status code" do
            get :get_public_profile
            expect(response.status).to eq(200)
        end
    end
end
