import express from "express";

const app = express();

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   console.log("got");
//   res.send("Hello World!");
// });

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
