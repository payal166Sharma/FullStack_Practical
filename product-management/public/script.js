
const productList = document.getElementById("productList");
const productForm = document.getElementById("productForm");
const message = document.getElementById("message");

// GET API: Fetch and display products
async function fetchProducts() {
    try {
        const response = await fetch("/api/products");

        if (!response.ok) {
            throw new Error("Unable to fetch products");
        }

        const products = await response.json();

        displayProducts(products);

    } catch (error) {
        productList.textContent = error.message;
    }
}

// Display products dynamically
function displayProducts(products) {
    productList.innerHTML = "";

    if (products.length === 0) {
        productList.textContent = "No products available.";
        return;
    }

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const heading = document.createElement("h3");
        heading.textContent = product.name;

        const id = document.createElement("p");
        id.textContent = `Product ID: ${product.id}`;

        const price = document.createElement("p");
        price.textContent = `Price: ₹${product.price}`;

        const rating = document.createElement("p");
        rating.textContent = `Rating: ${product.rating}/5`;

        card.append(heading, id, price, rating);
        productList.appendChild(card);
    });
}

// POST API: Add a new product
productForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const price = document.getElementById("price").value;
    const rating = document.getElementById("rating").value;

    try {
        const response = await fetch("/api/products", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                price: Number(price),
                rating: Number(rating)
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Unable to add product");
        }

        message.textContent = result.message;
        message.style.color = "green";

        productForm.reset();

        // Refresh product list without reloading webpage
        await fetchProducts();

    } catch (error) {
        message.textContent = error.message;
        message.style.color = "red";
    }
});

// Load products when page opens
fetchProducts();
