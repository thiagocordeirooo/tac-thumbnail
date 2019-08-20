const Utils = require("./Utils");

class ThumbnailController {
  async resize75(req, res) {
    Utils.resizeImage(req, res);
  }

  async resize(req, res) {
    const { length } = req.params;
    const [width, heigth] = length.split("x");

    const maxSize = 2000;

    Utils.resizeImage(
      req,
      res,
      width > maxSize ? maxSize : width,
      heigth > maxSize ? maxSize : heigth
    );
  }
}

module.exports = new ThumbnailController();
