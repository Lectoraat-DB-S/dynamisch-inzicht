require("dotenv").config();

const express = require('express')
const app = express()

//Middleware
app.use(express.json());

app.use("/post", require("./routes/postRoutes"));

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something no good",
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Is your server running on PORT ${PORT}'));