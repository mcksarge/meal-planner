class CreateMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :recipe
      t.integer :cooking_time
      t.string :image

      t.timestamps
    end
  end
end
