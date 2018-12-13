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

  //same as post just different method and can pass in the ID of an entry that you want to delete
  // deleteLego (legoId) {
  //   fetch(`http://localhost:8088/legos/${legoId}`, { // Replace "url" with your API's URL
  //   method: "DELETE",
  //   headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  // }
}
