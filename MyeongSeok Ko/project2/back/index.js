const path = require('path')
const express = require('express')
const app = express()
const port = 4000;

const API = require('./module/index.js')

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(express.static(path.join(__dirname, '/../front')))

app.use('/api', API)

app.get('/', (req, res) => {
    res.render(index)
})

app.listen(port, () => {
    console.log('open server : ', port)
})