const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const db = async () => {
  await mongoose
    .connect(process.env.URI)
    .then(
      mongoose.connection.once("open", () =>
        console.log("Database is connected"),
      ),
    );
  mongoose.connection.on("error", (error) =>
    console.log(`Error Found:\n${error}`),
  );
};
module.exports = db;
