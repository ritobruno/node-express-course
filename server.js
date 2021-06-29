const express = require('express');
const app = express();


app.get('/', function(req, res) {
    res.send('Hello World')
})

const mockUserData = [ 
    {name: 'Mark'},
    {name: 'Jill'}
];

app.get('/', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.listen(3000, () => console.log('server is listening'));