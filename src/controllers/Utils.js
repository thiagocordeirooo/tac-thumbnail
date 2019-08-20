const Jimp = require("jimp");

class Utils {
  async resizeImage(req, res, width, heigth) {
    const s3Path = "https://apollus-public.s3.amazonaws.com/public/uploads";
    const { file } = req.params;

    try {
      const fullUrl = `${s3Path}/${file}`;
      const image = await Jimp.read(fullUrl);

      await image
        .resize(
          width ? +width : image.getWidth() / 1.25,
          heigth ? +heigth : image.getHeight() / 1.25
        )
        .quality(60);

      const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);

      const img = Buffer.from(buffer, "base64");

      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": img.length
      });

      res.end(img);
    } catch {
      res.status(400);
      res.json({
        error: true,
        message: `Não foi possível fazer o donwload da imagem.`,
        fileName: file
      });
    }
  }
}

module.exports = new Utils();
