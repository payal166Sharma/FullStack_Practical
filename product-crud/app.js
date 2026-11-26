
const express = require("express");

const app = express();

const PORT = 3000;


// Middleware to read JSON data
app.use(express.json());


// Import product routes
const productRoutes = require("./routes/productRoutes");


// Use product routes
app.use("/api/products", productRoutes);


// Home route
app.get("/", (req, res) => {
    res.send("Product Management API is running!");
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
