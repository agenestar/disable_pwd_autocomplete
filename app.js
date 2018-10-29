const express = require('express')
const exphbs = require('express-handlebars')
const uuidv4 = require('uuid/v4')
const bodyParser = require('body-parser')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => renderIndex(res, req.body))

app.post('/', (req, res) => renderIndex(res, req.body))

function renderIndex(res, body) {
    return res.render('index', { 
        bodyParameters: JSON.stringify(body, undefined, 2),
        randomGuid1: uuidv4(),
        randomGuid2: uuidv4(),
    }) 
}

app.listen(3010, () => console.log(`Example app listening on port 3010`))
