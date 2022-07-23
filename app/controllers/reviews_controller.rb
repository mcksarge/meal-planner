class ReviewsController < ApplicationController
    skip_before_action :authorized

    def create
        review = Review.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: {errors: ["Invalid data"]}, status: :unprocessable_entity
        end
    end

    def index
        reviews = Review.all
        render json: reviews, include: :meal
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review, include: :user
    end

    def user
        review = Review.find_by(id: params[:id])
        render json: review.user
    end

    private

    def review_params
        params.permit(:rating, :review, :user_id, :meal_id)
    end

end
