const express = require('express');
const commentRouter = express.Router();

commentRouter.route('/:commentId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end("Will send all CommentId's to you");
})
.post((req, res) => {
    res.end(`Will add the commentId: ${req.body.name} with description ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /:commentId');
})
.delete((req, res) => {
    res.end("Deleting all CommentId's");
})

commentRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the comments to you');
})
.post((req, res) => {
    res.end(`Will add the comment: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /comments');
})
.delete((req, res) => {
    res.end('Deleting all comments');
});

module.exports = commentRouter;