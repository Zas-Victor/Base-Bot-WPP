const { extractDataFromMessage } = require("../utils")

exports.onMessagePercut = ({ socket, webMessage }) => {
    const {remoteJid} = extractDataFromMessage({socket, webMessage});
    
};