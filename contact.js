let formDOM = document.querySelector("#form-container");
formDOM.addEventListener("submit", formSubmit);

var emailInput = document.querySelector("#floatingInput")
  var subjectInput = document.querySelector("#floatingPassword")
  var commentsInput = document.querySelector("#floatingTextarea2")

function formSubmit(event) {
  console.log("denemeee")
  console.log(emailInput.value)
  console.log(subjectInput.value)
  console.log(commentsInput.value)
}

function send() {
  console.log("deneme")
  Email.send({
    Host: "smtp.elasticemail.com",
    Username : "orsmelike2003@gmail.com",
    Password : "F4DCBA918D93FB9EADCF6AA471B4858F371B",
    From: emailInput.value,
    To: 'orsmelike2003@gmail.com',
    
    Subject: subjectInput.value,
    Body: commentsInput.value
  }).then(
    message => {
      alert("mail sent successfully.");
      console.log(message);
    }
  );
}