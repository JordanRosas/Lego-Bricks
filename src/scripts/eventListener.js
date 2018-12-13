const eventListeners = {
  handleFormSubmission(){
   //get input values from the form
    const creator = document.querySelector("#lego__creator").value;
    const name = document.querySelector("#lego__name").value;
    const shape = document.querySelector("#lego__shape").value;
    const color = document.querySelector("#lego__color").value;

    //create an object to represent a lego creation
    //we want to pass this object into a function
    const legoObject = {
      creator: creator,
      name: name,
      shape: shape,
      color: color
    }

    data.postLego(legoObject);
  }
};