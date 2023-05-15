app.post(“/login", function (req, res)
{
       //insert user data in the database
	let sqlquery = “SELECT * FROM user WHERE username = ? AND password = ?”;

       //take store user data in variable
       let newrecord = [req.body.username,req.body.password];

       //execute query with the variable
       db.query(sqlquery, newrecord, function (err, result) 
		{
            //if there's an error, then return an error message
            if (err)
            {
                return console.error(err.message);
            } 
            //if result has a length of more than 0, this means the 
            //database contains the username and password. Then proceed to authenticate user.
            //test case exceeded
            if (result.length > 0)
            {
                req.session.loggedin = true;
                req.session.username = username;
            }
            //otherwise display a message to say username and or password incorrect
            else
            {
                res.send(“Incorrect username and or password!”);
            }
        });
});