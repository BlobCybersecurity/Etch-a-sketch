const { cloneElement } = require("react")

const main = document.querySelector(".main")
const selectionButton = document.createElement("button")
const container = document.querySelector(".container")
const div = document.createElement("div")

main.insertBefore(selectionButton, container)

div.style.backgroundColor = 'black'
div.style.height = "90px"
div.style.flexGrow = "1"
div.style.flexShrink = "0"

selectionButton.textContent = "Choose Size"
selectionButton.style.alignSelf = "center"



    for (let i = 0; i < 16 * 16; i++) {
        let store = "";
        store = div.cloneNode()
        container.appendChild(store)
    }





    selectionButton.addEventListener("click", () => {
        console.log("Clicked")
        container.textContent = ''
        let GridSize = prompt("Grid Size: ")

        for (let i = 0; i < GridSize; i++) {
            for (let j = 0; j < GridSize; j++) {
                let storage = ""
                storage = cloneElement(div)
                container.appendChild(storage)
            }
        }
    
        const list = container.childNodes
        list.forEach((element) => {

            element.addEventListener("mouseenter", function (e) {
                e.target.style.backgroundColor = "red"
            })
        }) 

    })







const list = container.childNodes
    list.forEach((element) => {

    element.addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = "red"
    })

})









// Grid Breakdown


// iteration 0: 1, 2, 3, x...

// iteration 1: 1, 2, 3, x...

// iteration x...: 1, 2, 3, x...

// for (let i = 0; i < GridX; i++) {
   
    // for (let j = 0; j < GridX; j++) {
            // Clone Div
//      }

// }