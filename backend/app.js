const express = require('express');
const userRoutes = require('./routes/users.js');

const app = express();
//port env for listening
const port = process.env.PORT || 3000; 
app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello world!');
});



app.listen(port, () => console.log('Listening on port 3000..'));
