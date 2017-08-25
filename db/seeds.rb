puts 'Creating users...'
john = User.create!(email: 'john@beatles.com', password: '12345678', avatar_url: 'http://vignette1.wikia.nocookie.net/peel/images/d/d6/John_Lennon.jpg/revision/latest?cb=20130925121148')
paul = User.create!(email: 'paul@beatles.com', password: '12345678', avatar_url: 'http://beatlesthe.free.fr/img/paul.jpg')
ringo = User.create!(email: 'ringo@beatles.com', password: '12345678', avatar_url: '')
george = User.create!(email: 'george@beatles.com', password: '12345678', avatar_url: '')

puts 'Creating products...'
startup_stash = Product.create!(
  name: 'Startup Stash',
  tagline: 'A curated directory of 400 resources & tools for startups',
  url: 'http://startupstash.com',
  user: john
)

startup_launch_list = Product.create!(
  name: 'Startup Launch List',
  tagline: 'Articles you need to read before launching a startup',
  url: 'http://startuplaunchlist.com',
  user: paul
)

puts 'Creating votes...'
john.up_votes startup_stash
paul.up_votes startup_stash
george.up_votes startup_stash

ringo.up_votes startup_launch_list
puts 'Finished!'
