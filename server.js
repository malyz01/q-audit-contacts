require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const errorHandler = require("./helpers/error");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(`${process.env.MONGO_URL}/qaudit`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(error => {
    app.use((err, req, res, next) => {
      return next({
        status: 400,
        message: error.message
      });
    });
  });

app.use("/api/auditor", require("./routes/auditor"));
app.use("/api/provider", require("./routes/provider"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(function(req, res, next) {
  let err = new Error("Page not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8081;
}

app.listen(port, function() {
  console.log(`Server has started: ${port}`);
});
