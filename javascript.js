const main = document.querySelector(".main")
const selectionButton = document.createElement("button")
const container = document.querySelector(".container")
const div = document.createElement("div")

main.appendChild(selectionButton)
selectionButton.textContent = "Choose Size"
div.style.backgroundColor = 'black'
div.style.width = "200px"
div.style.height = "100px"
div.style.width = "6%"

selectionButton.addEventListener("click", () => {
    let eek = prompt("Grid Size?")
})



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




