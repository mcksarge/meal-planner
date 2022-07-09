class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :recipe, :cooking_time, :image
end
