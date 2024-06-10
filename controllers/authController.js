const bcrypt = require("bcrypt");
const { User } = require("../models");

exports.login = async (req, res) => {
  // Retrieve username and password from request body
  // Find the user in the database
  // Compare the provided password with the hashed password
  // If the passwords match, create a session and redirect to the dashboard
  // If the passwords don't match, render the login page with an error message
};

exports.signup = async (req, res) => {
  // Retrieve username, email, and password from request body
  // Hash the password using bcrypt
  // Create a new user in the database
  // Create a session and redirect to the dashboard
};
