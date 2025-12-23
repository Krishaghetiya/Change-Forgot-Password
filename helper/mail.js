let nodemailer = require("nodemailer");

const mailer = () =>{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"krishaghetiya2006@gmail.com",
            pass:"ojfswhzhzuazfwcy"
        },
    })

    return transporter;
}

module.exports = {mailer};