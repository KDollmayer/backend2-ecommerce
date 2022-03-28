const express = require("express");

const { readProducts, getAllProducts, getProduct } = require("../models/products.js");

const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
    const products = await getAllProducts();
    res.json({products});
});

productRoutes.get("/:sku", async (req, res) => {
    const { products } = await readProducts();
    const product = await getProduct(req.params.sku)
    if (product) {
        res.json(product);
    } else {
        res.sendStatus(404);
    }
});


module.exports = { productRoutes };