class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :show, :index]

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    def index
        users = User.all
        render json: users
    end

    def summary
        user = User.find_by(id: params[:id])
        review = Review.find_by(user_id: params[:id])
        if user
            meal = Meal.find_by(id: review.meal_id)
            render json: meal
        else
            render json: {errors: ["User not found"]}, status: :not_found
        end
    end

    private

    def authorize
        render json: { errors: ["Not Authorized"] }, status: :unauthorized
    end

    def user_params
        params.permit(:username, :name, :password)
    end

end
