domBuilder.appendInputForm();
// domBuilder.finalColorFetch(data.getColors);
// let legoColorMenu = document.querySelector("#lego__color");
// legoColorMenu.addEventListener("click", domBuilder.finalColorFetch)

//calling the finalColorFetch from the domBuilder.js file to execute on page load. 
domBuilder.finalColorFetch();
let legoButton = document.querySelector(".lego__save");
legoButton.addEventListener("click", eventListeners.handleFormSubmission);