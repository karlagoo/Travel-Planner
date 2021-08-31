const router = require('express').Router();

router.get('/', (req, res)=> {
    res.send('Travel Route Works')
})

module.exports = router;