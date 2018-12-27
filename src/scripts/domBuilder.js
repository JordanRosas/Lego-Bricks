//object of methods. domBuilder runs before main.js because the method must be defined first before calling it in main.js
const domBuilder = {
    appendInputForm(){
        let inputForm = `<article>
        <fieldset>
            <label for="lego__creator">Creator:</label>
            <input id="lego__creator" name="lego__creator" type="text" autofocus />
        </fieldset>
        <fieldset>
            <label for="lego__name">Name:</label>
            <input id="lego__name" name="lego__name" type="text" autofocus />
        </fieldset>
        <fieldset>
            <label for="lego__shape">Shape:</label>
            <input id="lego__shape" name="lego__shape" type="text" autofocus />
        </fieldset>
        <fieldset>
            <label for="lego__color">Color:</label>
            <select id="lego__color"></select>
        </fieldset>
            <button class="btn lego__save">Save Lego Creation</button>
        </article>`
    let displayContainer = document.querySelector("#display-container");
    displayContainer.innerHTML = inputForm;
    },

    finalColorFetch(color){
        //calling the returned fetch
        data.getColors()
        //taking the whole response from the JSON
        .then(allResponse =>{
            //setting the HTML of the 'dropdown' to an empty string
            let HTMLcollection = ""
            //taking the parsed response list and for each - now object
            allResponse.forEach(color =>{
                //populating the drop down with options setting the value and color from the "API"
                HTMLcollection += `<option value = ${color.id}>${color.name}</option>`
                console.log(HTMLcollection)
                console.log(color)
            })
            //targeting the select/"drop down" element
            let colorMenu = document.querySelector("#lego__color");
            /*because HTMLcollection is a string of HTML
            we use inner HTMl to update the drop down with the new option tags being
            created by the for Each loop*/
            
            colorMenu.innerHTML = HTMLcollection
        })
    }
}

