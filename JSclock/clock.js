const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const secondHand = document.querySelector('.second-hand')
// debugger

function setDate(){
const now = new Date()

const seconds = now.getSeconds() //JS function
// how can we turn this to a degree?
const secondsDegrees = ((seconds / 60) * 360) + 90 
secondHand.style.transform = `rotate(${secondsDegrees}deg)`

const minutes = now.getMinutes()
const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)* 6) + 90
minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

const hours = now.getHours()
const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90
minuteHand.style.transform = `rotate(${hourDegrees}deg)`
}
debugger
setInterval(setDate, 1000);

setDate();


