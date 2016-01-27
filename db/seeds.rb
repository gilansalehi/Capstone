# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(username: "guest", password: "password")
article1 = Article.create!(title: "Ocean",
  body: "An ocean (from Ancient Greek Ὠκεανός, transc. Okeanós, the sea of
  classical antiquity[1]) is a body of saline water that composes much of a
  planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional
  divisions of the World Ocean, which covers almost 71% of its surface. These
  are, in descending order by area, the Pacific, Atlantic, Indian, Southern,
  and Arctic Oceans.[3][4] The word sea is often used interchangeably with
  \"ocean\" in American English but, strictly speaking, a sea is a body of
  saline water (generally a division of the world ocean) partly or fully
  enclosed by land.[5]

  Saline water covers approximately 72% of the planet's surface (~3.6×108 km2)
  and is customarily divided into several principal oceans and smaller seas,
  with the ocean covering approximately 71% of Earth's surface.[6] The ocean
  contains 97% of Earth's water, and oceanographers have stated that less than
  5% of the World Ocean has been explored.[6] The total volume is approximately
  1.35 billion cubic kilometers (320 million cu mi)[7] with an average depth of
  nearly 3,700 meters (12,100 ft).[8][9]

  As it is the principal component of Earth's hydrosphere, the world ocean is
  integral to all known life, forms part of the carbon cycle, and influences
  climate and weather patterns. It is the habitat of 230,000 known species,
  although much of the oceans depths remain unexplored, and over two million
  marine species are estimated to exist.[10] The origin of Earth's oceans
  remains unknown; oceans are thought to have formed in the Hadean period and
  may have been the impetus for the emergence of life.

  Extraterrestrial oceans may be composed of water or other elements and
  compounds. The only confirmed large stable bodies of extraterrestrial surface
  liquids are the lakes of Titan, although there is evidence for the existence
  of oceans elsewhere in the Solar System. Early in their geologic histories,
  Mars and Venus are theorized to have had large water oceans. The Mars ocean
  hypothesis suggests that nearly a third of the surface of Mars was once
  covered by water, and a runaway greenhouse effect may have boiled away the
  global ocean of Venus. Compounds such as salts and ammonia dissolved in water
  lower its freezing point, so that water might exist in large quantities in
  extraterrestrial environments as brine or convecting ice. Unconfirmed oceans
  are speculated beneath the surface of many dwarf planets and natural
  satellites; notably, the ocean of Europa is estimated to have over twice the
  water volume of Earth. The Solar System's giant planets are also thought to
  have liquid atmospheric layers of yet to be confirmed compositions. Oceans
  may also exist on exoplanets and exomoons, including surface oceans of
  liquid water within a circumstellar habitable zone. Ocean planets are a
  hypothetical type of planet with a surface completely covered with
  liquid.[11][12])", author_id: 1)
