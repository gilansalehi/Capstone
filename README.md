# TODO:
// DO SEARCH
// DO EDITING
// DO IMAGES
// fix article rendering to include header image
// create a rescue for routing errors that says "that page does not exist, would you like to create it?"
// remove "edit section" when scraping wikipedia
// get index to tile properly
// format content table, link to sidebar

# Clickapedia

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Clickapedia is a single-page web application inspired by Wikipedia and built using Ruby on Rails and React.

"Users can search the database for articles and read them, with the option to edit and upload articles after setting up an account."

Clickapedia allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create an account
- [x] Log in / Log out
- [x] read an article...
- [x] fetch an article
- [ ] fetch a header image from google images api
- [ ] toggle presence of sidebar...
- [ ] Create, read, edit articles
- [ ] Search the database for articles related to a search term
- [ ] Tag articles with portal information.
- [ ] Apply complex styling to articles while editing.  WYSISYG.
- [ ] Create a personal article as their profile page.

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/wireframes
[schema]: ./docs/schema.md

## Implementation Timeline

### W1D2: User Authentication, Article Model, JBuilder
I will spend the day setting up user signup and authentication using
BCrypt.  Each user will have a personal profile page that is just an article
about them, but implementing this feature will have to wait until I've enabled
document editing.  Estimated time: 1/2 day.

If there is time remaining once I've got basic auth set up, I will get a jump
start on the following day's Articles, perhaps on the backend side, completing
article models and the json api.  Estimated time: 1/2 day.

* authentication
* user models
* basic project set-up
* CSS styling
* nav bar

[details]: ./docs/phases/w1d1

### W1D3: Article Page
I will create the heart and soul of the website: the article page.  If it is
allowed, I would like to crib layout from the wikiwand version of wikipedia
articles, where the layout is much nicer than vanilla wikipedia.  See attached
image files for reference. (docs > images > screencaps > wikiwand-* )

This will also require setting up an articles table in the database, along
with associated controller and jbuilder views.  Est time: 1 day.

* react router
* react components
  * navigation header and sidebar
  * article title, body, and images
* article store
* jquery to fetch articles from database

[details]: ./docs/phases/w1d2

### W1D4: Home Page
I will create a main splash page that contains links to a variety of articles
and interesting topics.  The focus will be on styling and navigation.  An early
version of the home page may consist merely of a list of articles, however if
time permits I will allow for a random article to be featured.  The focus of
today will be on styling and navigation.  If there is time, I will implement a
news feature, which curates a list of the most recently created articles and
displays them prominently as "What's New".

I anticipate the react router will take me some time, so I want to allocate a full day to this.  

* React Router
* react components
* CSS styling

[details]: ./docs/phases/w1d3

### W1D5: Edit Page
Each article will include a link allowing anyone to edit the article.  I will
create the page that allows users to edit an article directly from the site.
Advanced features I would like to implement include advanced styling and
images.  Estimated time: 1 - 2 days.

* as yesterday

[details]: ./docs/phases/w1d4

### WEEKEND
The weekend is reserved for catching up and researching bonus features.

### W2D1: Edit Page II
...con't from W1D5.

* as yesterday

[details]: ./docs/phases/w1d5

### W2D2: CSS Styling and Wikiwand Magic
My ultimate goal for the project is to make the layout more akin to wikiwand's
lovely chrome extension for Wikipedia.  I'm not sure how to implement a toggle
to switch from one CSS styling to another, but that's what I'd like to spend
my time on today.  Clicking the Clickapedia logo will toggle between the
old school Wikipedia article format and the wikiwand layout.

* CSS styling

[details]: .docs/images/screencaps

### W2D3: Homepage Newsfeed
Wikipedia's homepage features a random article, and displays a column of
what's "In the News".  I hope to implement my own version of the various
feeds on Wikipedia's homepage.  Features to implement include: "What's New",
"Did You Know?", and "On This Day In..."

* Flux views

[details]: .docs/phases/w2_bonus_features

### W2D4: Mobile
Adapting the site with alternate CSS to display properly on mobile devices.

### W2D5: Presentation
Hopefully I'll have a couple of the fancy bonus features implemented
to show them off for everyone.


### Bonus Features (TBD)
- [ ] Use google translate to translate article text in real time.
- [ ] Use api requests to auto-generate articles that don't exist on my site.
- [ ] Use api requests to auto-generate article content such as images.
- [ ] Make homepage into a newsfeed updated daily.
- [ ] Implement editor authority feature, preventing low-level editors from
      vandalizing the articles of high-level contributors.
- [ ] STAR WARS STYLE: Using CSS wizardry, create a view mode that will tilt
      transform, and scroll the article to look like the Star Wars opening crawl.
