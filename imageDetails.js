const mongoose = require("mongoose");

const ImageDetailsScehma = new mongoose.Schema(
  {
    price : Number,
   image:String
  },
  {
    collection: "ImageDetails",
  }
);

mongoose.model("ImageDetails", ImageDetailsScehma);
