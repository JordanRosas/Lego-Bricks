const data = {
  //this method has been defined to take one argument
  postLego(legoToSave){
    fetch("http://localhost:8088/legos", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
    })
  },
  getColors(){
    fetch("http://localhost:8088/colors")
      .then(response => response.json())
      .then(allResponses =>{
        allResponses.forEach(color =>{
          console.log(color.name)
        })
      })
  }
  
}