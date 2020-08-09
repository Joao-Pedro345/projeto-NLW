// Express  
const express = require('express')
const server = express() /* requerindo o objeto express, usando também a propriedade ouvir  !!!!!node src/server.js  */

const {pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar o nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server, /* pegando o servidor que estamos usando */
    noCache: true, /* guardar em memoria ==> true |> nesse caso desativou o cache "noCache"*/   
})

// Inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) /* tudo oque é .use é config do server */
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)/* usando um função com nome ao invez de uma função anonima  */
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5500) 
