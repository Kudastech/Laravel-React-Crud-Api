Laravel React CRUD API

A robust and efficient CRUD (Create, Read, Update, Delete) API built using Laravel for the backend and React for the frontend. This project integrates secure login attempt tracking alongside CRUD functionalities, ensuring enhanced security and user management.

🚀 Features:

    Full CRUD Operations: Easily manage resources with clear and optimized endpoints.
    RESTful API: Built with Laravel, following best practices for API development.
    Frontend Integration: React-based user interface for intuitive interaction with the backend.
    Scalable Architecture: Designed for easy extension and scalability.
    Modern Development Stack: Utilizes the best tools and practices for web development.
    Secure Authentication: Built-in user login system with email-based notifications for failed attempts.
    Login Attempt Tracking: Alerts users after three consecutive failed login attempts.

🛠️ Technologies Used:

    Backend: Laravel
    Frontend: React
    Database: MySQL
    API Testing: Postman

📂 Project Structure

├── backend/ # Laravel API
│ ├── app/ # Core backend logic
│ ├── routes/ # API route definitions
│ └── database/ # Database migrations and seeders
├── frontend/ # React application
│ ├── src/ # React components and services
│ └── public/ # Static files
└── README.md # Project documentation

🔧 Installation
Prerequisites

    PHP >= 8.2
    Node.js >= 16
    Composer
    MySQL

Steps

    Clone the Repository

git clone https://github.com/Kudastech/Laravel-React-Crud-Api.git
cd Laravel-React-Crud-Api

Set Up Backend

cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed

Configure your database credentials in the .env file.

Set Up Frontend

cd ../frontend
npm install
npm start

Run the Project

    Start the Laravel backend:

php artisan serve

Start the React frontend:

        npm start

📖 Usage

    Navigate to the frontend URL (usually http://localhost:3000) to access the React application.
    Use the backend API via Postman or any REST client (default: http://127.0.0.1:8000).

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.
