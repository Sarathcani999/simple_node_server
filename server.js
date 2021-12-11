const express = require('express');

const app = express();

app.use(express.json());

// apis
app.get('/' , (req,res) => {
	var outputJSON = {
		"message" : "sucess"
	};
	res.json(outputJSON);
});

app.get('/test' , (req,res) => {
	var outputJSON = {
		"message" : "test success"
	};
	res.json(outputJSON);
});

const PORT = process.env.PORT | 3000;
app.listen(PORT , (err) => {
	console.log("Listening at PORT :",PORT);
});
