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

// Step 1: Add your query for the submit RSVP button here
let submitButton = document.getElementById("rsvp-button")
let count = 3;
const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault();
    let firstname = document.getElementById("first-name").value;
    let lasttname = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let guestCounter = document.getElementById("rsvp-count").remove();
    count = count + 1;

    let newParticipant = document.createElement("p");
    newParticipant.textContent = firstname + " - " + email;
    
    let newCount = document.createElement("p");
    newCount.id = "rsvp-count";
    newCount.textContent = "⭐" + count + "people have RSVP'd to this event!";
    

    let participantContainer = document.getElementById("rsvp-participants");
    participantContainer.appendChild(newParticipant);
    participantContainer.appendChild(newCount);
}
// Step 3: Add a click event listener to the submit RSVP button here
submitButton.addEventListener("click", addParticipant);

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
const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs,length; i++) {

  }

  // TODO: Inside loop, validate the value of each input
  if (rsvpInputs[i].value.length < 2 ) {
    containsErrors = true;
    rsvpInputs[i].classList.add("error");
  } else {
    rsvpInputs[i].classList.remove("error");
  }

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors == false) {
    addParticipant();
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].vallue = "";
    }
  }

}
// Step 3: Replace the form button's event listener with a new one that calls validateForm()
submitButton.addEventListener("click", validateForm);


/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/

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

/*** Parallax ***/
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroImg = document.getElementById('header-img');
  heroImg.style.transform = `translateY(${scrollY * 0.4}px)`;
});