const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');



const app = express();


//app.get('/add-blog', (req, res) =>{
  //const blog = new Blog({
  //  title: 'new blog',
 //   snippet: 'about my new blog',
  //  body: 'more about my new blog'
  //});

  //blog.save()
  //.then((result) =>{

  //  res.send(result)
  //})
  //.catch((err) =>{
    //console.log(err);

  //});
//})

//app.get('/all-blogs', (req, res) =>{
  //Blog.find()
  //.then((result) => {
  //  res.send(result);
  //})
  //.catch((err) => {
    //console.log(err);
  //});

//})

//app.get('/single-blog', (req, res) =>{
 // Blog.findById('65e5b28345bcc9718451c70b')
  //.then((result) =>{
   // res.send(result);
  //})
  //.catch((err) =>{
    //console.log(err)
  //})

//})
const dbURI = 'mongodb+srv://kelvin:batman246@cluster0.qsnbpc4.mongodb.net/tax?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log((err)));

// register view engine

app.set('view engine', 'ejs');








//middeware & static files
app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', (req, res) => {
//  const blogs = [
  //  {title: 'yoshi finds eggs', snippet: 'lorem ipsum ta ba calcuim'},
  //  {title: 'datti finds eggs', snippet: 'lorem ipsum ta ba calcuim'},
  // {title: 'kelz finds eggs', snippet: 'lorem ipsum ta ba calcuim'},
  //];
    //res.send('<p>home page</p>');
    res.redirect('/blogs');
});

app.get('/blogs', (req, res) =>{
  Blog.find()
  .then((result) =>{
    res.render('index', {title: 'All blogs', blogs: result})
  })

  .catch((err) =>{
    console.log(err)
  })

})

app.get('/about', (req, res) => {
  //  res.send('<p>about</p>');
  res.render('about', { title: 'About'})

});






app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create A New Blog'});
})

app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
});

