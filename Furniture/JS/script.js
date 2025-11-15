"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".bars");
    const closeBtn = document.getElementById("sidebarCloseBtn");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");


    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });

  
    closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        sidebar.classList.remove("open");
    });

   
    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            sidebar.classList.remove("open");
        });
    });
});
 // Loader
window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");


  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500); 
    }
  }, 2500); 
});


 
  // Alternate autoplay direction
  $(document).ready(function() {

  // header sticky
   const h=document.querySelector("#header");
  window.addEventListener("scroll",function(){
    if(this.window.scrollY>70){
         h.classList.add("sticky");
    }else{
          h.classList.remove("sticky");
    }
  });
});
$(document).ready(function(){
  $('#testimonial-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    smartSpeed: 800,
    responsive: {
      0: { items: 1, stagePadding: 30 },
      768: { items: 1, stagePadding: 50 },
      1200: { items: 2, stagePadding: 100 }
    }
  });
});


function passwordShow() {
        const password = document.getElementById("password");
        const eyeIcon = document.querySelector(".show-password");
        if (password.type === "password") {
            password.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            password.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
        }

//to generate captcha

        let text=""
        function generateCaptcha(){
            const captchaText="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
             text="";
            for(let i=0;i<6;i++){
                text+=captchaText.charAt(Math.floor((Math.random()*captchaText.length)));   
            }
           document.querySelector("#captcha").innerHTML=text;

        }
        generateCaptcha();
        
        const btn=document.querySelector("#loginForm");
        btn.addEventListener("submit",function(e){
            e.preventDefault();

             const inputCaptcha=document.querySelector("#matchCaptcha").value;
           if(inputCaptcha!==text){
            alert("Captcha does not match");
             generateCaptcha();
             return;
           }

             const cnfsubmit=confirm("Are you sure to submit");
                if(cnfsubmit){
                    window.location.href="welcome.html";
                }
                else{
                    alert("Form not submitted");
                    
                }

                    })

let captcha = "";

    function generateCaptcha(){
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
        captcha = "";
        for(let i=0; i<6; i++){
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        document.getElementById("captcha-text").textContent = captcha;
    }

    function handleRegister(event){
        event.preventDefault();
        const enteredCaptcha = document.getElementById("captcha-input").value;
        if(enteredCaptcha === captcha){
            alert("🎉 Registration Successful!");
            document.getElementById("registerForm").reset();
            generateCaptcha();
        } else {
            alert("❌ Incorrect Captcha, try again!");
            generateCaptcha();
        }
    }

    function togglePassword(){
        const pass = document.getElementById("password");
        const icon = document.querySelector(".password-box i");
        if(pass.type === "password"){
            pass.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            pass.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    }

    window.onload = generateCaptcha;


    