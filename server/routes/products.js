const express = require('express');
const router = express.Router();

//空の時にOKと返す
router.get('', function (req, res) {
    res.json({ 'ok': true })
});

module.exports = router;