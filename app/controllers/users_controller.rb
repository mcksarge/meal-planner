class UsersController < ApplicationController
    before_action :authorize

    def create
        byebug
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    

    private

    def authorize
        render json: { errors: ["Not Authorized"] }, status: :unauthorized
    end

    def user_params
        params.permit(:username, :password)
    end

end
