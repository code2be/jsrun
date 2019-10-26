var irc = require("irc");
const { VM } = require('vm2');

const config = {
    nick: 'jsrun',
    pass: 'YOUR_NICK_PASSWORD',
    channels: ['#jsrun']
};

var bot = new irc.Client('chat.freenode.net', config.nick, {
    port: 6697,
    userName: config.nick,
    realName: config.nick + ' bot',
    secure: true,
    selfSigned: false,
    certExpired: false,
    debug: true
});

bot.addListener("registered", () => {
    bot.say('NickServ', 'identify ' + config.pass);

    bot.addListener("notice", (from, to, text, message) => {
        console.log(from, to, text, message);
        if (from == 'NickServ' && to == config.nick && text.startsWith('You are now identified for')) {
            for (channel in config.channels)
                bot.join(config.channels[channel]);
        }
    });

    bot.addListener("message", (from, to, text, message) => {
        if (text.startsWith("!" + config.nick + " ")) {
            console.log(from, to, text, message);

            let result = null;
            try {
                result = new VM({
                    sandbox: {
                        this: 'This ? Who is this ?',
                        document: 'No papers in tray, can not print any documents !',
                        process: 'Which process ?!'
                    },
                    eval: false,
                    wasm: false,
                    timeout: 1000
                }).run(text.substring(7));
            } catch (e) {
                bot.say(to, "@" + from + ", Error: " + e);
            }
            if (result != null) {
                console.log(result);
                bot.say(to, "@" + from + ", Result is: " + result)
            }
        }
    });
});

process.on('uncaughtException', (err) => {
    console.error('Asynchronous error caught.', err);
})



