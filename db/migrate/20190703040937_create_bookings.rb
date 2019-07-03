class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :sitter_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.date :start_date, null: false, index: true
      t.date :end_date, null: false, index: true
      t.timestamps
    end
  end
end
