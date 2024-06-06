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
app.use("/transactions", require("./routes/public/transactionsRoutes"));

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
