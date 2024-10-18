# Shopify

Shopify is a eCommerce full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application provides an interface for users to browse and purchase products and for admins to manage the product inventory, process orders, and handle deliveries.

## Features

### Admin View
- **Admin Login:** Admin users can log in to access the admin dashboard.
- **Manage Products:** Admins can add new products, delete existing ones, and update product details.
- **Manage Orders:** Admins can view and manage orders placed by users, including order status and delivery management.

### Shopping View (User)
- **User Login:** Registered users can log in to access the shopping portal.
- **Browse Products:** Users can browse products with advanced filters and search options.
- **Product Purchase:** Users can purchase products securely using PayPal integration.
- **Order Tracking:** Users can track the status of their orders post-purchase.

## Tech Stack
- **Frontend:** React.js, Redux for state management, Shadcn for responsive UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment Integration:** PayPal API
- **Authentication:** JWT (JSON Web Tokens) for secure login for both users and admins

## Installation

1. **Clone the repository:**
    ```bash
    https://github.com/alpharsh/ecommapp.git
    cd ecommapp
    ```

2. **Install server dependencies:**
    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies:**
    ```bash
    cd client
    npm install
    ```

4. **Create environment variables:**

    - In the `server` folder, create a `.env` file and add the following:

    ```bash
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_secret_key
    CLOUDINARY_API_SECRET=your_secret_key
    PAYPAL_CLIENT_ID=your_secret_id
    PAYPAL_CLIENT_SECRET=your_secret_key
    MONGO_URI=your_URI
    PORT=5000
    CLIENT_BASE_URL=http://localhost:5173
    ```
    
5. **Create environment variables:**

    - In the `client` folder, create a `.env` file and add the following:

    ```bash
    VITE_API_URL=http://localhost:5000
    ```

6. **Run the app:**
    - In the `server` folder:
    ```bash
    npm run dev
    ```

    - In the `client` folder:
    ```bash
    npm run dev
    ```

7. **Access the app:**
   - User/Admin View: `http://localhost:5173/`

## Usage

### Admin Credentials
- Use admin credentials to log in and manage the products and orders.
- Admin can:
  - Add new products
  - Delete existing products
  - Manage orders and update their delivery status

### User Credentials
- Users can register or log in to the shopping portal.
- After logging in, users can:
  - Browse available products
  - Filter and search products by category, price, and rating
  - Add products to the cart and purchase via PayPal
  - View their order history and track order status

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/alpharsh/ecommapp?tab=MIT-1-ov-file) file for details.
