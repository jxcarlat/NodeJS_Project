const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRouter');
const videoRouter = require('./routes/videoRouter');
const postRouter = require('./routes/postRouter');
const commentRouter = require('./routes/commentRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/users', userRouter);
app.use('/videos', videoRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});