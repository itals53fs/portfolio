const express = require('express');
const nunjucks = require('nunjucks');
const porta = 3000;
const app = express();
const data = require('./data')
app.use(express.static('public'))
app.set("view engine", "njk");

nunjucks.configure("views", {
  express: app,
  autoescape: false,
  noCache: true,
})

app.get('/', function(req, res){
  const data = {
    img: "talesR.jpg",
    name: 'Tales Félix',
    curso: 'Sistemas de Informação',
    descricao: "Projetos",
    palavraChaveDescricao: 'Next Stap',
    links: {
      descricao: '#',
      github: '#',
      linkendin: '#',
      rocktseat: '#'
    }
  }
  return res.render('about', {data});
})
app.get('/portfolio', function(req, res){
  return res.render('portfolio', {item:data});
})
app.listen(porta, function(){
  console.log(`server is running, porte ${porta}`)
});