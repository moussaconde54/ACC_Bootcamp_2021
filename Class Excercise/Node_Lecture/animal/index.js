const express = require ('express');
const app = express();

app.get('/', (req,res)=> {
    res.send('I am the root route')
});

app.get('/animal', (req,res)=> {
    res.render('animal.ejs')
});

// /demo/:animal
app.get('/demo/:animal', (req,res)=> {
    let thing = req.params.animal;
    res.render('demo', {dog})
})

// /demo2/:animal
app.get('/demo2', (req,res)=> {
    let animal = ['fox', 'lion', 'cat', 'tiger'];
    res.render('demo2', {data: animal})
})

// /test/:animal
app.get('/test/:animal', (req,res)=> {
    let animals = [
        {
          breed: 'dog', 
          name: 'Spike'
        },
        {
          breed: 'cat', 
          name: 'Mr Tabby'
        },
        {
          breed: 'bird', 
          name: 'Tweety'
        }
      ];
    res.render('demo3', {data: animal})
})

app.get('*', (req,res)=> {
    res.render('error')
})


const port = process.env. PORT || 4000;
app.listen(port, ()=> console.log(`Running on port ${port}`))
