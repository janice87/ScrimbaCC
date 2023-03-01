// Review Challenge 4: Taco Tray
// Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
    /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */    
    //return ['Empty Tray'] // replace this empty tray array
    const tray = new Array(Math.floor(Math.random() * 10) + 1)
    const tacoTray = tray.fill('🌮')
    return tacoTray
}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()