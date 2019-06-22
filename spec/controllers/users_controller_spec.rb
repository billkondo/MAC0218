require 'rails_helper'

#TODO: Create fake user, using devise testing functions
RSpec.describe UsersController, type: :controller do
    before(:all) do
        #user = create(:user)
#        sign_in user  # Not working
    end
    describe "GET index" do 
        xit "has a 200 status code" do
            get :get_public_profile
            expect(response.status).to eq(200)
        end
    end
end
