function sendMail() {
    var params ={
        name: document.getElementById("input-name").value ,
        email: document.getElementById("input-email").value ,
        message: document.getElementById("input-message").value
    }

    const serviceID = "service_9dcjn34";
    const templateID = "template_lh2sx56";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        document.getElementById("input-name").value = "";
        document.getElementById("input-email").value = "";
        document.getElementById("input-message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
}