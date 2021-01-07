const connectDB = require("./config/db");

const app = require("express")();

app.use(require("cors")());

connectDB();

app.use(require("express").json({ extended: false }));

app.use("/api/user", require("./routes/api/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Connected on PORT : ", PORT);
});
