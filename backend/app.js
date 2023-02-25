const express = require('express');

const app = express();
//port env for listening
const port = process.env.PORT || 3000; 
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello world!');
});



app.listen(port, () => console.log('Listening on port 3000..'));
