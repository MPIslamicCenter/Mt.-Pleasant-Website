
// Functions for popup opening and closing
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}


// Code for client side "backend". All the code for dynamically generated announcements. Working with announcement.js

fetch('./mainAnnouncement.json')
    .then((response) => response.json())
    .then((json) => {

      // This branch checks if an annoucement exists in mainAnnouncement.json file, if so then proceeeds to generate it
      if(json.title && json.message) {

        // Generate annoucement header html
        let annoucementHeaderHTML = `
          <div id="main-announcement" class="annoucements-div" onclick="openPopup()">
            ${json.title}
            <div class="annoucements-toggle">view details</div>
          </div>
        `;


        // Initialize annoucementDetailsHTML to hold all html for annoucnement details
        let annoucementDetailsHTML;

        // If statement checking to see if link exists, dependent on that annoucnementDetailsHTML will have 2 different instantiations
        if(json.externalLinkIfAnyOP) {
          annoucementDetailsHTML = `
          <div class="announcement-popup-overlay" id="popup">
            <div class="announcement-popup">
              <div class="popup-title">${json.title}</div>
              <div class="popup-date-OP">${json.eventDateOP}</div>
              <div class="popup-time-OP">${json.eventTimeOP}</div>
              <div class="popup-message">${json.message}</div>
              <a class="popup-external-link-OP" href="${json.externalLinkIfAnyOP}">Link Here</a>
              
              <div class="popup-close" onclick="closePopup()">Close</div>
            </div>
          </div>
        `;
        } else {
          annoucementDetailsHTML = `
          <div class="announcement-popup-overlay" id="popup">
            <div class="announcement-popup">
              <div class="popup-title">${json.title}</div>
              <div class="popup-date-OP">${json.eventDateOP}</div>
              <div class="popup-time-OP">${json.eventTimeOP}</div>
              <div class="popup-message">${json.message}</div>
              
              <div class="popup-close" onclick="closePopup()">Close</div>
            </div>
          </div>
        `;
        }

        // Set the generated html to their respective empty div on home.html
        document.getElementById("generative-announcement-header").innerHTML = annoucementHeaderHTML;
        document.getElementById("generative-popup").innerHTML = annoucementDetailsHTML;

        console.log("Backend Announcements Loaded Succesfully")
      } else {
        console.log("No Annoucements")
      }
    });



