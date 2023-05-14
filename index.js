const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const port = 8089;

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Niama@5663879",
    database: "myDevices"
});

// connect to database
db.connect((err) => {
    if (err) {
        console.log("This error here!!!!")
        throw err;
    }
    console.log("Connected to database");
});
global.db = db;

require("./routes/main")(app);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "/public")));
app.listen(port, () => console.log(`Node server is running with ${port}!`));
