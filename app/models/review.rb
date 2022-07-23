class Review < ApplicationRecord
    belongs_to :user
    belongs_to :meal
    accepts_nested_attributes_for :user
end
