const canvas = document.getElementById("draw")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = "#FF0000"
ctx.lineJoin = "round"
ctx.lineCap = "round"
ctx.lineWidth = 10
console.log(canvas)

let isDrawing = false 
// we need a starting and ending x,y points
let lastX = 0
let lastY = 0

let hue = 0
let direction = true

ctx.globalCompositeOperation = 'xor'
//The CanvasRenderingContext2D.globalCompositeOperation property of the Canvas 2D API sets the type of compositing operation to apply when drawing new shapes.

function draw(e){
    if(!isDrawing)return //stops function from running when not moused down\

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath()
    //start from 
    ctx.moveTo(lastX, lastY)
    //go to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    // [lastX, lastY] = [e.offsetX, e.offsetY] //destructuring array
    lastX = e.offsetX
    lastY = e.offsetY
    hue ++
    if(hue >= 360){
        hue = 0
    }

    if(ctx.lineWidth >= 20 || ctx.lineWidth <= 1){
        direction = !direction
    }
    //incrementing from 0 to 100, and backwards

    if(direction){
        ctx.lineWidth ++; //increment the line width once
    } else {
        ctx.lineWidth -- //increment the line width once
    }
    //refractor this
}


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    // [lastX, lastY] = [e.offsetX, e.offsetY] //refractor once this is all done
    lastX = e.offsetX
    lastY = e.offsetY
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)