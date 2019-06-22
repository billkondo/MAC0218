require 'rails_helper'

RSpec.describe User, type: :model do
    before(:all) do # Sem o :all o rpsec executa as criacoes de objeto antes de todo teste
        @user = create(:user)
    end
    it "is a valid user" do
        expect(@user).to be_valid
    end
    it "passwords must have 6 or more chars" do
        invalid_password = build(:user, password: 12345, password_confirmation: 12345)
        expect(invalid_password).not_to be_valid
    end
    it "has a unique username" do
        invalid_username = build(:user, username: @user.username)
        expect(invalid_username).not_to be_valid
    end
    it "has a unique email" do
        invalid_email = build(:user, email: @user.email)
        expect(invalid_email).to_not be_valid
    end
    it "is not valid without a password" do 
        nil_password = build(:user, password: nil)
        expect(nil_password).to_not be_valid
    end
    it "is not valid without a username" do 
        nil_username = build(:user, username: nil)
        expect(nil_username).to_not be_valid
    end
    it "is not valid without an email" do
        nil_email = build(:user, email: nil)
        expect(nil_email).to_not be_valid
    end
    it "must have valid password confirmation" do
        wrong_confirmation = build(:user, password: 123456, password_confirmation: 654321)
        expect(wrong_confirmation).to_not be_valid
    end
end
