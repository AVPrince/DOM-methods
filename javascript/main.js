console.log('Hello world');
let body = document.querySelector('body')

let buttonElement = document.createElement('button')
buttonElement.append('button')
body.append(buttonElement)

let mainElement = document.createElement('main')
body.append(mainElement)

let imgElement = document.createElement('img')
imgElement.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png'
imgElement.className="image"
mainElement.append(imgElement)

let anchorElement = document.createElement('a')
anchorElement.href = 'https://www.kenzie.academy/'
anchorElement.append('Link to Kenzie')
anchorElement.className= "link"
mainElement.append(anchorElement)

document.addEventListener("click",function(){
    let buttonElement = document.querySelector("main")
    buttonElement.remove(mainElement)
})