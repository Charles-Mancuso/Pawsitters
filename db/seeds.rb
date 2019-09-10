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
    image_url: "https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg",
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
    response_time: "thirty minutes or less",
    response_rate: 99,
    lat: 37.341000,
    lng: -121.965520
  )

  sitter2 = Sitter.create!(
    user_id: jennifer.id, 
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlNys-bNEVSRy1Whe48Y8Q7Qs0cSi9-oG7FzrHdZFt-x8E1JvR",
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
    response_time: "a few hours",
    response_rate: 50,
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
    response_time: "a few minutes",
    response_rate: 100,
    lat: 36.341000,
    lng: -122.965520
  )

  sitter4 = Sitter.create!(
    user_id: jennifer.id, 
    image_url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Kelly",
    city: "San Jose",
    state: "California",
    country: "United States",
    zip: 95148,
    title: "I like to take care of dogs!",
    sitter_bio: "Hello! My name is Kelly and I love to take care of dogs. They have always been a passion of mine and I will always love doing it. You won't regret booking me!",
    home_type: "House",
    is_boarding: true,
    is_sitting: true,
    is_visiting: true,
    is_daycare: false,
    is_walking: false,
    boarding_price: 55,
    sitting_price: 30,
    visiting_price: 30,
    is_small_dog: false,
    is_medium_dog: false,
    is_large_dog: true,
    is_giant_dog: false,
    response_time: "thirty minutes or less",
    response_rate: 78,
    lat: 36.341000,
    lng: -122.965520
  )

    sitter5 = Sitter.create!(
    user_id: jennifer.id, 
    image_url: "https://static.boredpanda.com/blog/wp-content/uploads/2018/12/ai-image-generation-fake-faces-people-nvidia-5c18b20b472c2__700.jpg",
    name: "Josh",
    city: "Sacramento",
    state: "California",
    country: "United States",
    zip: 95616,
    title: "Choose me!",
    sitter_bio: "Some of my hobbies are coding, playing video games, and playing tennis. When your dog stays with me, they will definitely have a great, active time. If they like to run, we can go running. If they like the dog park, we will go to the dog park. Whatever your dog wants, I will provide!",
    home_type: "House",
    is_boarding: true,
    is_sitting: true,
    is_visiting: false,
    is_daycare: true,
    is_walking: false,
    boarding_price: 60,
    sitting_price: 30,
    daycare_price: 30,
    is_small_dog: false,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: true,
    response_time: "a few minutes",
    response_rate: 100,
    lat: 36.341000,
    lng: -122.965520
  )

    sitter6 = Sitter.create!(
    user_id: jennifer.id, 
    image_url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Owen",
    city: "Davis",
    state: "California",
    country: "United States",
    zip: 95618,
    title: "Dogs are friends, not food!",
    sitter_bio: "I'm a vegan. Need I say more? Well, I will. I like to sew. I like to watch paint dry. I will watch your dog. They better not slobber, though. I hate slobber",
    home_type: "House",
    is_boarding: true,
    is_sitting: false,
    is_visiting: false,
    is_daycare: false,
    is_walking: false,
    boarding_price: 20,
    is_small_dog: false,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: true,
    response_time: "a few minutes",
    response_rate: 100,
    lat: 36.341000,
    lng: -122.965520
  )

    sitter7 = Sitter.create!(
    user_id: jennifer.id, 
    image_url: "https://www.lorealparisusa.com/~/media/images/lop/wow-data/honorees/2018/loreal-paris-wow-honorees-bios-main-shreyaantha.jpg",
    name: "Gretta",
    city: "Los Banos",
    state: "California",
    country: "United States",
    zip: 95600,
    title: "Dogs are love, dogs are life",
    sitter_bio: "My name is Gretta and I've been doing Pawsitters for over 2 year now. I love any and all dogs, and I will not say not to sitting your dog. We will have numerous activities throughout the day to make sure they're well exercised. Hope to see you soon!",
    home_type: "House",
    is_boarding: true,
    is_sitting: true,
    is_visiting: true,
    is_daycare: true,
    is_walking: true,
    boarding_price: 50,
    sitting_price: 30,
    visiting_price: 30,
    daycare_price: 30,
    walking_price: 40,
    is_small_dog: false,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: true,
    response_time: "under a minutes",
    response_rate: 100,
    lat: 36.341000,
    lng: -122.965520
  )

    sitter8 = Sitter.create!(
    user_id: jennifer.id, 
    image_url: "https://amp.businessinsider.com/images/589dbb873149a101788b4c85-750-562.jpg",
    name: "Ashley",
    city: "San Francisco",
    state: "California",
    country: "United States",
    zip: 94818,
    title: "Let me take care of your dog!",
    sitter_bio: "Ever since I was a child, watching dogs has been a huge passion of mine. Make my dreams come true and let me take care of your dogs for you! They will get 24/7 constant attention because I live at home. Will be active as well",
    home_type: "House",
    is_boarding: true,
    is_sitting: false,
    is_visiting: false,
    is_daycare: false,
    is_walking: true,
    boarding_price: 35,
    walking_price: 20,
    is_small_dog: false,
    is_medium_dog: true,
    is_large_dog: false,
    is_giant_dog: false,
    response_time: "between ten to fifteen minutes",
    response_rate: 100,
    lat: 36.341000,
    lng: -122.965520
  )

    sitter9 = Sitter.create!(
    user_id: jennifer.id, 
    image_url: "https://ewedit.files.wordpress.com/2019/03/cagleheadshot.jpg",
    name: "Paul",
    city: "San Diego",
    state: "California",
    country: "United States",
    zip: 92648,
    title: "I LOVE DOGS",
    sitter_bio: "My name is Paul and I'm a politician. I LOVE DOGS. unfortunately I won't be home much because I always have work to do, but... I LOVE DOGS. Can't go wrong with booking me seeing how much I LOVE DOGS. Please choose me as your sitter! And also vote for me.",
    home_type: "House",
    is_boarding: true,
    is_sitting: false,
    is_visiting: false,
    is_daycare: false,
    is_walking: false,
    boarding_price: 99,
    is_small_dog: true,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: false,
    response_time: "two hours or more",
    response_rate: 10,
    lat: 36.341000,
    lng: -122.965520
  )

    sitter10 = Sitter.create!(
    user_id: jennifer.id, 
    image_url: "https://s3-ap-southeast-1.amazonaws.com/lunchclick/wp-content/uploads/2015/07/3AqQZ.jpg",
    name: "Greg",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    zip: 95055,
    title: "Hey, I'm Greg",
    sitter_bio: "My name is Greg. I'm 17 and just recently became a model. Looking to live a relaxing life, looking after and taking care of your dogs. I can handle just about anything. Book me before it's too late!",
    home_type: "House",
    is_boarding: true,
    is_sitting: true,
    is_visiting: false,
    is_daycare: true,
    is_walking: false,
    boarding_price: 40,
    sitting_price: 30,
    daycare_price: 20,
    is_small_dog: false,
    is_medium_dog: false,
    is_large_dog: false,
    is_giant_dog: true,
    response_time: "a few minutes",
    response_rate: 100,
    lat: 36.341000,
    lng: -122.965520
  )

  Booking.create!(
    user_id: demo.id,
    sitter_id: sitter1.id,
    start_date: "20190129",
    end_date: "20190125"
  )

  Booking.create!(
    user_id: demo.id,
    sitter_id: sitter2.id,
    start_date: "20190217",
    end_date: "20190221"
  )

  Booking.create!(
    user_id: demo.id,
    sitter_id: sitter3.id,
    start_date: "20190310",
    end_date: "20190314"
  )
end