import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import mongoose from 'mongoose'
const app = express();

// conexio a la db MogoDB
mongoose.Promise = global.Promise;
const dbURL = 'mongodb://localhost:27017/dbsystem';

mongoose.connect(dbURL, { useCreateIndex: true, useNewUrlParser: true}).then((mongoose) => {
    console.log('connect puerto 27017')
}).catch((error) => {
    console.log(error)
});


// middelwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// setting
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server started as on ${app.get('port')}`);
});