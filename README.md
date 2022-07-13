# Propel-Theory-Assignment


## Virtual Business Card


### Assignment that is based on restfull API using Nodejs, Express.


### Backend TeckStacks 
- NodeJS
- Express
- MongoDB
- AWS
- JavaScript


### Frontend TechStacks
- HTML
- CSS


#### Packages
- express
- body-parser
- mongoose
- cors
- dotenv
- nodemon
- aws-sdk
- multer


#### Goals
- Quick and easy to create a Virtual Card.
- Anyone can crate and share his Business card with the QR Code or Link.
- It takes Less Time and Space Complexity.


#### Features
- Concise action buttons
- Quick and easy to share with anyone
- Social media links and Website URL
- Company Logo
- Elegant design and functionality
- Click to contact via Phone, WhatsApp, Email, etc
- Direct vCard download (lets user download your contact information to their phone)
- Share your card with anyone using QR-code or link
- Showcase Images, Artworks, Videos, Music, Brochures, Products and services, etc.
- Embed any kind of HTML content (videos, music, maps, contact forms, you name it.)


#### Business Card API's
- 1. Create a Virtual Business Card
- 2. Get the Virtual Business Card


#### EndPoint and Feature 

- 1) /api/businessCard/new

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

- 2) /api/businessCard/:cardId
    
    method GET
    headers {
        id : cardId
    }
