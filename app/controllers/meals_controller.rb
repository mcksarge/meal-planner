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

    def summary
        meal = Meal.find(params[:id])
        render json: meal.reviews
    end

    def show
        meal = Meal.find_by(id: params[:id])
        if meal
            render json: meal, include: [:reviews]
        else
            render json: {errors: ["Meal not found"]}, status: :no_content
        end
    end

    def destroy
        meal = Meal.find_by(id: params[:id])
        if meal
            meal.destroy
            render json: meal
        else
            render json: {errors: ["Meal not found"]}, status: :no_content
        end
    end

    private

    def meal_params
        params.permit(:name, :recipe, :cooking_time, :image)
    end

end
