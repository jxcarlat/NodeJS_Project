const express = require('express');
const postRouter = express.Router();

postRouter.route('/:postId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end("Will send all PostId's to you");
})
.post((req, res) => {
    res.end(`Will add the postId: ${req.body.name} with description ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /:postId');
})
.delete((req, res) => {
    res.end("Deleting all PostId's");
})

postRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the posts to you');
})
.post((req, res) => {
    res.end(`Will add the post: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /posts');
})
.delete((req, res) => {
    res.end('Deleting all posts');
});

module.exports = postRouter;