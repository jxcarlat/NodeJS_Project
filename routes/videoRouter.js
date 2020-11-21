const express = require('express');
const videoRouter = express.Router();

videoRouter.route('/:videoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end("Will send all VideoId's to you");
})
.post((req, res) => {
    res.end(`Will add the videoId: ${req.body.name} with description ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /:videoId');
})
.delete((req, res) => {
    res.end("Deleting all VideoId's");
})

videoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the videos to you');
})
.post((req, res) => {
    res.end(`Will add the video: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /videos');
})
.delete((req, res) => {
    res.end('Deleting all videos');
});

module.exports = videoRouter;