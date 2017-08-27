puts 'Cleaning up database...'
Product.destroy_all
User.destroy_all


puts 'Creating users...'
john = User.create!(
  email: 'john@beatles.com',
  password: '12345678',
  avatar_url: 'lennon-avatar.jpg'
)
paul = User.create!(
  email: 'paul@beatles.com',
  password: '12345678',
  avatar_url: 'http://beatlesthe.free.fr/img/paul.jpg'
)
ringo = User.create!(
  email: 'ringo@beatles.com',
  password: '12345678',
  avatar_url: ''
)
george = User.create!(
  email: 'george@beatles.com',
  password: '12345678',
  avatar_url: ''
)
charlie = User.create!(
  email: 'charlie.jeppsson1@gmail.com',
  password: '12345678',
  avatar_url: 'avatar-charlie.jpg'
)
donald = User.create!(
  email: 'donald@trump.com',
  password: '12345678',
  avatar_url: 'donald-avatar.jpg'
)
jon = User.create!(
  email: 'jon@snow.com',
  password: '12345678',
  avatar_url: 'jon-snow-avatar.jpg'
)
mark = User.create!(
  email: 'mark@zuckerberg.com',
  password: '12345678',
  avatar_url: 'zuckerberg-avatar.jpg'
)
elon = User.create!(
  email: 'elon@musk.com',
  password: '12345678',
  avatar_url: 'elon-avatar.jpg'
)


puts 'Creating products for sale...'
inline_app = Product.create!(
  name: 'InLine',
  tagline: 'Never wait in line again',
  description: 'Full-featured RESTful web app powered by Ruby on Rails, JavaScript, PostgreSQL, ActionCable and Twitter Bootstrap...',
  category: 'Sharing economy',
  url: 'http://inline-app.com',
  user: charlie,
  image_url: 'inline-home-page.png',
  for_sale: true
)
tunebook_app = Product.create!(
  name: 'Tunebook',
  tagline: 'Your one-stop-shop for discovering new music',
  description: 'Full-featured RESTful web app powered by Node.js, Express.js, MongoDB, Angular2...',
  category: 'Music',
  url: 'http://tunebook.herokuapp.com',
  user: charlie,
  image_url: 'tunebook-home-page.png',
  for_sale: true
)
sgt_popper_app = Product.create!(
  name: 'Sgt Popper',
  tagline: 'Think Spotify, but for Sgt Pepper on repeat!',
  description: 'Subscription music streaming service, powered by Node, React, MongoDB, and many more cutting-edge technologies...',
  category: 'Music',
  user: john,
  for_sale: true
)
unify_app = Product.create!(
  name: 'Unify',
  tagline: "Don't miss out on valuable connections",
  description: 'Full-featured RESTful web app powered by Ruby on Rails, JavaScript and PostgreSQL...',
  category: 'Social media',
  url: 'http://uni-fy.eu',
  user: charlie,
  image_url: 'unify-home-page-normal.png',
  for_sale: true
)


puts 'Creating products wanted...'
firewall_app = Product.create!(
  name: 'US/Mexico firewall',
  description: 'I’m looking for someone to build me a firewall to protect me from Mexican hackers. I will make Mexico pay you for it.',
  category: 'Security',
  user: donald,
  for_sale: false
)
army_recruit_app = Product.create!(
  name: 'App that helps me recruit soldiers to fight the white walkers',
  description: 'Will offer a lordship to anyone who can code me the best recruitment app the world has ever seen and...',
  category: 'Recruitment',
  user: jon,
  for_sale: false
)

social_media_app = Product.create!(
  name: 'Next big thing in social media',
  description: 'My own company is pretty much out of ideas so I’d love to find someone who could develop the next big thing in social media for us...',
  category: 'Social media',
  user: mark,
  for_sale: false
)
rocket_app = Product.create!(
  name: 'An Uber for spaceships',
  description: 'If someone would be up to building me a sharing economy app for rockets it would be great...',
  category: 'Sharing economy',
  user: elon,
  for_sale: false
)


puts 'Creating votes...'
john.up_votes inline_app
paul.up_votes inline_app
george.up_votes inline_app
charlie.up_votes inline_app
donald.up_votes inline_app
jon.up_votes inline_app
mark.up_votes inline_app
elon.upvotes inline_app

paul.up_votes unify_app
george.up_votes unify_app
charlie.upvotes unify_app
jon.upvotes unify_app

john.up_votes sgt_popper_app
paul.up_votes sgt_popper_app
george.up_votes sgt_popper_app
jon.up_votes sgt_popper_app
mark.up_votes sgt_popper_app

charlie.upvotes tunebook_app
ringo.up_votes tunebook_app
elon.upvotes tunebook_app

john.up_votes army_recruit_app
paul.up_votes army_recruit_app
george.up_votes army_recruit_app
charlie.upvotes army_recruit_app
mark.upvotes army_recruit_app
ringo.upvotes army_recruit_app
donald.upvotes army_recruit_app
elon.upvotes army_recruit_app

john.up_votes social_media_app
george.up_votes social_media_app
charlie.up_votes social_media_app
donald.up_votes social_media_app

donald.up_votes firewall_app

george.up_votes rocket_app
charlie.upvotes rocket_app
mark.upvotes rocket_app
ringo.upvotes rocket_app
donald.upvotes rocket_app
elon.upvotes rocket_app

puts 'Finished!'
