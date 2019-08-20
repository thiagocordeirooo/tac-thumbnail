const express = require("express");

const routes = express.Router();

const ThumbnailController = require("./controllers/ThumbnailController");

routes.get("/ping", (req, res) => res.send("pong"));
routes.get("/resize/:length/:file", ThumbnailController.resize);
routes.get("/resize/:file", ThumbnailController.resize75);

module.exports = routes;
