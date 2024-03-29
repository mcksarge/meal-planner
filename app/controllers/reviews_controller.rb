class ReviewsController < ApplicationController
    skip_before_action :authorized

    # Create review
    def create
        review = Review.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: {errors: ["Invalid data"]}, status: :unprocessable_entity
        end
    end

    # Get all reviews
    def index
        reviews = Review.all
        render json: reviews, include: :meal
    end

    # Get specific review
    def show
        review = Review.find_by(id: params[:id])
        render json: review, include: :user
    end

    # Get user associated with Review
    def user
        review = Review.find_by(id: params[:id])
        render json: review.user
    end

    # Delete review
    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            render json: review
        else
            render json: {errors: ["Review not found"]}, status: :no_content
        end
    end

    private

    def review_params
        params.permit(:rating, :review, :user_id, :meal_id)
    end

end
