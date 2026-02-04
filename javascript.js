

const main = document.querySelector(".main")
const selectionButton = document.createElement("button")
const container = document.querySelector(".container")
const div = document.createElement("div")

main.insertBefore(selectionButton, container)

div.style.backgroundColor = 'black'
div.style.height = "90px"
div.style.flexShrink = "0"
div.style.width = `90px`

selectionButton.textContent = "Choose Size"
selectionButton.style.alignSelf = "center"



    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
             let store = "";

            store = div.cloneNode()
            store.style.width = `${(960 / 16 ) - 3}px`
            store.style.height = `${(960 / 16 ) - 3}px`
            container.appendChild(store)
        }
       
    }





    selectionButton.addEventListener("click", () => {
        console.log("Clicked")
        container.textContent = ''
        let GridSize = prompt("Grid Size: ")

        for (let i = 0; i < GridSize; i++) {
            for (let j = 0; j < GridSize; j++) {
                let storage = ""
                storage = div.cloneNode()
                storage.style.width = `${(960 / GridSize ) - 3}px`
                storage.style.height = `${(960 / GridSize ) - 3}px`
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
            // let each width = Divide 960 by GridX
            // 
//      }

// }

