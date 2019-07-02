class AddNameColumnOnSitter < ActiveRecord::Migration[5.2]
  def change
    add_column :sitters, :name, :string
  end
end
