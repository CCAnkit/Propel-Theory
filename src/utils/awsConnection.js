const aws = require("aws-sdk");

const { KEY_ID, SECRET_KEY } = require("./config.js");


// AWS Config
aws.config.update({
  accessKeyId: KEY_ID,
  secretAccessKey: SECRET_KEY,
  region: "ap-south-1",
});


// uploadFile function
const uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    let awsS3 = new aws.S3({ apiVersion: "2006-03-01" });
    var uploadParams = {
      ACL: "public-read",
      Bucket: "training-bucket",
      Key: "Assignment/propeltheory" + file.originalname,
      Body: file.buffer,
    };

    awsS3.upload(uploadParams, (err, data) => {
      if (err) return reject({ error: err });
      console.log(data);
      console.log(`File uploaded successfully. ${data.Location}`);
      return resolve(data.Location);
    });
  });
};

module.exports.uploadFile = uploadFile