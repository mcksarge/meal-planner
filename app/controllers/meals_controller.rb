class MealsController < ApplicationController
    skip_before_action :authorized
    
    def index
        meals = Meal.all
        render json: meals
    end

    def create
        meal = Meal.create(meal_params)
        if meal.valid?
            render json: meal, status: :created
        else
            render json: {errors: ["Invalid Data"]}, status: :unprocessable_entity
        end
    end

    private

    def meal_params
        params.permit(:name, :recipe, :cooking_time, :image)
    end

end
