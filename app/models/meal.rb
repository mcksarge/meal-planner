class Meal < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    def sort_by_date
        Meal.all.order(:created_at)
    end
end
