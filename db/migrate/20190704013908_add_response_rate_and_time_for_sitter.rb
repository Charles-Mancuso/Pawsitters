class AddResponseRateAndTimeForSitter < ActiveRecord::Migration[5.2]
  def change
    add_column :sitters, :response_time, :string
    add_column :sitters, :response_rate, :integer
  end
end
