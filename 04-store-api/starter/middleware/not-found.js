const notFound = (req, res) => {
    console.log('Route does not exist')
    res.status(404).send('Route does not exist')
}
module.exports = notFound
