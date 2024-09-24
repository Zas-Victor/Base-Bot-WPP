const { PREFIX } = require("../../config");

module.exports = {
    name: "Comando",
    description: "Descrição do comando",
    commands: ["cmd"],
    usage: `${PREFIX}comando`,
    handle: async ({}) => {
    },
};