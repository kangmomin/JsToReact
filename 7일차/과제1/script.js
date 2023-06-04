const data = {
    HTML: "HTML is Hyper Text Markup Language",
    CSS: "CSS is Cascading Style Sheet",
    JS: "JS is JavaScript"
}

function setHref() {
    // const links = [
    //     "https://ko.wikipedia.org/wiki/HTML",
    //     "https://ko.wikipedia.org/wiki/CSS",
    //     "https://ko.wikipedia.org/wiki/javascript"]

    let linkClass = document.querySelectorAll(".link")

    // for (let i = 0; i < linkClass.length; i++) {
    //     linkClass[i].href = links[i]
    // }
    for (const key in data) {

        linkClass[i].onclick = () => {
            setContent(key)
        }
        i++
    }
}

let i = 0
function setContent(key) {
    title.innerHTML = key
    content.innerHTML = data[key]
}
setHref()

function changeBgColor() {
    let body = document.querySelector('body').style
    if (body.color == 'black') {
        body.backgroundColor = 'black'
        body.color = 'white'
        body.color = 'white'
        document.querySelector('input').value = 'night'
    } else {
        body.backgroundColor = 'white'
        body.color = 'black'
        document.querySelector('input').value = 'day'
    }
}

const title = document.querySelector("#title")
const content = document.querySelector("#content")

