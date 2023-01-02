const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(cors({ origin: "some frontend url in production" }));
} else {
  app.use(cors());
}

app.use(express.json());

app.use("/", userRoutes);
app.use("/", todoRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
