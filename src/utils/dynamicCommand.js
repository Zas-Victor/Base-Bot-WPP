const { findCommandImport } = require(".");
const { DangerError, WaningError, InvalidParameterError } = require("../errors");
const { verifyPrefix, hasTypeOrCommand } = require("../middleware");
const { checkPermission } = require("../middleware/checkPermission");

exports.dynamicCommand = async(paramsHandler) => {
    const {commandName, prefix, sendWarningReply, sendErrorReply} = 
        paramsHandler;

    const {type, command} = findCommandImport(commandName); 

    if(!verifyPrefix(prefix) || !hasTypeOrCommand({type, command})) return;

    if(! await checkPermission({type, ...paramsHandler})) {
        return sendErrorReply('Você não tem permissão para execultar esse comando');
    }
    try{
        await command.handle({...paramsHandler, type});
    } catch(error){
        if(error instanceof InvalidParameterError){
            await sendWarningReply(`Parâmetors inválidos! ${error.message}`);
        }else if(error instanceof DangerError){
            await sendErrorReply(error.message);
        }else if(error instanceof WaningError){
            await sendErrorgReply(error.message);
        }else{
            await sendErrorReply(`Ocorreu um erro ao executar o comando ${command.name}! O desenvolvedor foi notificado!
                
        📑 *DETALHES*: ${error.message}
            `)
        }
    };
}