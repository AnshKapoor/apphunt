puts 'Creating users...'
john = User.create!(email: 'john@beatles.com', password: '12345678', avatar_url: 'http://vignette1.wikia.nocookie.net/peel/images/d/d6/John_Lennon.jpg/revision/latest?cb=20130925121148')
paul = User.create!(email: 'paul@beatles.com', password: '12345678', avatar_url: 'http://beatlesthe.free.fr/img/paul.jpg')
ringo = User.create!(email: 'ringo@beatles.com', password: '12345678', avatar_url: '')
george = User.create!(email: 'george@beatles.com', password: '12345678', avatar_url: '')
charlie = User.create!(email: 'charlie.jeppsson1@gmail.com', password: '12345678', avatar_url: 'avatar-charlie.jpg')

puts 'Creating products...'
inline_app = Product.create!(
  name: 'InLine',
  tagline: 'Never wait in line again',
  url: 'http://inline-app.com',
  user: charlie
)

tunebook_app = Product.create!(
  name: 'Tunebook',
  tagline: 'Your one-stop-shop for discovering new music',
  url: 'http://tunebook.herokuapp.com',
  user: charlie
)

unify_app = Product.create!(
  name: 'Unify',
  tagline: "Don't miss out on valuable connections",
  url: 'http://uni-fy.eu',
  user: charlie
)


puts 'Creating votes...'
john.up_votes inline_app
paul.up_votes inline_app
george.up_votes inline_app
charlie.up_votes inline_app

paul.up_votes unify_app
george.up_votes unify_app
charlie.upvotes unify_app

charlie.upvotes tunebook_app
ringo.up_votes tunebook_app

puts 'Finished!'
