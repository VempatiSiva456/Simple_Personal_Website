function updating() {
    const n = document.getElementById("updating").value
    items.push(n)
    localStorage.setItem("nu", items.join("$$$"))

    document.getElementById("nu").innerHTML += `<li>${n}</li>`
}

const temp = localStorage.getItem("nu") || ""
let items = temp.split("$$$")
for (let i of items)
    document.getElementById("nu").innerHTML += `<li>${i}</li>`

function chbg(temp) {
    document.getElementsByTagName("body")[0].style.backgroundColor = temp.innerText
}

function chfsize(temp) {
    document.getElementsByTagName("body")[0].style.fontSize = temp.innerText
}