const app = require("./app");

const PORT = process.env.PORT || 7070;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
