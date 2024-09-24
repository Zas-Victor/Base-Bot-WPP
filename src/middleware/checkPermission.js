const fs = require('fs/promises');
const path = require('path');

exports.checkPermission = async ({type, socket, userJid, remoteJid}) => {
   
   

    const {participants, owner} = await socket.groupMetadata(remoteJid);
    const participant = participants.find((participant) => participant.id === userJid);

    if(!participant) return false;

    const isAdmin = participant.admin === 'admin';

    const isOwnerGroup = participant.id === owner || participant.admin === 'superadmin';

    const IdentifyIsOwer = async (user) => {
        const dirPath = path.resolve(__dirname, "..", "assets", "db");
        const filePath = path.join(dirPath, "owner.json");

        try {
            const jsonFile = await fs.readFile(filePath, 'utf8');
            let jsonData = JSON.parse(jsonFile);
            return jsonData.id.includes(user); // Retorna verdadeiro ou falso
        } catch (err) {
            console.error('Erro ao ler o arquivo:', err);
            return false; // Retorna false se houver erro
        }
    };

    const isOwner = await IdentifyIsOwer(userJid);

    console.log(isOwner);

    if(type === "member") return true;
    if (type === 'admin') return isAdmin || isOwnerGroup || isOwner;
    if(type === 'ownerGroup') return isOwnerGroup || isOwner;
    if(type === 'owner') return isOwner;

    return false;
};