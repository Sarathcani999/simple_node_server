// Sample Node App

// require statements
const express = require('express');

const app = express();

app.use(express.json());

// apis
app.get('/' , (req,res) => {
	var outputJSON = {
		"message" : "sucess for GET/"
	};
	res.json(outputJSON);
});

app.get('/test' , (req,res) => {
	var outputJSON = {
		"message" : "test success"
	};
	res.json(outputJSON);
});

// PORT is chosen as 3000 if no argument is given at run time
const PORT = process.env.PORT | 3000;
app.listen(PORT , (err) => {
	console.log("Listening at PORT :",PORT);
});
