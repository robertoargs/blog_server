const express = require('express');
const router = express.Router();

const home = require('./home');

router.get('/home', home.getHome);
router.post('/home', home.postHome);

router.get('/home/:postId', home.getPost);

router.delete('/home/:postId', home.deletePost);

router.put('/update/:id', home.addComment);

module.exports = router;



