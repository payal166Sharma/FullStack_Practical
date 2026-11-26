# ShopNest — E-Commerce Application

A ready-to-run React e-commerce demo with a customer storefront, cart, checkout, order history, seller product management, and a seller overview dashboard.

## Requirements
- Node.js 18+ and npm
- Internet connection for the Google Fonts stylesheet (the app itself runs locally)

## Run the application
1. Extract the ZIP file.
2. Open the extracted `ecommerce_application` folder in VS Code.
3. Open the terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Features
- Browse all products, search by name, and filter by category.
- Add products to cart, change quantities, and remove items.
- Checkout form with UPI, card, and cash-on-delivery demo choices.
- Successful demo purchases are saved in My Orders.
- Seller panel supports adding, editing, and deleting product listings.
- Overview dashboard shows product count, order count, and demo revenue.
- Product catalogue, cart, and orders persist in browser localStorage.

## Important: payment and data limitations
This is a front-end academic/demo application. Checkout simulates a successful payment and does **not** charge money or communicate with a bank, UPI provider, or payment gateway. Do not collect real payment details. For production, integrate a server-side payment provider such as Razorpay or Stripe, verify payment signatures/webhooks on the backend, and store orders/products in a database. Seller access is not authenticated in this demo; add secure login and role-based authorization before deployment.

## Reset demo data
Clear the site's localStorage in browser developer tools, or run:

```js
localStorage.clear()
```

Then refresh the page.

## Suggested future production architecture
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MySQL / PostgreSQL
- ORM: Sequelize / Prisma
- Authentication: secure server sessions or short-lived access tokens
- Payments: Razorpay / Stripe server-side order creation and webhook verification
