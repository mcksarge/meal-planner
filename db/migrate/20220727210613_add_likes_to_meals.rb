class AddLikesToMeals < ActiveRecord::Migration[6.1]
  def change
    add_column :meals, :likes, :integer
  end
end
