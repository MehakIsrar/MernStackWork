const express = require("express");
const app = express();
const path = require("path");

const port = 3000;
//console.log(__dirname); // to print the current directory path 
console.log(path.join(__dirname, '../serverstaticwesbite/src')); //to move to the next path 
const staticpath = (path.join(__dirname, "../serverstaticwesbite/src"));

const viewchange = (path.join(__dirname, "../changeview"));


app.set("view engine", "hbs");
app.set("views", viewchange);
app.use(express.static(staticpath));


app.get("", (req, res) => {
    res.render('index', {
        changing: "Developmentfeature"
    });
});

app.get("/about", (req, res) => {

    res.render("about");
});
app.get('/', (req, res) => {
    res.send("Hi I am express website home page");
});

app.get('/about', (req, res) => {
    res.send("about page");
});

app.listen(port, () => {
    console.log('Listening request ${port}');
});