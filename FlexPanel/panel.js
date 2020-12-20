const panels = document.querySelectorAll('.panel')

function toggleOPen(){
    // console.log('hello')
    this.classList.toggle('open')
}

function toggleActive(e){
    console.log(e.propertyName)
    if(e.propertyName.includes('flex') ){
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOPen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))