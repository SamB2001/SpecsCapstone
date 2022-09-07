const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require('./sequelize')
const port = process.env.PORT || 7001;

app.use(express());
app.use(cors());
app.use(express.json());

app.get('/rank', async (req, res) => {
    sequelize.query(`SELECT * FROM rank ORDER BY score DESC LIMIT 5`)
    .then((dbRes) => {
        res.status(200)
    .send(dbRes)
    })
    .catch((err)=> console.log(err))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });