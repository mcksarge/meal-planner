class UsersController < ApplicationController
    before_action :authorize

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def authorize
        render json: { errors: ["Not Authorized"] }, status: :unauthorized
    end

end
