// app/index.js
 
const express = require('express')  
const exphbs = require('express-handlebars')
const app = express()  
const port = 8585
const host = "169.254.237.101"

const indexHandler = require('./indexHandler')
const blogHandler = require('./blogHandler')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/* Serve Static Files */
app.use(express.static('public'));

app.get('/', (request, response) => {  
	var indexContent = indexHandler.makeIndexContent()
	response.render('index', indexContent)
})

app.get('/blog', (request, response) => {  
	var blogContent = blogHandler.makeBlogContent()
	response.render('blog', {
  	  content: blogContent
  })
})

app.listen(port, host, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${host}:${port}`)
})