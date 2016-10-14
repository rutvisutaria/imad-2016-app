var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  art1: {
    title: 'Article1',
    heading: 'Article1',
    content: `
             '<p>
                This is the first article!This is the first article!This is the first article!This is the first article!This is the first article!This is the first article!
            </p>
            <p>
                This is the first article!This is the first article!This is the first article!This is the first article!This is the first article!This is the first article!
            </p>
            <p>
                This is the first article!This is the first article!This is the first article!This is the first article!This is the first article!This is the first article!
            </p>'`
     },

  art2: {
    title: 'article2',
    heading:'article2',
    content : `
             <p>
             This is Article 2!This is Article 2!This is Article 2!This is Article 2!This is Article 2!This is Article 2!This is Article 2!This is Article 2!This is Article 2!This is Article 2!
              </p> `
           
    }    
    
};

function createTemplate (data) {
    var title= data.title;
    var heading=data.heading;
    varcontent= data.content;
    
    var htmlTemplate= `
    
    <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
                <hr/>
                <h3>
                    ${heading};
                </h3>
                ${content};
            </div>
        </div>
    </body>
    </html>

    `;
    return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1', function (req, res) {
  res.send(createTemplate(art1));
});

app.get('/article2', function (req, res) {
  res.send(createTemplate(articles[art2]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
