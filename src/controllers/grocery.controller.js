const express = require("express");
const groceryModel = require("../models/grocery.model");
const router = express.Router();

router.post("/addItem", async (req, res) => {
  try {
    const { name, category, quantity, price } = req.body;
    console.log(req.body)
    await groceryModel.create({ name, category, quantity, price });
    res.send(201).json({ message: "Item added successfully" });
  } catch (err) {
    return err;
  }
});

router.get("/getItems", async (req, res) => {
  console.log('here')
  try {
    const allGroceryItems = await groceryModel.find();
    res.send(allGroceryItems).status(200);
  } catch (err) {
    return err;
  }
});

module.exports = router;

