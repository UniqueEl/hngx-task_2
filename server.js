const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// route handlers
const createPersonRouter = require('./controllers/createPerson');
const deletePersonRouter = require('./controllers/deletePerson');
const getPersonRouter = require('./controllers/getPerson');
const editPersonRouter = require('./controllers/editPerson');

app.use('/api', createPersonRouter);

app.use('/api', deletePersonRouter);

app.use('/api', getPersonRouter);

app.use('/api', editPersonRouter);

app.get('/', (req, res) => res.send('welcome to the person CRUD API. visit http://route/api/ to perform crud operations'));

const mongoURI = process.env.connectDB

const connectDB = mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection to MongoDB successful");
    });

    const port = process.env.PORT || 4500;
    app.listen(port, () => console.log(`Server listening on port ${port}!`))