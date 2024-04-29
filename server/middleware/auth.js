const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        // console.log(token); Bearer ahdldkfj;sldafjldakjf;
        if (!token) {
            return res.status(401).json( {msg: "No token"});
        }
        const token2 = token.split(" ")[1];
        // console.log(token2);
        if (!token2) {
            return res.status(401).json( {msg: "No token after bearer"});
        }
        
        const verified = jwt.verify(token2, process.env.JWT_SECRET);
        
        if (!verified) {
            return res.status(401).json( {msg: "Token Verification Failed"});
        }
        req.user = verified.id;
        next();
        
    } catch(err) {
        console.log(err);
        res.status(500).json( { error: err.message});
        
        
    }
};

module.exports = auth;