const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'Raghu')
    {
        req.user = {name:'Raghu', id:1}
        next()
    }
    else {
        res.status(401).send('Unauthorized Person')
    }
}

module.exports = authorize