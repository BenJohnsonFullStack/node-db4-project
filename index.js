require("dotenv").config();
const server = require("./api/server");

const PORT = process.env.PORT || 9000;

server.use("*", (req, res) => {
  res.json("api online");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
