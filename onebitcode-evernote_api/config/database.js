const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();
const database_login = process.env.DATABASE_LOGIN;
const database_password = process.env.DATABASE_PASSWORD;

mongoose.connect(`mongodb+srv://${database_login}:${database_password}@cluster0.nmvds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log("Connection successful")}).catch(err => console.log(err))
