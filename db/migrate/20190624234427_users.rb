class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true, unique: true
      t.string :email, null: false, index: true, unique: true
      t.text :description, null: false
      t.string :pet_type, null: false
      t.string :hosting_preferences, null: false
      t.string :size_preference_for_hosting, null: false
      t.string :size_preference_for_travelling, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true, unique: true
      
      t.timestamps
    end
  end
end
