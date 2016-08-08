// app/index.js

const path = require('path')  
const express = require('express')  
const exphbs = require('express-handlebars')
const app = express()  
const port = 8585

const indexHandler = require('./indexHandler')
const blogHandler = require('./blogHandler')

var indexContent = indexHandler.makeIndexContent()
var blogContent = blogHandler.makeBlogContent()

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/* Serve Static Files */
app.use(express.static('public'));

app.get('/', (request, response) => {  
  response.render('index', indexContent)
})

app.get('/blog', (request, response) => {  
  response.render('blog', {
    content: blogContent
  })
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})