class RemoveColumnsFromUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :hosting_preferences
    remove_column :users, :size_preference_for_hosting
    remove_column :users, :size_preference_for_travelling
  end
end
