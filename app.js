const express = require('express');
const app = express();
const port = 3000;

const connectDB = require('./config/dbConnect');

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!!');
});

app.use("/contacts", require("./routes/contactRoutes"));


app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});