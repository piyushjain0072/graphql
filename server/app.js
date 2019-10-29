const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// Allow Cross Origin Requests
app.use(cors());

mongoose.connect('mongodb+srv://xcellentpiyush:test123@cluster0-h2ynz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening for requests on port 4000');
});
