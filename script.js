// Add JavaScript code for your web site here and call it from index.html.

/*** Dark Mode ***
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleLightMode = () => {
    document.body.classList.toggle("light-mode");
    // // using the id of the light mode button //
    // Write your code here
    // This section will run whenever the button is clicked
}
// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleLightMode);
/*** Form Handling ***/

// Form//
// Step 1: Add your query for the submit RSVP button here
let submitButton = document.getElementById("rsvp-button")
let count = 0;
const addParticipant = (person) => {
    // Step 2: Write your code to manipulate the DOM here
    const rsvpCount = document.getElementById("rsvp-count")
    if (rsvpCount) {
      rsvpCount.remove();
    }
    count = count + 1;
    let newParticipant = document.createElement("p");
    newParticipant.textContent = `🎟️ ${person.firstname} ${person.lastname} - ${person.email}`;
    let newCount = document.createElement("p");
    newCount.id = "rsvp-count";
    newCount.textContent = "⭐ " + count + " people have RSVP'd to this event!";
    let participantContainer = document.getElementById("rsvp-participants");
    participantContainer.appendChild(newParticipant);
    participantContainer.appendChild(newCount);
    toggleModal(person);

  }
/*** Form Validation ***
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;
  var rsvpInputs = document.getElementById("rsvp-form").elements;
  
  //Person thing//
  let person = {
    firstname : document.getElementById("first-name").value, 
    lastname : document.getElementById("last-name").value, 
    email : document.getElementById("email").value
  };

  // Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    } else {
      rsvpInputs[i].classList.remove("error");
    }
  }
  // Stretch feature///
  let emailInput = document.getElementById("email");
  if (!emailInput.value.includes('@')) {
    containsErrors = true;
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }

  // If no errors, add participant and clear fields
  if (containsErrors == false) {
    addParticipant(person);
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
}
submitButton.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");
    let modalContent = document.getElementById("modal-text") // TODO
    
    // TODO: Update modal display to flex
    modal.style.display = "flex";
    

    // TODO: Update modal text to personalized message
    modalContent.textContent = `Thanks for RSVPing!, ${person.firstname}! We cant wait to see you at the Logic Layer!`;

    // Animation 
    let intervalId = setInterval(animateImage, 500);

    // Set modal timeout to 5 seconds
    setTimeout(() => {
      modal.style.display = "none";
    } , 5000) 
}
// Modal close button //
let closeModalButton = document.getElementById("#close-modal-btn");
const closeModal = () => {
  let modal = document.getElementById("success-modal");
  modal.style.display = "none";
}
closeModalButton.addEventListener("click", closeModal);


// TODO: animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.querySelector(".modal-container img");

const animateImage = () => {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}





// Extra Javascript with help from MDN Webdocs, AI, and CSS Tricks//

/* Scroll Fade animtion ****
This part is for the event details. I wanted something interesting for animatons besides the parallax and modal
*****/
const eventBlocks = document.querySelectorAll(".event-details");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15});

eventBlocks.forEach(block => observer.observe(block));

document.querySelectorAll('.event-details h3').forEach(heading => {
  heading.style.cursor = 'pointer';
  heading.addEventListener('click', () => {
    const desc = heading.nextElementSibling;
    desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
  });
});

/*** hero parallax ***/
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroImg = document.getElementById('header-img');
  if (heroImg) {
    heroImg.style.transform = `translateY(${scrollY * 0.4}px)`;
  }
});