const router = require('express').Router();

router.get('/', (req, res)=> {
    res.send('Trips Route Works')
})

module.exports = router;