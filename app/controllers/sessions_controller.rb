class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create

    # Assign user to current session / Login User
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: [login: "Invalid username or password"]}, status: :unauthorized
        end
    end

    # Logout user
    def destroy
        session.delete :user_id
        head :no_content
    end

end
