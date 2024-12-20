// Pokédex
// Table columns: id, name, type
// https://essentialsdocs.fandom.com/wiki/Pok%C3%A9dex?file=PokedexList.png

const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

require('dotenv').config()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ exteded: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}`));