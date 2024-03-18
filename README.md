
# Node.js Authentication & CRUD Project

This project is a Node.js server application that provides CRUD (Create, Read, Update, Delete) functionality along with user authentication features such as SignUp, SignIn, and Authorization. It serves as a foundation for building web applications with user management and data manipulation capabilities.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on data resources.
- **SignUp**: Allow users to register for an account.
- **SignIn**: Enable users to authenticate with their credentials.
- **Authorization**: Restrict access to certain routes or resources based on user roles or permissions.

## Technologies Used

- **Node.js**: A JavaScript runtime environment for building server-side applications.
- **Express.js**: A web application framework for Node.js used for routing and middleware.
- **MongoDB**: A NoSQL database for storing application data.
- **JSON Web Tokens (JWT)**: Used for secure authentication and authorization.
- **bcrypt.js**: Library for hashing passwords securely.
- **cors**: A middleware for Express.js that enables Cross-Origin Resource Sharing (CORS) to allow client-side code running in a web browser to make requests to your server from a different origin.
- **joi**: A JavaScript schema description language and validator, commonly utilized for validating request data in Express.js applications.

### Development:
- **nodemon**: A utility that monitors changes in your source code and automatically restarts the server when changes are detected, facilitating the development process.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HoangPhiNhat/nodejs-authentication-crud
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-authentication-crud
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   ## Environmental Variables

In Node.js version 20 and above, the `dotenv` package has been integrated directly into Node.js. This means that you no longer need to explicitly install and import `dotenv` in your Node.js applications. Instead, Node.js automatically loads environment variables from a `.env` file located in the root directory of your project.

If you're using Node.js v20 or higher, ensure that you have a `.env` file in your project's root directory and define your environment variables there. Node.js will automatically load these variables into `process.env` when your application starts.

   ## Usage with Node.js versions prior to v20

If you're using an older version of Node.js or if you prefer to use `dotenv` explicitly, follow these steps:

1. Install `dotenv` as a separate package:

```bash
npm install dotenv
```

2. Import and configure `dotenv` in your application:

```javascript
import dotenv from "dotenv";
dotenv.config();

```

   - Create a `.env` file in the root directory.
   - Define the following variables:

     ```plaintext
     PORT=3000
     DB_URI=your_mongodb_connection_string
     SECRET_CODE=your_jwt_secret_key
     ```

5. Start the server:

   ```bash
   npm start
   ```

## Usage

- Once the server is running, you can access the API endpoints using tools like Postman or integrate them into your frontend application.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests for any improvements or new features.

