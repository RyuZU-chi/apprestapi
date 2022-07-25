import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil routes
let routes = require('./routes')
routes(app)

app.listen(3000, () => {
  console.log(`Server started on port`);
});