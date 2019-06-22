module ControllerMacros
  def login_user
    @request.env["devise.mapping"] = Devise.mappings[:user]
    user = FactoryBot.create(:user)
    sign_in user
  end
end