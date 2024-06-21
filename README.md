# Docs

Use yarn dev to run this project


This application is supposed to be ran in a locally clone the repo and follow these instructions<br/> 


Then complement in a .env file the following enviornament varianbles<br/> 

MONGO_URI=The URI of your mongodb database <br/> 
you can find more about how to do that here -->https://www.mongodb.com/docs/manual/reference/connection-string/<br/> 
TOKEN_SECRET=Token for encyption<br/> 
DOMAIN=The Url which your APP will run --> I recomend localhost:3000<br/> 
EMAIL_PORT = Email Port that you want to use --> if you want to knwo what they are I am using SMTP (https://www.siteground.com/ tutorials/email/protocols-pop3-smtp-imap/#:~:text=Email%20ports%20are%20communication%20endpoints,address%20and%20a%20port%20number.)<br/> 
USER_EMAIL = User Email that you are going to use to send the 2 step verification email<br/> 
PASS_EMAIL = Password of your email that you are going to use to send the emails<br/> 


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
 :white_check_mark: Email Verification Implemented / Two Step Verification <br/> 
 :white_check_mark:  Add IP addres to new registered profiles (is in IPV4 so kinda loses the purpouse of it) <br />
 :white_check_mark:  Pagination on profile search <br /> 
 :white_check_mark:  Configuration Page where the user can change their usernmae/password/email <br /> 
 :white_check_mark: Like counter changes in realtime in the db and in the UI <br />
:white_check_mark: Delete Account option <br /> 
 :white_check_mark: Logout Account option <br /> 
    <br /> 
 :x: Implement better UI elements <br /> 
 :x: Add image by fetching API of social media profiles (This feature requires funding)<br /> 
  :x: Add authentication throgh thir party platforms such as Google or GitHub (This feature requires funding)<br /> 
 :x: Security measures can be improved <br /> 
 :x: Verify Whatsaap/Snapchat Profiles <br />

