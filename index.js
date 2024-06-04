console.log("THIS IS CONSOLE");
const express = require('express'); 
const routers=require('./routers/url');
const dbConnect=require('./configuration/connect_db');

const app = express(); 
const PORT =process.env.PORT || 3000; 

app.use(express.json());
app.use('/url',routers);
/*-------------------- Making Databse Connection -------------------------*/

dbConnect();


app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running,  App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
