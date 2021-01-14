function sendMail(contactForm){
    emailjs.send('service_kabmyp3', 'template_ww5y46u', 
    {"from_name": contactForm.name.value, 
    "from_email": contactForm.emailaddress.value,
    "project_request": contactForm.projectsummary.value})
    .then(function(response){
        console.log("SUCCESS", response)
    },
    function(error){
        console.log("Error", error)
    });
    return false;
}


