const express = require('express')
const app = express();

const port = process.env.PORT || 8080

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + "/public"));

app.get("/", function (req,res) {
    res.render("index");
})

app.listen(port, function() {
    console.log("app running");
})