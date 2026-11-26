
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Initial product data
let products = [
    { id: 1, name: "Laptop", price: 50000, rating: 4.5 },
    { id: 2, name: "Mobile", price: 20000, rating: 4.2 },
    { id: 3, name: "Headphones", price: 1500, rating: 4.0 }
];

let nextId = 4;

// GET API - Fetch all products
app.get("/api/products", (req, res) => {
    res.status(200).json(products);
});

// POST API - Add a new product
app.post("/api/products", (req, res) => {
    const { name, price, rating } = req.body;

    if (
        typeof name !== "string" ||
        !name.trim() ||
        price === undefined ||
        price === "" ||
        !Number.isFinite(Number(price)) ||
        Number(price) <= 0 ||
        rating === undefined ||
        rating === "" ||
        !Number.isFinite(Number(rating)) ||
        Number(rating) < 0 ||
        Number(rating) > 5
    ) {
        return res.status(400).json({
            message: "Enter a valid name, price and rating (0 to 5)."
        });
    }

    const newProduct = {
        id: nextId++,
        name: name.trim(),
        price: Number(price),
        rating: Number(rating)
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
