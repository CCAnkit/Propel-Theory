const { model, Schema } = require("mongoose");

const cardSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    websiteURL: {
      type: String,
      required: true,
      trim: true,
    },
    socialURL: {
      type: [{type:String}, {type:String}, {type:String}],
      required: true,
    },
    companyLogo: {
      type: String,
      trim: true,
    },
    
  }, { timestamps: true }
);

module.exports = model("Card", cardSchema);
