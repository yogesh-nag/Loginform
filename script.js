const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/your_server_url', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Here's an example of how you might perform the actual login:
    if (username === 'admin' && password === 'password') {
        res.json({success: true});
    } else {
        res.json({success: false});
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});