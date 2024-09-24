const { extractDataFromMessage, baileysIs, download } = require(".");
const { BOT_EMOJI } = require("../config");
const fs = require('fs');

exports.loadCommonFunctions = ({ socket, webMessage }) => {
    const {remoteJid, prefix, commandName, args, userJid, isReply, replyJid} = 
        extractDataFromMessage(webMessage);
    
    const isImage = baileysIs(webMessage, "image");
    const isVideo = baileysIs(webMessage, "video");
    const isSticker = baileysIs(webMessage, "sticker");

    const  downloadImage = async (webMessage, fileName) => {
        return await download(webMessage, fileName, "image", "png");
    };

    const downloadVideo = async (webMessage, fileName) => {
        return await download(webMessage, fileName, "video", "mp4");
    };

    const downloadSticker = async (webMessage, fileName) => {
        return await download(webMessage, fileName, "sticker", "webp");
    };

    const sendText = async (text) => {
        return await socket.sendMessage(remoteJid, {text: `${BOT_EMOJI} ${text}`});
    };

    const sendReply = async (text) => {
        return await socket.sendMessage(remoteJid, 
            {text: `${BOT_EMOJI} ${text}`}, 
            {quoted: webMessage}
        );
    };

    const sendReact = async (emoji) => {
        return await socket.sendMessage(remoteJid, {
            react: {
                text: emoji,
                key: webMessage.key,
            }
        })
    };

    const sendSuccesReact = async () => {
        return await sendReact("✅");
    };

    const sendWaitReact = async () => {
        return await sendReact("⏳");
    };
    
    const sendWarningReact = async () => {
        return await sendReact("⚠️");
    };

    const sendErrorReact = async () => {
        return await sendReact("❌");
    };

    const sendSuccesReply = async (text) => {
        await sendSuccesReact();
        return await sendReply(text);
    };

    const sendWaitReply = async (text) => {
        await sendWaitReact();
        return await sendReply(text);
    };
    
    const sendWarningReply = async (text) => {
        await sendWarningReact();
        return await sendReply(text);
    };
    
    const sendErrorReply = async (text) => {
        await sendErrorReact();
        return await sendReply(text);
    };

    const sendStickerFromFile = async (file) => {
        return await socket.sendMessage(remoteJid, {
            sticker: fs.readFileSync(file),
        });
    };

    const sendImageFromFile = async (file) => {
        return await socket.sendMessage(remoteJid, {
            image: fs.readFileSync(file),
        });
    };

    const sendVideoFromFile = async (file) => {
        return await socket.sendMessage(remoteJid, {
            video: fs.readFileSync(file),
        });
    };

    return {
        socket,
        remoteJid,
        userJid,
        prefix,
        commandName,
        isReply,
        replyJid,
        args,
        isImage,
        isVideo,
        isSticker,
        webMessage,
        sendText,
        sendReply,
        sendReact,
        sendSuccesReact,
        sendWaitReact,
        sendWarningReact,
        sendErrorReact,
        sendSuccesReply,
        sendWaitReply,
        sendWarningReply,
        sendErrorReply,
        downloadImage,
        downloadVideo,
        downloadSticker,
        sendStickerFromFile,
        sendImageFromFile,
        sendVideoFromFile,
    };
}