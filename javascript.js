const main = document.querySelector(".main")
const selectionButton = document.createElement("button")
const container = document.querySelector(".container")
const div = document.createElement("div")
const topp = document.querySelector(".top")

  function randomRGB() {
        return Math.floor(Math.random() * 256)
    }

    function randomCOl() {
        return `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
    }

topp.appendChild(selectionButton)

div.style.backgroundColor = "White"
div.style.outline = "solid black"
div.style.height = "90px"
div.style.flexShrink = "0"
div.style.width = `90px`
container.style.alignSelf = "center"
container.style.display = "flex"

selectionButton.textContent = "Choose Size"







    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
             let store = "";

            store = div.cloneNode()
            store.style.width = `${(800 / 16 ) - 3}px`
            store.style.height = `${(800 / 16 ) - 3}px`
            container.appendChild(store)
        }
       
    }


 


    selectionButton.addEventListener("click", () => {
        console.log("Clicked")
        container.textContent = ''
        let GridSize = prompt("Grid Size: ")
        while (GridSize > 100) {
            GridSize = prompt("Grid Size: ")
        }
            
            
        

        
        
          
           
        

            

            
            
            
        
        
        
             for (let i = 0; i < GridSize; i++) {
                    for (let j = 0; j < GridSize; j++) {
                        let storage = ""
                        storage = div.cloneNode()
                        storage.style.width = `${(800 / GridSize ) - 3}px`
                        storage.style.height = `${(800 / GridSize ) - 3}px`
                        container.appendChild(storage)
                    }
                }
    
                    const list = container.childNodes
                    list.forEach((element) => {

                        element.addEventListener("mouseenter", function (e) {
                            let randomCol = randomCOl()
                            e.target.style.backgroundColor = `${randomCol}`
                        })
                    }) 
        


                 

                
            
        

                
            
        
       
    })







const list = container.childNodes
    list.forEach((element) => {

    element.addEventListener("mouseenter", function (e) {
        let randomCl = randomCOl()
        e.target.style.backgroundColor = randomCl
    })

})










