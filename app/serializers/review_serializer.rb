class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :user
end
