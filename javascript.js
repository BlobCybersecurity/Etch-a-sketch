const main = document.querySelector(".main")
const selectionButton = document.createElement("button")
const container = document.querySelector(".container")
const div = document.createElement("div")


main.insertBefore(selectionButton, container)
selectionButton.textContent = "Choose Size"
div.style.backgroundColor = 'black'
div.style.height = "90px"
div.style.flexGrow = "1"
div.style.flexShrink = "0"
div.style.flexBasis = "6%"

function beginningLoop() {
    for (let i = 0; i < 16 * 16; i++) {
        let store = "";
        store = div.cloneNode()
        container.appendChild(store)
    }
}

beginningLoop()

function generateForAmount(x, y, referenceNode, intoWhichNode) {
    referenceNode.style.flexBasis = `${100 / x}%`
    for (let i = 0; i < x * y; i++) {
        let storege = ""
        storege = referenceNode.cloneNode()
        intoWhichNode.appendChild(storege)
    }
}





selectionButton.addEventListener("click", () => {
    let list = container.childNodes
    list.forEach((e) => {container.removeChild(e)})
    let eek = prompt("X")
    let deek = prompt("Y")
    generateForAmount(eek, deek, div, container)


})


const list = container.childNodes
list.forEach((element) => {

    element.addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = "red"
    })
}) 



