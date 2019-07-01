# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  User.destroy_all
  Sitter.destroy_all

  charles = User.create!(zip_code: 95050, password: "charles", email: "charles@yahoo.com")
  jennifer = User.create!(zip_code: 20403, password: "jennifer", email: "jennifer@yahoo.com")
  shelley = User.create!(zip_code: 43242, password: "shelley", email: "shelley@yahoo.com")
  amanda = User.create!(zip_code: 23123, password: "amanda", email: "amanda@yahoo.com")
  trevor = User.create!(zip_code: 12312, password: "trevor", email: "trevor@yahoo.com")
  demo = User.create!(zip_code: 12345, password: "demouser", email: "demouser@yahoo.com")

  sitter1 = Sitter.create!(
    user_id: charles.id, 
    city: "San Jose",
    state: "California",
    country: "United States",
    zip: 95050,
    title: "Welcome to my dog house!",
    sitter_bio: "I'll take care of your pet as if it were my own",
    home_type: "Palace",
    is_boarding: true,
    is_sitting: true,
    is_visiting: true,
    is_daycare: true,
    is_walking: true,
    boarding_price: 45,
    sitting_price: 30,
    daycare_price: 40,
    visiting_price: 35,
    walking_price: 20,
    is_small_dog: false,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: true,
    lat: 37.341000,
    lng: -121.965520
  )

  sitter2 = Sitter.create!(
    user_id: jennifer.id, 
    city: "San Jose",
    state: "California",
    country: "United States",
    zip: 95050,
    title: "Welcome to my dog house!",
    sitter_bio: "I'll take care of your pet as if it were my own",
    home_type: "Palace",
    is_boarding: true,
    is_sitting: true,
    is_visiting: true,
    is_daycare: true,
    is_walking: true,
    boarding_price: 45,
    sitting_price: 30,
    daycare_price: 40,
    visiting_price: 35,
    walking_price: 20,
    is_small_dog: false,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: true,
    lat: 36.341000,
    lng: -122.965520
  )

  sitter3 = Sitter.create!(
    user_id: jennifer.id, 
    city: "San Jose",
    state: "California",
    country: "United States",
    zip: 95050,
    title: "Welcome to my dog house!",
    sitter_bio: "I'll take care of your pet as if it were my own",
    home_type: "Palace",
    is_boarding: true,
    is_sitting: false,
    is_visiting: false,
    is_daycare: false,
    is_walking: false,
    boarding_price: 45,
    # sitting_price: 30,
    # daycare_price: 40,
    # visiting_price: 35,
    # walking_price: 20,
    is_small_dog: false,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: true,
    lat: 36.341000,
    lng: -122.965520
  )

end