class CreateSitters < ActiveRecord::Migration[5.2]
  def change
    create_table :sitters do |t|
      t.integer :user_id, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.integer :zip, null: false
      t.string :title, null: false
      t.string :sitter_bio, null: false
      t.string :home_type, null: false
      t.boolean :is_boarding, null: false, default: false
      t.boolean :is_sitting, null: false, default: false
      t.boolean :is_visiting, null: false, default: false
      t.boolean :is_daycare, null: false, default: false
      t.boolean :is_walking, null: false, default: false
      t.integer :boarding_price
      t.integer :sitting_price
      t.integer :daycare_price
      t.integer :visiting_price
      t.integer :walking_price
      t.boolean :is_small_dog, null: false, default: false
      t.boolean :is_medium_dog, null: false, default: false
      t.boolean :is_large_dog, null: false, default: false
      t.boolean :is_giant_dog, null: false, default: false
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
