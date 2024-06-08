const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Routes
const userRoutes = require('./routes/userRoutes');
const descriptionRoutes = require('./routes/descriptionRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const chatRoutes = require('./routes/chatOpenRoutes');

// Express functions
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Testing
app.get('/', (req, res) => {
    res.json({info: "Hello World! from Node.js, Express and PostgreSQL!"});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Endpoints
app.use('/users', userRoutes);
app.use('/description', descriptionRoutes);
app.use('/feedback', feedbackRoutes);
app.use("/chat", chatRoutes);
