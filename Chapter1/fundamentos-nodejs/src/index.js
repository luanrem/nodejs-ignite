const express = require("express");

const app = express();

app.get("/", (request, response) => {
  //   return response.send("Hello World");
  return response.json({ message: "Hello World Ignite!" });
});

//localhost:3333
app.listen(3333);
