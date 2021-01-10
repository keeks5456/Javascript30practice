const canvas = document.getElementById("draw")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = "#FF0000"
ctx.lineJoin = "round"
ctx.lineCap = "round"
console.log(canvas)

let isDrawing = false 
// we need a starting and ending x,y points
let lastX = 0
let lastY = 0

function draw(e){
    console.log(e)
}

canvas.addEventListener('mousemove', draw)