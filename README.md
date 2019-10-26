# jsrun
Simple JS/Node code VM/Sandbox executing bot for Freenode IRC

## Setup
1. Clone the repo into your computer / server.
2. Make sure to set the correct registered Nick and Pass through the `config` object.
3. Set the `channels` property to array of channels which the bot should join after authentication.
3. Run `node index.js`.

## Usage
1. The bot will listen for any channel message starting with `!jsrun `, considering your nick is `jsrun`.
2. The bot will run the message contents as code, and reply with the response, mentioning the message sender at the beginning of the reply.

## Contributing
You're very welcome to make PR at anytime.
