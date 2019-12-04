//var nodemailer = require('nodemailer');

function sendData(){
   var name =  document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;

    console.log('Body'+ body);
   
    var mailOptions = {
        from: email,
        to: 'myfriend@yahoo.com',
        subject: subject,
        text: body
      };
      
      

}


// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });


// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });