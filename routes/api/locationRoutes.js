const router = require('express').Router();

router.get('/', (req, res)=> {
    res.send('Location Route Works')
})

module.exports = router;