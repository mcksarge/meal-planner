class MealsController < ApplicationController
    skip_before_action :authorized
    
    def index
        meals = Meal.all
        render json: meals
    end

end
