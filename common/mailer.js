var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
   service: "Yahoo",  // sets automatically host, port and connection security settings
   auth: {
       user: "bhavik_panchal17@yahoo.com",
       pass: "Bhavik@123"
   }
});

function mail(messageBody) {
    let messageBodyJson = JSON.stringify(messageBody)
    smtpTransport.sendMail({  //email options
        from: "bhavik_panchal17@yahoo.com", // sender address.  Must be the same as authenticated user if using Gmail.
        to: "panchal.bhavik0919@gmail.com", // receiver
        subject: "Emailing with nodemailer", // subject
        text: messageBodyJson // body
     }, function(error, response){  //callback
        if(error){
           console.log("error",error);
        }else{
            console.log(response);
        }
        
     //    smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
     });
}

module.exports = {
    mail:mail
}
