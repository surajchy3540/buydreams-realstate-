const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const PORT = 5000;

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello Suraj");
// });

//Available Routes
app.use('/api/auth',require('./routes/auth'))
 


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});