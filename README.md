# jsrun
Simple JS/Node code VM/Sandbox executing bot for Freenode IRC

## Setup
1. Clone the repo into your computer / server.
2. Make sure to set the correct registered Nick and Pass through the `config` object.
3. Set the `channels` property to array of channels which the bot should join after authentication.
3. Run `node index.js`.

### Identified only channels
Some channels ask users to identify before joining, that's why this bot make sure that NickServ sent a NOTICE to the bot starting with "You are now identified for". After that, code start to join required channels. 
If you've a better way to handle that, please make a PR.

## Usage
1. The bot will listen for any channel message starting with `!jsrun `, considering your nick is `jsrun`.
2. The bot will run the message contents as code, and reply with the response, mentioning the message sender at the beginning of the reply.

## Security
Usage of [vm2](https://github.com/patriksimek/vm2) guarantee the executing of JS/Node code in VM/Sandbox, which mean the executed code cann't access `document`, `process`, `this` and others of critical objects that would been accessible in case of running the code using [eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).

## Contributing
You're very welcome to make PR at anytime.
