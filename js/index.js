// Your code goes here


//1 - 2: mouseover and mouseleave for nav links
const links = document.querySelectorAll('a')

links.forEach( item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#17A2B8'
    })
    item.addEventListener('mouseleave', () => {
        item.style.color = 'black'
    })
})


//3: click page to toggle bg color

const page = document.querySelector('body')

const h2 = document.querySelector('h2')

h2.addEventListener('click', pageClickCB)

//callback function
let x = true
function pageClickCB() {
    if (x === true){
        x = false 
        return page.style.backgroundColor = 'green'
    } else if (x === false){
        x = true
        return page.style.backgroundColor = 'white'  
    }
}

//4: wheel h1 text size change
const logo = document.querySelector('.logo-heading')

logo.addEventListener('wheel', () => {
    logo.style.fontSize = '50px'    
})

//5 double click to hide nav bar

const nav = document.querySelector('.main-navigation')

nav.addEventListener('dblclick', navHideCB)

let a = true
function navHideCB(event) {
    if (a === true){
        a = false
        return event.target.style.visibility = 'hidden'
    } else if (a === false){
        a = true
        return event.target.style.visibility = 'visible'
    }
}

//6: load completes, text color changes
window.addEventListener('load', () => {
    page.style.color = 'crimson'
})

//7: focus add border to links

const images = document.querySelectorAll('img')

links.forEach( item => {
    item.addEventListener('focus', () => {
        item.style.border = '2px solid crimson'
    })
    item.addEventListener('blur', () => {
        item.style.border = 'none'
    })
})






