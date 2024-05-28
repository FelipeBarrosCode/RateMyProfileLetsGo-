# Docs

Use yarn dev to run this project


This application is supposed to be ran in a locally clone the repo and follow these instructions

Then complement in a .env file the following enviornament varianbles

MONGO_URI=The URI of your mongodb database 
you can find more about how to do that here -->https://www.mongodb.com/docs/manual/reference/connection-string/
TOKEN_SECRET=Token for encyption
DOMAIN=The Url which your APP will run --> I recomend localhost:3000


# Somethings to be aware

1. The System verifies if you are inserting a valid social media user when given a username and url
2. This is a MVP I am still working on extra features but for now this will do
3. I am accepting pull requests so if you want to contribute to this project you are more than welcome

# Purpouse of this project

My plan with this project is to promote a spcae where people can share information about profiles on social media I believe that a platform where people can gather info about specific profiles can contribute to avoid scams and bots.

# Implemented features list

 :white_check_mark: Search Bar For Profiles<br /> 
 :white_check_mark: API endpoints for adding and updating profiles <br/> 
 :white_check_mark: Like and Dislike <br /> 
 :white_check_mark: Tracker of people who vote on specific profile<br /> 
 :white_check_mark: Authentication<br /> 
 :white_check_mark: Protected Routes<br /> 
 :white_check_mark: Make sure that only valid profiles can be inserted in the db<br /> 
    <br /> 
 :x: Implement better UI elements <br /> 
 :x: Add image by fetching API of social media profiles (I was more focused on backend for this project)<br /> 
 :x: Security measures can be improved <br /> 
 :x: Add IP addres to new registered profiles <br /> 
 :x: Two Step Verification <br /> 
 :x: Pagination on profile search <br /> 

