// The main.js file of your application

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index.html")
    });

    app.get("/about", function (req, res) {
        res.render("about.html")
    });

    app.get("/add", function (req, res) {
        res.render("add.html")
    });

    //collect the data in the form in add.html
    app.post("/added", function (req, res)
    {
        if (req.body.temperature < 0 || req.body.temperature > 100 || (req.body.temperature.match(/^[A-Za-z]+$/) && req.body.temperature != "NA"))
        {
            res.render("submiterror.html", { error: "Invalid temperature (celsius)! Please only select temperature from 0 to 100 celsius!" });
        }
        else if (req.body.volume < 0 || req.body.volume > 10 || (req.body.temperature.match(/^[A-Za-z]+$/) && req.body.volume != "NA"))
        {
            res.render("submiterror.html", { error: "Invalid volume level! Please only type in digit from 0 to 10!" });
        }
        else if (req.body.timer < 0 || req.body.timer > 24 || (req.body.timer.match(/^[A-Za-z]+$/) && req.body.timer != "NA"))
        {
            res.render("submiterror.html", { error: "Invalid hours! Please only type in digit from 0 to 24!" });
        }
        else
        {
            // saving data in database
            let sqlquery = "INSERT INTO devices (type, name, OnOff, OpenClose, wifi, temperature, volume, timer) VALUES (?,?,?,?,?,?,?,?)";

            //execute the request
            let newrecord = [req.body.devicetype, req.body.namedevice, req.body.onoff, req.body.openclose, req.body.wifi, req.body.temperature, req.body.volume, req.body.timer];

            db.query(sqlquery, newrecord, function (err, result) {
                if (err)
                {
                    return console.error(err.message);
                }
                else
                {
                    res.redirect("/add");
                }
            });
        }
    });

    app.get("/show", function (req, res) {
        // query database to get all the books
        let sqlquery = "SELECT * FROM devices";
        // execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                //redirect to index.html if there's error [self]
                res.redirect("/");
            }

            res.render("show.html", { devices: result, statuses: undefined });

        });
    });

    app.get("/show/:id", function (req, res) {
        // query database to get all the books
        let sqlquery = "SELECT * FROM devices WHERE id = ?";
        // execute sql query
        db.query(sqlquery, req.params.id, (err, result) => {

            console.log(result);
            if (err) {
                //redirect to index.html if there's error [self]
                res.redirect("/");
            }
            res.render("show.html", { statuses: result, devices: undefined });
        });
    });

    app.get("/update", function (req, res) {

        // query database to get all the books
        let sqlquery = "SELECT * FROM devices";

        // execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                //redirect to index.html if there's error [self]
                res.redirect("/");
            }

            res.render("update.html", { devices: result, statuses: undefined });
        });
    });

    app.get("/update/:id", function (req, res) {
        // query database to get all the books
        let sqlquery = "SELECT * FROM devices WHERE id = ?";
        // execute sql query
        db.query(sqlquery, req.params.id, (err, result) => {

            console.log(result);
            if (err) {
                //redirect to index.html if there's error [self]
                res.redirect("/");
            }
            res.render("update.html", { statuses: result, devices: undefined });
        });
    });

    app.post("/updated", function (req, res)
    {
        //form validation to ensure only appropriate data are being passed to the database
        if (req.body.temperature < 0 || req.body.temperature > 100 || (req.body.temperature.match(/^[A-Za-z]+$/) && req.body.temperature != "NA")) {
            res.render("updateerror.html", { error: "Invalid temperature (celsius)! Please only select temperature from 0 to 100 celsius!" });
        }
        else if (req.body.volume < 0 || req.body.volume > 10 || (req.body.temperature.match(/^[A-Za-z]+$/) && req.body.volume != "NA")) {
            res.render("updateerror.html", { error: "Invalid volume level! Please only type in digit from 0 to 10!" });
        }
        else if (req.body.timer < 0 || req.body.timer > 24 || (req.body.timer.match(/^[A-Za-z]+$/) && req.body.timer != "NA")) {
            res.render("updateerror.html", { error: "Invalid hours! Please only type in digit from 0 to 24!" });
        }
        else
        {
            // saving data in database
            let sqlquery = "UPDATE devices SET type = ?, name = ?, OnOff = ?, OpenClose = ?, wifi = ?, temperature = ?, volume = ?, timer = ? WHERE id = ?";

            //execute the request
            let newrecord = [req.body.devicetype, req.body.namedevice, req.body.onoff, req.body.openclose, req.body.wifi, req.body.temperature, req.body.volume, req.body.timer, req.body.id];

            db.query(sqlquery, newrecord, function (err, result) {
                if (err) {
                    return console.error(err.message);
                }
                else {
                    res.redirect("/update");
                }
            });
        }
    });

    app.get("/delete", function (req, res) {

        // query database to get all the books
        let sqlquery = "SELECT * FROM devices";

        // execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                //redirect to index.html if there's error [self]
                res.redirect("/");
            }

            res.render("delete.html", {devices: result});
        });

    });

    app.post("/deleted", function (req, res) {
        // saving data in database
        let sqlquery = "DELETE from devices WHERE id = ?";

        //execute the request
        let newrecord = [req.body.submit];

        db.query(sqlquery, newrecord, function (err, result) {
            if (err) {
                return console.error(err.message);
            }
            else {
                res.redirect("/delete");
            }
        });
    });



}

