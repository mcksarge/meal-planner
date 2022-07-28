class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :recipe, :cooking_time, :image, :likes, :created_at, :reviews

  def meal_reviews
    "#{self.object.reviews}"
  end

  def self.sort_by_name
    Meal.all.order(:created_at)
  end

end
