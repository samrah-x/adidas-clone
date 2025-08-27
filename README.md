# Adidas Clone

This project is a full-stack clone of the Adidas website, created for educational and portfolio purposes. It replicates the look and feel of the official Adidas online store, while also providing an admin panel and backend functionality.

## Features

- Responsive layout for desktop and mobile devices
- Product listings with images and descriptions
- Basic navigation menu
- Simple shopping cart interface
- **Admin Panel** for managing products
- RESTful API for data handling
- Clean, modern UI inspired by Adidas

## Tech Stack

This project implements the **MERN stack**:

- **MongoDB** – Database for storing user, product, and order data
- **Express.js** – Backend web application framework
- **React.js** – Frontend user interface
- **Node.js** – Backend runtime environment

## Project Structure

- `/frontend` – React frontend (user interface)
- `/backend` – Node.js & Express backend (API and business logic)
- Admin panel is available 
- MongoDB database connection (local or cloud)

## Getting Started

1. Clone this repository:
    ```bash
    git clone https://github.com/samrah-x/adidas-clone.git
    ```
2. Navigate to the project directory:
    ```bash
    cd adidas-clone
    ```
3. Install dependencies for both frontend and backend:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```
4. Start the backend server:
    ```bash
    node ./index.js 
    ```
5. Start the frontend React app (in a separate terminal):
    ```bash
    cd ../frontend
    npm run dev
    ```
6. Visit `http://localhost:5174` to view the project.
7. Access the admin panel at `http://localhost:5173` (requires admin login).

## Improvements
- Add user auth
- add protected endpoint for admin
- maintain carts for users
- sort items according to categories
- expand front end

## Disclaimer

This project is for educational purposes only and is not affiliated with or endorsed by Adidas.

## License

[MIT](LICENSE)
