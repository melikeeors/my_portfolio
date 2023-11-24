function send() {
    console.log("deneme")
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "orsmelike2003@gmail.com",
        Password : "F4DCBA918D93FB9EADCF6AA471B4858F371B",
        To : 'orsmelike2003@gmail.com',
        From : "orsmelike2003@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}