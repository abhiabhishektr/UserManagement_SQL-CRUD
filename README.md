# User Management SQL-CRUD

This project is a simple User Management system built using Node.js, Express.js, and SQL, implementing CRUD (Create, Read, Update, Delete) operations for both users and admins.

## Features

### Admin Panel

- **Admin Dashboard**: Administrators have access to a dashboard where they can view, add, update, and delete users.
- **Add User**: Admins can add new users to the system providing necessary details such as username, email, and password.
- **Update User**: Admins can update existing user information including username, email, and password.
- **Delete User**: Admins can delete user accounts from the system.

### User Side

- **User Registration**: Users can sign up for an account by providing basic information such as username, email, and password.
- **User Login**: Registered users can log in to their accounts securely.
- **Third-Party Authentication**: Users have the option to sign up and log in using third-party authentication services such as Google OAuth.
- **Update Profile**: Users can update their profile information including username, email, and password.

## Technologies Used

- Node.js
- Express.js
- SQL (MySQL, PostgreSQL, etc.)
- HTML/CSS/JavaScript (for front-end rendering)
- Passport.js (for authentication)
- Google OAuth (for third-party authentication)

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- SQL database server (MySQL, PostgreSQL, etc.) installed and running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your_username/UserManagement_SQL-CRUD.git
    ```

2. Install dependencies:

    ```bash
    cd UserManagement_SQL-CRUD
    npm install
    ```

3. Set up your SQL database and update the database configuration in `config/dbConfig.js`.

4. Run the application:

    ```bash
    npm start
    ```

5. Access the application at `http://localhost:3000`.

## Usage

1. **Admin Panel**: Log in as an admin to access the admin dashboard. From there, you can manage users by adding, updating, or deleting them.

2. **User Side**: Users can sign up for an account or log in with their credentials. They can also choose to log in using their Google account.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was inspired by the need for a simple and efficient User Management system.
- Thanks to the open-source community for providing valuable resources and libraries.

