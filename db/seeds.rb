# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

User.create!(username: "charles", password: "charles", email: "charles@yahoo.com")
User.create!(username: "jennifer", password: "jennifer", email: "jennifer@yahoo.com")
User.create!(username: "shelley", password: "shelley", email: "shelley@yahoo.com")
User.create!(username: "amanda", password: "amanda", email: "amanda@yahoo.com")
User.create!(username: "trevor", password: "trevor", email: "trevor@yahoo.com")