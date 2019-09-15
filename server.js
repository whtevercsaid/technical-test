const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
var port = process.env.PORT || 2019;

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))


app.get('/', (req, res) => res.send('Hello World!'))

const {searchMovie} = require("./routers");
app.use('/movie', searchMovie);

app.listen(port, () => console.log(`Backend Imdb Search app listening on port ${port}!`))