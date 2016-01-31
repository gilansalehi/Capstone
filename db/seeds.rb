# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def lor_ip(n)
  loremIpsum = "Lorem ipsum dolor sit amet, ubique populo appellantur ex sit, enim elit ceteros ne mei. Quas munere prompta ad usu, et duo integre incorrupte dissentiunt. In vel hendrerit repudiandae, iisque vidisse no usu, quodsi atomorum eam ea. Sale feugait quaerendum eu sit, ut wisi liber vel. Ne putant invidunt euripidis per, at odio agam ius, ad eos aliquid argumentum elaboraret.

Pro at omnis incorrupte, et porro homero eam, ei fugit viderer sea. Te tation aliquid vis. Veniam delectus detraxit in cum. Sed homero voluptaria eu, ut mel alii noster dolorum. Ei elit nulla sensibus cum.

Nam at delenit nonumes minimum. Erat novum an vim. Vix error iriure sensibus id. Deserunt recteque expetenda ius ei, at rebum decore conceptam duo.

Democritum reprehendunt ex usu, ne augue homero libris duo, labores constituam eum ei. Tollit noster expetenda cu his, mel eu recteque signiferumque. Legere libris interesset pro ea, ne has atqui tritani definiebas. Sit ad ludus alterum suscipit. An vix putant habemus percipitur. Vix magna patrioque suscipiantur ei.

Vim et molestie eloquentiam, recusabo principes eam ne, luptatum tacimates cum eu. Et qui voluptatum constituam, everti noluisse sea eu, no eum facilisi perfecto consulatu. Veri forensibus mel et, te graece admodum quo. Graecis invidunt at quo, per facer civibus ut. Est fierent maluisset ne."

  return loremIpsum[0, n]
end

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

article2 = Article.create!(
  title: "Pirates",
  body: "Piracy is an act of robbery or criminal violence at sea. Those who engage in acts of piracy are called pirates. The earliest documented instances of piracy were in the 14th century BC, when the Sea Peoples, a group of ocean raiders, attacked the ships of the Aegean and Mediterranean civilizations. Narrow channels which funnel shipping into predictable routes have long created opportunities for piracy,[1] as well as for privateering and commerce raiding. Privateering uses similar methods to piracy, but the captain acts under orders of the state authorizing the capture of merchant ships belonging to an enemy nation, making it a legitimate form of war-like activity by non-state actors.[2](For a land-based parallel, compare the association of bandits and brigands with mountain passes.[3]) Historic examples include the waters of Gibraltar, the Strait of Malacca, Madagascar, the Gulf of Aden, and the English Channel, whose geographic strictures facilitated pirate attacks.[4]

While the term can include acts committed in the air, on land (especially across national borders or in connection with taking over and robbing a car or train), or in other major bodies of water or on a shore, this article focuses on maritime piracy. It does not normally include crimes committed against people traveling on the same vessel as the perpetrator (e.g. one passenger stealing from others on the same vessel). Piracy or pirating is the name of a specific crime under customary international law and also the name of a number of crimes under the municipal law of a number of states. In the 2000s, seaborne piracy against transport vessels remains a significant issue (with estimated worldwide losses of US$16 billion per year in 2007),[5][6] particularly in the waters between the Red Sea and Indian Ocean, off the Somali coast, and also in the Strait of Malacca and Singapore. Modern pirates favor using small boats and taking advantage of the small number of crew members on modern cargo vessels and transport ships. They also use large vessels to supply the smaller attack/boarding vessels. The international community is facing many challenges in bringing modern pirates to justice, as these attacks often occur in international waters.[7]",
  author_id: 1
)

article3 = Article.create!(
  title: "The Fifth Element",
  body: "The Fifth Element (French: Le Cinquième Élément) is a 1997 English-language French science fiction action film directed and co-written by Luc Besson. It stars Bruce Willis, Gary Oldman and Milla Jovovich. Mostly set in the 23rd century, the film's central plot involves the survival of planet Earth, which becomes the responsibility of Korben Dallas (Willis), a taxicab driver and former special forces major, after a young woman (Jovovich) falls into his cab. Dallas joins forces with her to recover four mystical stones essential for the defence of Earth against an impending attack.

Besson started writing the story that became The Fifth Element when he was 16 years old; he was 38 when the film opened in cinemas. Besson wanted to shoot the film in France, but suitable locations could not be found; filming took place instead in London and Mauritania. Comics writers Jean Giraud and Jean-Claude Mézières, whose comics provided inspiration for parts of the film, were hired for production design. Costume design was by Jean Paul Gaultier.

The Fifth Element received mainly positive reviews, although it tended to polarize critics. It has been called both the best and worst summer blockbuster of all time. The film was a financial success, earning more than $263 million at the box office on a $90 million budget. At the time of its release it was the most expensive European film ever made, and it remained the highest-grossing French film at the international box office until the release of The Intouchables in 2011.",
  author_id: 1
)
#
# article4 = Article.create!(title: "Title4", body: lor_ip(140), author_id: 1)
# article5 = Article.create!(title: "Title5", body: lor_ip(300), author_id: 1)
# article6 = Article.create!(title: "Title6", body: lor_ip(440), author_id: 1)
# article7 = Article.create!(title: "Title7", body: lor_ip(600), author_id: 1)
# article8 = Article.create!(title: "Title8", body: lor_ip(250), author_id: 1)
# article9 = Article.create!(title: "Title9", body: lor_ip(1000), author_id: 1)
# article10 = Article.create!(title: "Title10", body: lor_ip(800), author_id: 1)
# article11 = Article.create!(title: "Title11", body: lor_ip(640), author_id: 1)
# article12 = Article.create!(title: "Title12", body: lor_ip(400), author_id: 1)
