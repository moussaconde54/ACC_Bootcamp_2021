const express = require('express');
const app =express();

const logger = require ('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');

app.use(express.static("public"))

app.get('/', function(req,res){
    res.render('home')
})

const yelp = require('yelp-fusion');
const apiKey =
    "TGmj7XiFfyILe004o67z3COKqqat0-RPorHfIepxlF1mCRCUBSy7gIwcUJaATMMO0c0MIeINi8qbQ44tWt-yYsYk2aWto0n0GrDyjQ0A7Jft5ZV6xRTJDGPNckAgW3Yx";
const client = yelp.client(apiKey);




app.get('/localSearch', function(req,res){
    client.search({
        term: 'Four Barrel Coffee',
        location: req.query.locale,
        limit: 10
    }).then(response => {
        let results = response.jsonBody.businesses[0].name;
        console.log(response.jsonBody.businesses[0].name);
        res.send(results);
    }).catch(e => {
        console.log(e);
    });
    res.send('location search');
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App on port: ${port}`));
