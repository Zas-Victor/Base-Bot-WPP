const { dynamicCommand } = require("../utils/dynamicCommand");
const { loadCommonFunctions } = require("../utils/loadCommonFunctions");
const { onMessagePercut } = require("./onMessagePercut");


exports.onMessagesUpsert = async ({socket, messages}) => {
    if(!messages.length) return;
    const webMessage = messages[0]

    const commonFunctions = loadCommonFunctions({socket, webMessage});

    await onMessagePercut({ socket, webMessage });

    await dynamicCommand(commonFunctions);
};