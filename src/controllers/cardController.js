const cardModel = require("../models/cardModel.js");
const { uploadFile } = require("../utils/awsConnection.js");

const {
  isValid,
  isValidObjectId,
  isValidlength,
  isValidRequestBody,
  isValidName,
  isValidNumber,
  isValidEmail,
  isValidUrl,
} = require("../utils/validator.js");


// ---------------------------------- Create Business Card ---------------------------------------

const createCard = async (req, res) => {
  try {
    if (!isValidRequestBody(req.body))
      return res.status(400).json({ status: false, msg: "Please provide the card details" });

    let { name, designation, companyName, contactNumber, emailId, websiteURL, socialURL, companyLogo } = req.body;

    if (!isValid(name))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the Full Name" });

    if (!isValidName(name))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the Valid Name without any specail charsacter or numbers." });

    if (!isValid(designation))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the designation." });

    if (!isValidName(designation))
      return res
      .status(400)
      .json({ status: false, msg: "Please provide the valid degisnation" });

    if (!isValid(companyName))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the Company Name" });

    if (!isValid(contactNumber))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the Contact Number" });

    if (!isValidNumber(contactNumber))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the valid Contact Number." });

    let isConatactNumberExist = await cardModel.findOne({ contactNumber });
    if (isConatactNumberExist)
      return res
        .status(400)
        .json({ status: false, msg: `${contactNumber} is already exists` });

    if (!isValid(emailId))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the Email Address" });

    if (!isValidEmail(emailId))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the valid Email Address" });

    let isEmailExist = await cardModel.findOne({ emailId });
    if (isEmailExist)
      return res
        .status(400)
        .json({ status: false, msg: `${email_Id} is already exists` });

    if (!isValid(websiteURL))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide tje Website Address" });

    if (!isValidUrl(websiteURL))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the valid Webiste Address" });

    if(socialURL && socialURL.length > 3){
      return res
        .status(400)
        .send({ status: false, msg: "Maximum 3 social URL's allowed" })}

    let files = req.files
    if (files && files.length > 0) {
      if (files[0].mimetype.indexOf('image') == -1) {
        return res
          .status(400)
          .send({ status: false, message: 'Only image files are allowed' })
      }
    companyLogo = await uploadFile(files[0]);

  } else {
        return res
          .status(400)
          .send({ status: false, message: 'Please provide the Company Logo' })}

    const createCard = {
      name,
      designation,
      companyName,
      contactNumber,
      emailId,
      websiteURL,
      socialURL,
      companyLogo,
    };

    let card = await cardModel.create(createCard);

    res.status(201).send({
      type: "success", 
      status: true, 
      message: "Business Card is created successfully", 
      data: card 
    });
    
  } catch (err) {
    res.status(500).json({ status: false, msg: err.message });
  }
};



// --------------------------------- Get Business Card Details ---------------------------------------

const getCard = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id) && !isValidlength(req.params.id))
      return res
        .status(400)
        .json({ status: false, msg: "Please provide the valid Object Id" });

    let findCard = await cardModel.findById(req.params.id);
    if (!findCard)
      return res
        .status(400)
        .json({ status: false, msg: "Business Card is not found" });

    return res.status(200).json({ 
        type: "success", 
        status: false, 
        msg: "Busines Card found Successfully", 
        data: findCard 
      });
      
  } catch (err) {
    res.status(500).json({ status: false, msg: err.message });
  }
};



module.exports = { createCard, getCard }