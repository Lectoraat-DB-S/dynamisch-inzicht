const express = require('express');
const app = express();
const cors = require("cors");
const db = require("./models");
db.sequelize.sync();
var corsOptions = { origin: "http://localhost:8080" };

//Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.json({ message: "API" })
});

const PORT = 8080;
app.listen(PORT, () => console.log('Is your server running on PORT 8080'));