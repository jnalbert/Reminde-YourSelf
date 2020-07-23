let mailOptions = {
    from: "reminder.buddy879@gmail.com",
    to: "jnalbert879@gmail.com",
    subject: "Test",
    test: "Hi there this is a test"
}
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        throw err;
    } else {
        console.log("this email was sent sucsesfully");
        console.log(info);
    }
})

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "reminder.buddy879@gmail.com",
        pass: "PASSWORD879"
    }
})





export default [transporter];