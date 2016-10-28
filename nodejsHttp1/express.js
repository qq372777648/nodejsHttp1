var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(express.static('./public'));
app.use(morgan());//打印请求日志




app.get('/', function(req, res, next){
  res.end('hello\n');
  next();//继续往下走
});

var Router = express.Router();
/*
  http://example.com/post/add
  http://example.com/post/list
 */
Router.get('/add', function(req, res){
  res.end('Router /add2\n');
});
Router.get('/list', function(req, res){
  res.end('Router /list\n');
});

app.use('/post', Router);//xx/post/add、post/list






app.route('/article')
  .get(function(req, res){
    res.end('route /article get\m');
  })
  .post(function(req, res){
    res.end('route /article post\n');
  });

//http://example.com/news/123






app.get('/news/:newsId', function(req, res){
  res.end('newsId: ' + req.newsId + '\n param:'+req.params.newsId);
});



app.param('newsId2', function(req, res, next, newsId){
  req.newsId = newsId;
  console.log(newsId)
  next();
});
app.get('/news2/:newsId2', function(req, res){
  res.end('newsId2: ' + req.newsId + '\n');
});



app.listen(18001, function afterListen(){
  console.log('express running on http://localhost:18001');
});