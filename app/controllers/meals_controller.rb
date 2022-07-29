class MealsController < ApplicationController
    skip_before_action :authorized
    
    # Show all Meals
    def index 
        meals = Meal.order(created_at: :desc)
        render json: meals
    end

    # Create Meals
    def create
        meal = Meal.create(meal_params)
        if meal.valid?
            render json: meal, status: :created
        else
            render json: {errors: ["Invalid Data"]}, status: :unprocessable_entity
        end
    end

    # Show specific meal, include associated reviews
    def show
        meal = Meal.find_by(id: params[:id])
        if meal
            render json: meal, include: [:reviews]
        else
            render json: {errors: ["Meal not found"]}, status: :no_content
        end
    end

    # Update likes of meal
    def update
        meal = Meal.find_by(id: params[:id])
        if meal
            meal.update(
                likes: params[:likes]
            )
            render json: meal
        else
            render json: {errors: ["Meal not found"]}, status: :unprocessable_entity
        end
    end

    # Delete meal
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
        params.permit(:name, :recipe, :cooking_time, :image, :likes)
    end

end
