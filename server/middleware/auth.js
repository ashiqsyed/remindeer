const jwt = require('jsonwebtoken');

// router.delete('/:id', auth, (req, res) => {
//     User.findByIdAndRemove(req.params.id, req.body)
//         .then( (user) => res.json( {msg: "Item deleted successfully!"}))
//         .catch( (err) => res.status(404).json( {error: 'No such a item'}))
// })

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json( {msg: "No token"});
        }
        const token2 = token.split(" ")[1];
        if (!token2) {
            return res.status(401).json( {msg: "No token after bearer"});
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.status(401).json( {msg: "Token Verification Failed"});
        }
        req.user = verified.id;
        next();
        
    } catch {
        res.status(500).json( { error: err.message});
    }
};

module.exports = auth;