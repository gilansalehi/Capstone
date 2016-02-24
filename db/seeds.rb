# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(username: "guest", password: "password")

article0 = Article.create!(title: "Welcome to Clickapedia", body: "

Welcome to Clickapedia!

Find the article you're looking for by searching Clickapedia's database--just click the magnifying glass in the top-right corner of the page. If the topic you want is not yet in our database, you can import articles directly from Wikipedia using the WikiFetcher--just type in the title of the article you want and it will pop right up in the recent articles index. Clickapedia will even redirect any external links from the original article to corresponding articles in the Clickapedia database.

Edit any article in the database simply by clicking on the stylus icon above.  Go ahead, give it a try, write something in the space below:





Awesome!  When you're done, save your changes by clicking the save icon that has appeared in place of the stylus.  That was so easy!  Best of all, you don't have to worry whether your article will display properly once you save it.  Clickapedia leverages HTML5's contentEditable feature, so what you see is what you get.  You can even customize the header image of any page, either by uploading an image of your own or providing the url of a suitable image.  Just remember to be a good citizen of the internet, and don't use copyrighted material or vandalize pages.

Clickapedia has a few features coming down the pipeline, including User Profiles, Editor Rank, Protected Articles, and more.

If you have any questions, comments, or suggestions, go ahead and make note of them below.  Gilan Salehi, the creator of Clickapedia, checks this page on the regular and endeavors to answer questions and implement features as quickly as possible.

", author_id: 0, table_of_contents: "")
article1 = Article.create_from_url("https://en.wikipedia.org/wiki/Ocean")
article2 = Article.create_from_url("https://en.wikipedia.org/wiki/Star_Wars")
article3 = Article.create_from_url("https://en.wikipedia.org/wiki/Luke_Skywalker")
article4 = Article.create_from_url("https://en.wikipedia.org/wiki/App_Academy")
article6 = Article.create_from_url("https://en.wikipedia.org/wiki/Katana")
article7 = Article.create_from_url("https://en.wikipedia.org/wiki/Firefly_(TV_series)")
article8 = Article.create_from_url("https://en.wikipedia.org/wiki/NASA")
article5 = Article.create_from_url("https://en.wikipedia.org/wiki/Iran")
article9 = Article.create_from_url("https://en.wikipedia.org/wiki/France")
article10 = Article.create_from_url("https://en.wikipedia.org/wiki/Germany")
article11 = Article.create_from_url("https://en.wikipedia.org/wiki/Magnus_Carlsen")
article12 = Article.create_from_url("https://en.wikipedia.org/wiki/Chess")
