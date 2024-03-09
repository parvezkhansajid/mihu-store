const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/config.env" });

const port = process.env.PORT;
const connectDB = require("./config/database");
connectDB();

const server = app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
