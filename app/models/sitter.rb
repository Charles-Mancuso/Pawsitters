# == Schema Information
#
# Table name: sitters
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  city           :string           not null
#  state          :string           not null
#  country        :string           not null
#  zip            :integer          not null
#  title          :string           not null
#  sitter_bio     :string           not null
#  home_type      :string           not null
#  is_boarding    :boolean          default(FALSE), not null
#  is_sitting     :boolean          default(FALSE), not null
#  is_visiting    :boolean          default(FALSE), not null
#  is_daycare     :boolean          default(FALSE), not null
#  is_walking     :boolean          default(FALSE), not null
#  boarding_price :integer
#  sitting_price  :integer
#  daycare_price  :integer
#  visiting_price :integer
#  walking_price  :integer
#  is_small_dog   :boolean          default(FALSE), not null
#  is_medium_dog  :boolean          default(FALSE), not null
#  is_large_dog   :boolean          default(FALSE), not null
#  is_giant_dog   :boolean          default(FALSE), not null
#  lat            :float
#  lng            :float
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Sitter < ApplicationRecord

    belongs_to :user

    has_many :bookings
end
