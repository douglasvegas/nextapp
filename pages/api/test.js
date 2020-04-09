export default (req, res) => {
    res.setHeader("content-type", "application/json")
    res.status(200).json({name: '123123'})
    res.end(JSON.stringify({cookie: req.cookies}))
}
