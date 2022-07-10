const express = require("express");
const mongoose = require("mongoose");
const app = express();

const FoodModel = require("./models/Food")

// Allows us to receive data in JSON format
app.use(express.json());

const PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DB_NAME

mongoose.connect(
  `mongodb+srv://Luke:${PASSWORD}@crud-cluster.rcpyork.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    userNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const food = new FoodModel({
    foodName: "Pizza",
    daysSinceIAte: 3
  })

  try {
    await food.save()
  } catch(err) {
    console.log(err)
  }
})

app.listen(3001, () => {
  console.log(`Server listening on port 3001...`);
});
