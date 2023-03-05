const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./Routes/blogRoutes");

const app = express();

// Static Files and Middleware - All static files including image folders and assets should set in here
app.use(express.static("public"));

// Middleware to make url body extractable as an object
app.use(express.urlencoded({ extended: true }));

// Mongodb connections
const CONNECTION_URL = "mongodb+srv://chris-dev:Edo3bits4@blogs.ipxw0xg.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL)
    .then((result) => {
        // console.log("Result: ", result);
        console.log("Database Connection Set -------->");
        app.listen(3000);
        console.log("Server Running on PORT :3000 -------->");
    })
    .catch((err) => console.log(err));
// Register View engine
app.set("view engine", "ejs");
// Home Page Route
app.get("/", (req, res) => {
    res.redirect("/blogs");
})
// About Us
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
})
// Contact Page
app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
})
// BLog Route - Middleware
app.use("/blogs", blogRoutes);
// 404 Page Not Fount - 404 middleware
app.use("", (req, res) => {
    res.status(404).render("404", { title: "Not Found" });
});