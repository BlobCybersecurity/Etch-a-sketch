const container = document.querySelector(".container")
const div = document.createElement("div")
div.style.backgroundColor = 'black'
div.style.width = "200px"
div.style.height = "100px"
div.style.width = "6%"



console.log(div)
// Create 1 tile
// Do this 16 x 16 times

for (let i = 0; i < 16 * 16; i++) {

    let store = "";
    store = div.cloneNode()
    
    container.appendChild(store)
}

const list = container.childNodes
list.forEach((element) => {

    element.addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = "red"
    })
}) 




