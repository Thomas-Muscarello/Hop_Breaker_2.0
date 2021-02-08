# Hop_Breaker_2.0
Your Classic brick Breaker Game but with Hops and Grains

## Usage
This app is just a fun spin on the classic brick breaker game.

This is a  Single Page Application (SPA). My frontend is built with HTML, CSS, and JavaScript. It communicates with a backend API that is built with Ruby and Rails. 
Whenever the user has no more lives or breaks all the bricks, they will be able to submit their name and upload it to the list of other scores of whomever played the game.

The user loses a life if they allow the Hop hit the bottom of the gamescreen.
Once the game is over and they are able to submit their name and score, the user has the ability to either click on a new game button that will reset the canvas, or see all of the other users and their scores.

There is a delete function commented out currently for testing purposes only. However I can see the feautre being needed if a login function was to be created.

A user can also create more bricks by switching any ```0``` to a ```1``` in the level.js in ```level1```.

## Installation
To install this app, clone and execute the following: ```bundle install```

Running the App
You will want to run ```rails s``` in one terminal while in /backend, and than in another terminal enter ```open index.html``` while in /frontend.

## Roadmap
Eventually I can see myself adding to this app that allows other users to create a user login.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/Thomas-Muscarello/beer_me. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
The gem is available as open source under the terms of the https://opensource.org/licenses/MIT.
