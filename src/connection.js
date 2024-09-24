const { useMultiFileAuthState, fetchLatestBaileysVersion, default: makeWASocket, DisconnectReason } = require("baileys");
const path = require('path');
const pino = require('pino');
const { question, onlyNumbers } = require("./utils");

exports.connect = async () => {
    const {state, saveCreds} = await useMultiFileAuthState(
        path.resolve(__dirname, 'assets', 'auth');
    );
    const {version} = await fetchLatestBaileysVersion();
    const socket = makeWASocket({
        printQRInTerminal: true,
        version,
        logger: pino({level: 'error'}),
        auth: state,
        browser: ['Server', '', ''],
        markOnlineOnConnect: true,
    });
    socket.ev.on('connection.update', (update) => {
        const {connection, lastDisconnect} = update;

        if(connection === 'close'){
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;

            if (shouldReconnect) {
                this.connect();
            }
        }
    });
    
    socket.ev.on('creds.update', saveCreds);

    return socket;
};