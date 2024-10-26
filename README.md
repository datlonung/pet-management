

## Overview

Quan Ly Thu Cung is a project designed for managing pets. This application helps users to keep track of their pets' information, health records, and other relevant details.

## Project Structure

The project is structured as follows:

CV-Project/
    quanlythucung/
        src/
        tests/
        config/
        public/
        views/
        package.json
        ...


- **src/**: Contains the source code for the application.
- **tests/**: Contains the test cases for the application.
- **config/**: Contains configuration files.
- **public/**: Contains static files like images, CSS, and JavaScript.
- **views/**: Contains the HTML templates.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. Clone the repository:
    git clone https://github.com/yourusername/quanlythucung.git
2. Navigate to the project directory:
    cd CV-Project/quanlythucung
3. Install the dependencies:
    npm install
4. Create a \`.env\` file in the root directory and add your MongoDB URL:
    MONGODB_URL=your_mongodb_url

## Running the Application

To start the application, run:
npm start

The application will be available at \`http://localhost:3000\`.

## Running Tests

To run the tests, use:

npm test

## Database Configuration

The database configuration is handled in the \`database.config.js\` file. Below is an excerpt from the file:

const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log('Mongo connected at', conn.connection.host)
    } catch(e) {
        console.log('Error mongoose', e)
    }
}
module.exports = connectDB;

## Contributing

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Make your changes.
4. Commit your changes (\`git commit -m 'Add some feature'\`).
5. Push to the branch (\`git push origin feature-branch\`).
6. Open a pull request.
