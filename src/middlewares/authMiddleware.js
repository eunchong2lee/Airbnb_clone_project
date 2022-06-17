const dotenv = require('dotenv');
dotenv.config()
const jwtSecret = process.env.JWTACCESSKEY;
const refreshjwtSecret = process.env.JWTREFRESHKEY;
const jwt = require("jsonwebtoken")

const { Users } = require("../models/")

module.exports = (req, res, next) => {
    // front 에서 header로 token을 준다.
    const { authorization } = req.headers;
    if ( authorization == null){
        return res.status(401).send({
            errorMessage: '로그인이 필요합니다.'
        })
    }
    console.log('authorization', authorization)
    const [tokenType, tokenValue] = authorization.split(' ');
    console.log('tokenType', tokenType, 'tokenValue', tokenValue);

    if (tokenType !== 'Bearer') {
        return res.status(401).send({
            errorMessage: '로그인 후 사용하세요',
        });
    }

    try {
        const myToken = verifyToken(tokenValue);
        if(myToken == "jwt expired"){
            // accesstoken 만료
            console.log('만료되었습니다.')
            const userInfo = jwt.decode(tokenValue, jwtSecret );
            console.log('userInfo',userInfo);
            const useremail = userInfo.useremail;
            let refreshToken;
            const finduser = Users.findOne({useremail}).then((finduser)=>{

                if(finduser == null || finduser == ''){
                    throw new Error('NO_EXISTS_DATA')
                }

                refreshToken = finduser.refreshToken;
                console.log(refreshToken);
                const refreshMytoken = verifyrefreshToken(refreshToken);
                console.log('refreshMytoken',refreshMytoken);
                if(refreshMytoken == 'jwt expired'){
                    return res.status(401).send({errorMessage: '로그인 후 사용하세요!'})
                } else {
                    const myNewToken = jwt.sign({useremail}, jwtSecret,{expiresIn : '1h'});
                    console.log('new token',myNewToken);
                    console.log('finduser',finduser);
                    let temp = {
                        finduser: finduser,
                        new_token: myNewToken
                    }
                    res.locals.user = temp;
                    next();
                }
            });
           
        } else {
            const {useremail} = jwt.verify(tokenValue, jwtSecret);
            const finduser = Users.findOne({useremail}).then((finduser)=>{
                let refreshToken = finduser.refreshToken;
                console.log('refreshToken', refreshToken);
                const refreshMytoken = verifyToken(refreshToken);
                if(refreshMytoken == 'jwt expired'){
                    const MyNewrefreshToken = jwt.sign({useremail}, jwtSecret,{expiresIn : '7d'});
                    Users.updateOne({useremail},{refreshToken: MyNewrefreshToken},{new: true})
                        .exec()
                        .then(()=>{
                            res.locals.user = finduser;
                            next();
                        })
                }
            })
            const localuser = Users.findOne({useremail}).exec()
                .then((localuser)=>{
                    res.locals.user = localuser;
                    next();
                })
        }
    } catch (err) {
        return res.status(401).send({
            errorMessage: err.message,
        });
    }
};


function verifyToken(Token){
    try {
        return jwt.verify(Token, jwtSecret);

    }catch (error) {
        return res.stauts(401).json({errorMessage: error.message});
    }
}
function verifyrefreshToken(refreshToken){
    try{
        return jwt.verify(refreshToken, refreshjwtSecret);
    }catch (error) {
      return res.stauts(401).json({errorMessage: error.message});
    }
}