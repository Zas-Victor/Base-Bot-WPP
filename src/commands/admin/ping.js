const { PREFIX } = require("../../config");

module.exports = {
    name: "ping",
    description: "Verificação de fucionamento do bot",
    commands: ["ping"],
    usage: `${PREFIX}ping`,
    handle: async ({sendReply}) => {
        await sendReply('Pong!');
    },
};