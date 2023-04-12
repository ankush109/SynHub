const nodemailer = require('nodemailer');
module.exports = async function sendEmail(email, subject, text) {
try{
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        service: process.env.SERVICE,
        port: process.env.PORT,
        secure:process.env.SECURE,
        auth: {
            user: process.env.USERNAME,
            pass: process.env.PASSWORD

        }
    })
    await transporter.sendMail({
        from: process.env.USER,
        to: email,
        subject: subject,
        text: text
    })
    console.log("Email sent to: " + email);
}
catch(err){
    console.log(err)
        console.log("Email not sent to: " + email);

}
}