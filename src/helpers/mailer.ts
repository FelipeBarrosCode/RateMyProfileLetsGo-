
const nodemailer = require('nodemailer')
require('dotenv').config()

interface Mailer{
    email:string,
    emailType:string,
    userID:string,
    randomCode:number


}

export async function mailUser(contentOnEmail:Mailer){
    
    
    const emailContent = '<h1>Rate My Profile</h1> \n\n <h1>Verify Your Email With Us</h1> \n\n <h1>Your code is ' + contentOnEmail.randomCode +'</h1>\n\n <a href="http://localhost:3000/verifyemail">Click Here to Verify</a>'
    
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASS_EMAIL
        }
    })

    const info = {
        from: 'Rate_My_Profile <' + process.env.USER_EMAIL+  '>',
        to: contentOnEmail.email,
        subject: "Verification of " + contentOnEmail.email,
        html: emailContent,
       
    }

    transporter.sendMail(info, function (error: string, info: { response: string }){
        if (error) {
            console.log("ERROR kkkk " + error);
        } else {
            console.log('Email sent: ' + info.response);
            console.log("REQUEST SNAP ");
        }

    })
    


}