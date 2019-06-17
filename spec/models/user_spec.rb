require 'rails_helper'

RSpec.describe User, type: :model do
    before do
        @user = User.create(username: "usuario", email: "usuario@gmail.com", password: 123456)
        @user2 = User.create(username: "user2", email: "user1992@gmail.com", password: 12345)
    end
    it "has valid attributes" do
        expect(@user).to be_valid
        # Passwords must have 6 or more characters
        expect(@user2).not_to be_valid
    end
    
end
