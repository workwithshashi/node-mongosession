var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'your gmailemail',
        pass:'gmail password'
    }
});

var mailOptions = {
    from:'noreply@gmail.com',
    to:'navin007@gmail.com',
    subject: 'Hi you won lottery',
    text:'$100000000'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        ///
    }else{
        //
    }
});