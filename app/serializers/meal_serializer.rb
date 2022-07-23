class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :recipe, :cooking_time, :image, :reviews

  def meal_reviews
    "#{self.object.reviews}"
  end

end
