class AddImageUrlForSitter < ActiveRecord::Migration[5.2]
  def change
    add_column :sitters, :image_url, :string
  end
end
