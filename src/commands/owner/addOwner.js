const { PREFIX } = require("../../config");

module.exports = {
    name: "AddOwner",
    description: "Adicionar novos donos do bot!",
    commands: ["addOwn"],
    usage: `${PREFIX}addOwn`,
    handle: async ({ replyJid, sendSuccesReply, sendWarningReply }) => {
        const path = require('path');
        const fs = require('fs/promises');

        const dirPath = path.resolve(__dirname, "..", "..", "assets", "db");
        const filePath = path.join(dirPath, 'owner.json');

        try {
            const jsonFile = await fs.readFile(filePath, 'utf8')
            let jsonData = JSON.parse(jsonFile);
            if (!jsonData.id.includes(replyJid)) {
                jsonData.id.push(replyJid);
                await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
                return await sendSuccesReply("O novo dono do bot foi adicionado com sucesso!");
            }
            return await sendWarningReply("Este contato já esta na lista de donos");
        } catch (err) {
            console.error('Erro:', err);
            throw err;
        }
    },
};
