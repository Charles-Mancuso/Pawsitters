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
  Booking.destroy_all

  charles = User.create!(zip_code: 95050, password: "charles", email: "charles@yahoo.com")
  jennifer = User.create!(zip_code: 20403, password: "jennifer", email: "jennifer@yahoo.com")
  shelley = User.create!(zip_code: 43242, password: "shelley", email: "shelley@yahoo.com")
  amanda = User.create!(zip_code: 23123, password: "amanda", email: "amanda@yahoo.com")
  trevor = User.create!(zip_code: 12312, password: "trevor", email: "trevor@yahoo.com")
  demo = User.create!(zip_code: 12345, password: "demouser", email: "demouser@yahoo.com")

  sitter1 = Sitter.create!(
    user_id: charles.id, 
    image_url: "https://as1.ftcdn.net/jpg/02/61/15/50/500_F_261155049_U8qBLOEQotaL9MIyreMDIYDOfSBWjlS3.jpg",
    name: "Angeli",
    city: "San Jose",
    state: "California",
    country: "United States",
    zip: 95148,
    title: "Welcome to my dog house!",
    sitter_bio: "I love dogs, they love me! We're gonna become great friends and family! If you
                 enjoyed that rhyme, now's the time! You gotta book me, Angeli!!!",
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
    is_small_dog: true,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: false,
    lat: 37.341000,
    lng: -121.965520
  )

  sitter2 = Sitter.create!(
    user_id: jennifer.id, 
    image_url: "https://bundlestorm.com/wp-content/uploads/2014/10/19-thumb.jpg",
    name: "Eric",
    city: "Santa Clara",
    state: "California",
    country: "United States",
    zip: 95050,
    title: "Can't wait to take care of your dogs!",
    sitter_bio: "Dog sitting isn't just a hobby, it's a lifestyle. You either do or you don't. These other dog sitters need to get on my level. If you book me, you're doing the right thing.",
    home_type: "Apartment",
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
    image_url: "https://static1.squarespace.com/static/5761b510356fb07cfd0a7201/5761bf36893fc0e91240762c/5b569f0f352f53339a672dc0/1535567195344/flower.jpg?format=1000w",
    name: "Freida",
    city: "Davis",
    state: "California",
    country: "United States",
    zip: 95616,
    title: "book me please I need money for college",
    sitter_bio: "My name is Freida and I'm so in love with dogs. If you choose me, your dog will be taken
                 care of as if they were my own. They will be in great hands!",
    home_type: "House",
    is_boarding: true,
    is_sitting: false,
    is_visiting: false,
    is_daycare: false,
    is_walking: false,
    boarding_price: 45,
    is_small_dog: false,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: true,
    lat: 36.341000,
    lng: -122.965520
  )

  Booking.create!(
    user_id: charles.id,
    sitter_id: sitter1.id,
    start_date: "20190129",
    end_date: "20190125"
  )

  Booking.create!(
    user_id: charles.id,
    sitter_id: sitter1.id,
    start_date: "20190217",
    end_date: "20190221"
  )

  Booking.create!(
    user_id: charles.id,
    sitter_id: sitter2.id,
    start_date: "20190310",
    end_date: "20190314"
  )
end