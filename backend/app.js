const express = require('express');
const userRoutes = require('./routes/users.js');
const loginRoutes = require('./routes/login.js');
const dashboardRoutes = require('./routes/dashboard.js');
const transRoutes = require('./routes/transactionRoutes.js');

const app = express();
//port env for listening
const port = process.env.PORT || 3001; 
app.use(express.json());

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/trans', transRoutes);

app.get('/', (req, res) => {
    res.send('Hello world!');
});



app.listen(port, () => console.log('Listening on port 3001..'));
