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

 :white_check_mark: Search Bar For Profiles
 :white_check_mark: API endpoints for adding and updating profiles
 :white_check_mark: Like and Dislike
 :white_check_mark: Tracker of people who vote on specific profile
 :white_check_mark: Authentication
 :white_check_mark: Protected Routes
 :white_check_mark: Make sure that only valid profiles can be inserted in the db
 :white_check_mark: 
 :x: Implement better UI elements
 :x: Add image by fetching API of social media profiles (I was more focused on backend for this project)
 :x: Security measures can be improved
 :x: Add IP addres to new registered profiles
 :x: Two Step Verification
 :x: Pagination on profile search
 :x: 
