const socketIo = require('socket.io');

module.exports = (http) => {
    const io = socketIo(http, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });
    
    try {
        io.on('connection', (socket) => {
            const req = socket.request;
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log('새로운 클라이언트가 연결됐습니다.', ip, socket.id, req.ip);
            socket.on('disconnect', () => {
                console.log('클라이언트가 연결해제됐습니다.', ip, socket.id, req.ip);
                clearInterval(socket.interval);
            });

            socket.on('error', (error) => {
                console.log(error);
            });

            socket.on("chatting", (data) => {
                io.emit("chatting", data);
            });
        });

    } catch (error) {
        return res.status(400).send({ errorMeesage: error.message })
    }

}


