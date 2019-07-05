# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_04_013908) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "sitter_id", null: false
    t.integer "user_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["end_date"], name: "index_bookings_on_end_date"
    t.index ["sitter_id"], name: "index_bookings_on_sitter_id"
    t.index ["start_date"], name: "index_bookings_on_start_date"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "sitters", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "country", null: false
    t.integer "zip", null: false
    t.string "title", null: false
    t.string "sitter_bio", null: false
    t.string "home_type", null: false
    t.boolean "is_boarding", default: false, null: false
    t.boolean "is_sitting", default: false, null: false
    t.boolean "is_visiting", default: false, null: false
    t.boolean "is_daycare", default: false, null: false
    t.boolean "is_walking", default: false, null: false
    t.integer "boarding_price"
    t.integer "sitting_price"
    t.integer "daycare_price"
    t.integer "visiting_price"
    t.integer "walking_price"
    t.boolean "is_small_dog", default: false, null: false
    t.boolean "is_medium_dog", default: false, null: false
    t.boolean "is_large_dog", default: false, null: false
    t.boolean "is_giant_dog", default: false, null: false
    t.float "lat"
    t.float "lng"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "image_url"
    t.string "response_time"
    t.integer "response_rate"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.text "description"
    t.string "pet_type"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "zip_code"
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
