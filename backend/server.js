const app = require("./app");
// const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
   console.log(`Error: ${err.stack}`);
   console.log("Shutting down server due to uncaught exception");
   process.exit(1);
});

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
   require("dotenv").config({ path: "backend/config/config.env" });

connectDatabase();

// Setting Cloudinary Config
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
   console.log(
      `Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
   );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
   console.log(`Error: ${err.message}`);
   console.log("Shutting down server due to unhandled Promise rejections");
   server.close(() => {
      process.exit(1);
   });
});
