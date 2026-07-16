// Nassau Island Taxi & Tours
// Website Functions


// WhatsApp Booking Form

document.getElementById("bookingForm").addEventListener("submit", function(event){

event.preventDefault();


let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;

let pickup = document.getElementById("pickup").value;
let destination = document.getElementById("destination").value;

let date = document.getElementById("date").value;
let time = document.getElementById("time").value;

let flight = document.getElementById("flight").value;
let cruise = document.getElementById("cruise").value;

let passengers = document.getElementById("passengers").value;

let service = document.getElementById("service").value;

let notes = document.getElementById("notes").value;



let message =

`New Booking Request - Nassau Island Taxi & Tours

Name: ${name}

Phone: ${phone}

Email: ${email}

Pickup Location: ${pickup}

Destination: ${destination}

Date: ${date}

Time: ${time}

Flight Number: ${flight}

Cruise Ship: ${cruise}

Passengers: ${passengers}

Service Needed: ${service}

Additional Notes:
${notes}`;



// Nassau Island Taxi & Tours WhatsApp Number

let whatsappNumber = "12428290786";


let whatsappURL =

"https://wa.me/"
+ whatsappNumber
+ "?text="
+ encodeURIComponent(message);



window.open(whatsappURL, "_blank");


});





// Smooth scrolling navigation

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

let target = document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

}

});

});





// Fade-in animation

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

});



sections.forEach(section => {

section.style.opacity = "0";

section.style.transform = "translateY(40px)";

section.style.transition = "all 0.8s ease";

observer.observe(section);

});
