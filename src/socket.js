const socketIo = require('socket.io');
const { Chat } = require("./models");

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
            
            socket.on('error', (error) => {
                console.log(error);
            });

            socket.on('chatting', (data) => {
                console.log('클라이언트가 보내는 데이터',data);
                
                io.emit('chatting', data);
                
                const chat = new Chat({ nickname: data.nickname, chat: data.chat});
                chat.save(function(err,data){
                    if (err){
                        console.log("error",err)
                    }
                    console.log('성공',data);
                });
            });

            // 클라이언트가 나갔을 때
            socket.on('disconnect', () => {
                console.log('클라이언트가 연결해제됐습니다.', ip, socket.id, req.ip);
                clearInterval(socket.interval);
            });
        });
        
    } catch (error) {
        return res.status(500).send({ errorMeesage: error.message });
    }

}


