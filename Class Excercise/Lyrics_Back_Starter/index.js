const express = require('express');
const app = express();

const chalk = require('chalk');
const logger = require('morgan');
const { request, response } = require('express');
app.use(logger('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('home')
})

const baseUrl = 'https://api.lyrics.ovh/v1';
const request = require('request');

app.get('/getLyrics', function(req,res) {
  let{title, artist} = req.query;
  let endpoint = `${baseUrl}/${artist}/${title}`;
  request(endpoint, (error,response, body)=>{
    if(!error && response.statusCode == 200){
      let parsedData = JSON.parse(body); //use with request and needle
      let data = parsedData.lyrics.replace(/\n/g, "<br>");
      res.render('results', {data, title, artist})
    } else {
      res.render('error', {error: "No lyrics found"})
    }
    
  })
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(chalk.blue(`App on port: ${chalk.green(port)}`)));