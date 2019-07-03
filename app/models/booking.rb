class Booking < ApplicationRecord
    validates :sitter_id, :user_id, :start_date, :end_date, presence: true

    belongs_to :sitter
    belongs_to :user
end