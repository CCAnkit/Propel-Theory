# Propel-Theory-Assignment

### Virtual Business Card

##### Assignment that is based on restfull API using Nodejs, Express.

##### Backend TeckStacks 
- NodeJS
- Express
- MongoDB
- AWS
- JavaScript

##### Frontend TechStacks
- HTML
- CSS

##### Packages
- express
- body-parser
- mongoose
- cors
- dotenv
- nodemon
- aws-sdk
- multer


##### Goals
- 
- Quick and easy setup

##### Features
- Concise action buttons

- Social media links and Website URL
- Company Logo
- Elegant design and functionality
- 
- Click to contact via Phone, WhatsApp, Email, etc
- Direct vCard download (lets user download your contact information to their phone)
- Share your card with anyone using QR-code or link
- Showcase Images, Artworks, Videos, Music, Brochures, Products and services, etc.
- Embed any kind of HTML content (videos, music, maps, contact forms, you name it.)

##### Highlights
- 

##### Business Card API's
-- Create Login Page.
-- 1. Create Login Screen
-- 2. Accept Mobile Number and send and validate the OTP on Mobile number. 



###### EndPoint and Feature 

##### 1) /api/businessCard/new
method POST
body {
    name : String,
    designation : String,
    companyName : String,
    contactNumber : String,
    emailID : String,
    websiteURL : String,
    socialURL : String,
    companyLogo : String,
}

##### 2) /api/businessCard/:cardId
method GET
headers {
    id : cardId
}
