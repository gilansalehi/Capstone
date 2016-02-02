# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(username: "guest", password: "password")
article1 = Article.create_from_url("https://en.wikipedia.org/wiki/Ocean")
article2 = Article.create_from_url("https://en.wikipedia.org/wiki/Star_Wars")
article3 = Article.create_from_url("https://en.wikipedia.org/wiki/Luke_Skywalker")
article4 = Article.create_from_url("https://en.wikipedia.org/wiki/App_Academy")
article5 = Article.create_from_url("https://en.wikipedia.org/wiki/Iran")
article6 = Article.create_from_url("https://en.wikipedia.org/wiki/Katana")
article7 = Article.create_from_url("https://en.wikipedia.org/wiki/Firefly_(TV_series)")
article8 = Article.create_from_url("https://en.wikipedia.org/wiki/NASA")

# article4 = Article.create!(title: "Title4", body: lor_ip(140), author_id: 1)
# article5 = Article.create!(title: "Title5", body: lor_ip(300), author_id: 1)
# article6 = Article.create!(title: "Title6", body: lor_ip(440), author_id: 1)
# article7 = Article.create!(title: "Title7", body: lor_ip(600), author_id: 1)
# article8 = Article.create!(title: "Title8", body: lor_ip(250), author_id: 1)
# article9 = Article.create!(title: "Title9", body: lor_ip(1000), author_id: 1)
# article10 = Article.create!(title: "Title10", body: lor_ip(800), author_id: 1)
# article11 = Article.create!(title: "Title11", body: lor_ip(640), author_id: 1)
# article12 = Article.create!(title: "Title12", body: lor_ip(400), author_id: 1)
