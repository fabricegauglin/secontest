console.log('salut les petits lu dans le café et également il a u une requet de rocket')

let http = require('http')


let server = http.createServer()
server.on('request', (request, response) => {
  
  response.writeHead(200)
  response.end('salut coment ça va pas ?')
  
  
  
  
})

server.listen(8080)
