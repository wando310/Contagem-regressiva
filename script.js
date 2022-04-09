const load = document.querySelector('.load-int')
const h2 = document.querySelector('.load-ext h2')

let count = 0

setInterval(setRound,40)

function setRound(){
    load.style.width = `${count}.px`
    h2.innerHTML = `Contagem regressiva ${count}%`
    if(count === 500) count = 0
    count++
}