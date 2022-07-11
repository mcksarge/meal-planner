class AddIngredientsToRecipe < ActiveRecord::Migration[6.1]
  def change
    add_column :meals, :ingredients, :string
  end
end
