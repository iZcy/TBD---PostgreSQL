require("dotenv").config();

const express = require("express");
const path = require("path");
const pool = require("./config/connectDb");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

app.use("/", require("./routes/root"));

app.use("/test", require("./routes/test/testRoutes"));
app.use("/authors", require("./routes/public/authorRoutes"));
app.use("/books", require("./routes/public/bookRoutes"));
app.use("/locations", require("./routes/public/locationRoutes"));
app.use("/contacts", require("./routes/public/contactRoutes"));
app.use("/customers", require("./routes/public/customerRoutes"));
app.use("/discounts", require("./routes/public/discountRoutes"));
app.use("/distributors", require("./routes/public/distributorRoutes"));
app.use("/employees", require("./routes/public/employeeRoutes"));
app.use("/franchises", require("./routes/public/franchiseRoutes"));
app.use("/positions", require("./routes/public/positionRoutes"));
app.use("/profiles", require("./routes/public/profileRoutes"));
app.use("/publishers", require("./routes/public/publisherRoutes"));
app.use("/stocks", require("./routes/public/stockRoutes"));
app.use("/transactions", require("./routes/public/transactionsRoutes"));
app.use("/wishlists", require("./routes/public/wishlistRoutes"));
app.use("/writtings", require("./routes/public/writtingsRoutes"));
app.use("/views", require("./routes/viewsRoute"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
