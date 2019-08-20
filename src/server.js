const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require("http").Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

server.listen(process.env.PORT || 3333);
