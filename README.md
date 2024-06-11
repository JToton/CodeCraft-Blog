# CodeCraft Blog

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

The Tech Blog is a CMS-style blog application built using Node.js, Express.js, Sequelize, and Handlebars. It provides a platform for developers to publish blog posts, engage in discussions through comments, and stay updated with the latest posts from other users.

## Table of Contents

- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Database Model](#database-model)
- [API Routes](#api-routes)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Citations](#citations)

## Screenshot

![Screenshot](/images/screenshot.PNG)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Set up the database:
   - Create a PostgreSQL database
   - Update the database configuration in `.env` file
4. Run the database migrations: `npm run db:migrate`
5. Start the application: `npm start`

## Usage

1. Access the application in your browser at `http://localhost:3000`
2. Sign up for a new account or log in with an existing account
3. Navigate to the dashboard to create, edit, or delete blog posts
4. View blog posts on the homepage and leave comments on individual posts

## Database Model

- `User`: Represents a user in the application. It has fields for `id`, `username`, `email`, and `password`.
- `Post`: Represents a blog post. It has fields for `id`, `title`, `content`, and `userId` (foreign key referencing the `User` model).
- `Comment`: Represents a comment on a blog post. It has fields for `id`, `content`, `userId` (foreign key referencing the `User` model), and `postId` (foreign key referencing the `Post` model).

## API Routes

- `GET /api/posts`: Retrieves all blog posts.
- `GET /api/posts/:id`: Retrieves a specific blog post by ID.
- `POST /api/posts`: Creates a new blog post.
- `PUT /api/posts/:id`: Updates a blog post by ID.
- `DELETE /api/posts/:id`: Deletes a blog post by ID.
- `POST /api/comments`: Creates a new comment on a blog post.

## Features

API Endpoints:

- RESTful API endpoints for creating, reading, updating, and deleting blog posts and comments.
- Secure authentication and authorization using JSON Web Tokens (JWT).

Database Integration:

- Integration with PostgreSQL database using Sequelize ORM.
- Database migrations for creating and managing the database schema.

Error Handling:

- Proper error handling and response codes for various scenarios.
- Graceful error messages and logging for debugging purposes.

Data Validation:

- Server-side validation of user input to ensure data integrity.
- Usage of Sequelize validations for fields such as email and password length.

Documentation:

- Comprehensive README file with installation instructions, usage guidelines, and API documentation.
- JSDoc comments in the codebase for better code understanding and maintainability.

Security:

- Secure storage of user passwords using bcrypt hashing.
- Protection against common security vulnerabilities such as SQL injection and cross-site scripting (XSS).

Deployment:

- Deployment-ready configuration for hosting the application on popular platforms like Heroku or AWS.
- Environment-specific configuration using dotenv for managing sensitive information.

## Technologies Used

- Node.js
- PostgreSQL
- dotenv
- express
- pg
- sequelize
- bcrypt
- express-handlebars
- express-session
- connect-session-sequelize
- axios

## Contributing

Contributions are not welcome. This is a graded classroom assignment that is an assessment of my skills regarding the usage of Node.js, Inquirer, and Postgres / SQL. If you have any suggestions, bug reports, or feature requests, please open an issue or leave a comment for my future knowledge base and usage.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Questions

If you have any questions about CodeCraft Blog, you can reach me at Jake_Toton@live.com. You can find more of my work at [Jtoton](https://github.com/Jtoton/).

## Citations

1. Node.js. (n.d.). Node.js. Retrieved from https://nodejs.org/
2. PostgreSQL. (n.d.). PostgreSQL: The World's Most Advanced Open Source Relational Database. Retrieved from https://www.postgresql.org/
3. Open Source Initiative. (n.d.). The MIT License. Retrieved from https://opensource.org/licenses/MIT
4. Module 14 challenge. (n.d.). https://bootcampspot.instructure.com/courses/5301/assignments/74803?submitted=1
   - Canvas assignment page which housed the assignment description, requirements and acceptance criteria.
   - This additionally provided the database schema to use including the tables and setup.
   - Assignment contained source code that was provided.
5. Course instructors and T.A.'s provided assistance, materials and various links located within our classroom slack channels.
6. SQL Tutorial. (n.d.). https://www.w3schools.com/sql/
7. Node.js NPM. (n.d.). https://www.w3schools.com/nodejs/nodejs_npm.asp
8. Sequelize. (n.d.). Feature-rich ORM for Modern TypeScript & JavaScript. https://sequelize.org/
9. Introduction to Insomnia | Insomnia Docs. (n.d.). https://docs.insomnia.rest/insomnia/get-started
10. Documentation | Dotenv. (n.d.). https://www.dotenv.org/docs/
11. npm: dotenv. (n.d.). Npm. https://www.npmjs.com/package/dotenv
