const mongoose = require("mongoose");

const {Schema} = mongoose;
const grocerySchema = Schema({
    name:String,
    // quantity:Number,
    price:Number,
    category:String,
    description:String,
    itemImage:String
});

const groceryModel = mongoose.model("groceries",grocerySchema);

module.exports = groceryModel;
