const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()

const name = "Yeboah Solomon Opoku"
const paragraph = "A Web Developer and Designer from Ghana. I create custom websites to help business do better online"
const img = "/image/profile.jpg"

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))


app.get("/home", function(req, res) {
    res.render("home", {
        title: name,
        content: paragraph,
        image: img
    })
})

app.get("/about", function(req, res) {
    res.render("about")
})

app.get("/skills", function(req, res) {
    res.render("skills")
})

app.get("/work", function(req, res) {
    res.render("work")
})

app.get("/contact", function(req, res) {
    res.render("contact")
})





app.listen(3000, function() {
    console.log("Server started on port 3000")
})