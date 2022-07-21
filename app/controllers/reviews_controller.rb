class ReviewsController < ApplicationController
    skip_before_action :authorized

    def index
        if params[:meal_id]
            meal = Meal.find(params[:meal_id])
            reviews = meal.reviews
        else
            reviews = Review.all
        end
        render json: reviews, include: :meal
    end

end
