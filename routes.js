const express = require("express");
const multer = require("multer");

const ProdutosController = require("./controllers/produtos")
const lojasController = require("./controllers/lojas")

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/produtos", ProdutosController.findAll);
router.get("/produtos", ProdutosController.findOne);
router.post("/produtos", upload.single("imagem"), ProdutosController.create);
router.patch("/produtos/:id", ProdutosController.update);
router.delete("/produtos/:id", ProdutosController.destroy);

router.get("/lojas", lojasController.findAll);

module.exports = router;