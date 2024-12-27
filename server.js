const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

// Import routes
const users = require("./routers/api/users");
const students = require("./routers/api/student");
const room = require("./routers/api/room");
const staff = require("./routers/api/staff");

// Load environment variables
require("dotenv").config(); // Ensures your .env variables are loaded

const app = express();

// Access environment variables (Use the correct variable names)
const mongoUri = process.env.MONGO_URI;  // Use MONGO_URI instead of REACT_APP_MONGO_URI
const secret = process.env.SECRET_OR_KEY; // Use SECRET_OR_KEY instead of REACT_APP_SECRET_OR_KEY
// Log the environment variables
console.log("Mongo URI:", process.env.MONGO_URI);
console.log("Secret Key:", process.env.SECRET_OR_KEY);
// Print the secret for verification (optional)
console.log("Secret Key:", secret);

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB connection error: ", err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/student", students);
app.use("/api/room", room);
app.use("/api/staff", staff);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// Define the port to run the server
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = { app };
