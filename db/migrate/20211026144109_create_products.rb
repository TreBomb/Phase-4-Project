class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :image
      t.integer :price
      t.integer :rating
      t.belongs_to :brand, null: false, foreign_key: true

      t.timestamps
    end
  end
end
