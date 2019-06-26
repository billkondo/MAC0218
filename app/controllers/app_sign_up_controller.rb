class AppSignUpController < Devise::RegistrationsController
  def create
    build_resource(sign_up_params)

    resource.save
    yield resource if block_given?
    if resource.persisted?

      # Check if model is active
      if resource.active_for_authentication?
        sign_up(resource_name, resource)
        render json: { status: "OK" }
      else
        expire_data_after_sign_in!
        render json: { status: "ERROR" }
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      render json: { status: "ERROR_AUTH", errors: resource.errors.as_json }
    end
  end

  def registration_params
    params.require(:user).permit(:email,  :password, :password_confirmation, :username)
  end
end
