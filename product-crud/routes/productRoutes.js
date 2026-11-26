
const express = require("express");

const router = express.Router();


// Temporary product data
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        description: "HP Laptop with 8GB RAM"
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000,
        description: "Samsung smartphone"
    },
    {
        id: 3,
        name: "Headphones",
        price: 1500,
        description: "Wireless Bluetooth headphones"
    }
];


// Generate unique IDs
let nextId = 4;


// =================================
// 1. CREATE PRODUCT - POST
// =================================

router.post("/", (req, res) => {

    const { name, price, description } = req.body;

    // Validate input
    if (
        typeof name !== "string" ||
        !name.trim() ||
        price === undefined ||
        price === "" ||
        !Number.isFinite(Number(price)) ||
        Number(price) < 0 ||
        typeof description !== "string" ||
        !description.trim()
    ) {
        return res.status(400).json({
            message: "Please provide valid name, price and description"
        });
    }

    const newProduct = {
        id: nextId++,
        name: name.trim(),
        price: Number(price),
        description: description.trim()
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });

});


// =================================
// 2. READ ALL PRODUCTS - GET
// =================================

router.get("/", (req, res) => {

    res.status(200).json({
        message: "Products fetched successfully",
        products: products
    });

});


// =================================
// 3. READ SINGLE PRODUCT - GET
// =================================

router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {

        return res.status(404).json({
            message: "Product not found"
        });

    }

    res.status(200).json({
        message: "Product fetched successfully",
        product: product
    });

});


// =================================
// 4. UPDATE PRODUCT - PUT
// =================================

router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {

        return res.status(404).json({
            message: "Product not found"
        });

    }

    const { name, price, description } = req.body;

    if (
        typeof name !== "string" ||
        !name.trim() ||
        price === undefined ||
        price === "" ||
        !Number.isFinite(Number(price)) ||
        Number(price) < 0 ||
        typeof description !== "string" ||
        !description.trim()
    ) {
        return res.status(400).json({
            message: "Please provide valid name, price and description"
        });
    }

    product.name = name.trim();

    product.price = Number(price);

    product.description = description.trim();

    res.status(200).json({
        message: "Product updated successfully",
        product: product
    });

});


// =================================
// 5. DELETE PRODUCT - DELETE
// =================================

router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {

        return res.status(404).json({
            message: "Product not found"
        });

    }

    const deletedProduct = products.splice(productIndex, 1)[0];

    res.status(200).json({
        message: "Product deleted successfully",
        product: deletedProduct
    });

});


module.exports = router;
