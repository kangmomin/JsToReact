function setHref() {
    const links = [
        "https://ko.wikipedia.org/wiki/HTML",
        "https://ko.wikipedia.org/wiki/CSS",
        "https://ko.wikipedia.org/wiki/javascript"]

    let linkClass = document.querySelectorAll(".link")

    for (let i = 0; i < linkClass.length; i++) {
        linkClass[i].href = links[i]
    }
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