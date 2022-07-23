class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :meals, through: :reviews
    validates :username, presence: true, uniqueness: true
    accepts_nested_attributes_for :reviews
end
