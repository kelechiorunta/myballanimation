const container = document.querySelector('.container');
const circles = document.querySelectorAll('.circles')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const button = document.querySelectorAll('i')

var active = 1;
const tl = gsap.timeline();
gsap.registerPlugin(TextPlugin);
var mytext = "";


container.addEventListener('click', (e)=>{
    active++
    //var target = e.target;
    container.parentElement.style.setProperty("--active-", `${active}`)
})

const reflection = () =>{
    if ((currentPosition >= 80) && 
    (currentPosition <= 120)){
        for(let i=0; i<=11; i++){
            circles[i].style.setProperty('-webkit-box-reflect', 'below -5px linear-gradient(transparent, rgba(255, 255, 255, 0.1))')
            circles[i].style.setProperty('background-color', 'red')
        }
       
    }
    else{
        for(let i=0; i<=11; i++){
            circles[i].style.setProperty('-webkit-box-reflect', 'none')
            circles[i].style.setProperty('background-color', 'red')
        }
      
    }
    //console.log(Number(parseFloat(window.getComputedStyle(container).transformOrigin)))
    
    setInterval(reflection, 10)
}





const myTween =  tl.fromTo('.container', {y:-500, z:500, rotationY:0, rotationX:0}, {y:100,
     rotationX:360, duration:2, ease:'bounce', repeat:-1, yoyo:true, onUpdate: function () {
        // Access the 'top' property during animation
        var currentPositiony = gsap.getProperty(".container", "y");
        var currentPositionz = gsap.getProperty(".container", "z");
        
    if ((currentPositiony >= 94) && (currentPositiony <= 100)){
        for(let i=0; i<=11; i++){
            circles[i].style.setProperty('-webkit-box-reflect', 'below -5px linear-gradient(transparent, rgba(255, 255, 255, 0.1))')
            circles[i].style.setProperty('background-color', 'red')
        }

        overlay.style.setProperty('background-color',  'rgba(0,0,0,0)')
    }
    else{
        for(let i=0; i<=11; i++){
            circles[i].style.setProperty('-webkit-box-reflect', 'below -5px linear-gradient(transparent, transparent)')
            circles[i].style.setProperty('background-color', 'red')
        }
        overlay.style.setProperty('background-color',  'rgba(0,0,0,0.5)')
    }

    if ((currentPositionz >= 450) && (currentPositionz <= 500)){
        body.style.setProperty('background', 'radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4))')
        mytext = "Goodbye"//tl.to('.intro', {text:"", duration:2, ease:"bounce"})
    }
    else if ((currentPositionz >= -1000) && (currentPositionz <= -950)){
        body.style.setProperty('background', 'radial-gradient(rgba(255,23,0,0.2), rgba(0,0,0,0.4))')
        mytext = "Welcome to My Ball";//tl.to('.intro', {text:"Welcome to My Ball", duration:2, ease:"bounce"})    
    }
    else{
        body.style.setProperty('background', 'radial-gradient(#f34, #ff05, rgba(0,0,0,0.4))') 
        mytext = "" 
    }
        // Log the current 'top' property to the console
        // console.log(currentPositiony);
        // console.log(currentPositionz);
        //tl.fromTo('.intro', {z:0,text:mytext }, {text:mytext, z: currentPositionz *100, duration: 5, ease: 'bounce', yoyo:true, repeat:-1})
    }})
tl.fromTo('.container', {rotation:360}, {rotationX: 0, rotationY: 0, duration:1, ease: 'linear', repeat:-1})
tl.fromTo('.container', {rotation:360}, {z: -1000, duration:1, ease: 'linear', repeat:-1, yoyo:true})

//tl.fromTo('.circles', {rotation:360}, {z: -100, rotationX:0, stagger:0.5, duration:1, ease: 'bounce', repeat:-1, yoyo:true})
//tl.add('myTween')

button.forEach(item=>{item.addEventListener('click', (e) =>{
    var  target = e.target;
    var myclass = target.getAttribute('class')
    
    if (target === (button[0])){
        
        
        target.className.includes('fas fa-pause')?(target.setAttribute('class', 'fas fa-play'), tl.pause())
        : (target.setAttribute('class', 'fas fa-pause'), tl.play())
        
        console.log(myclass)
    }
    else if (target.matches('.reverse')){
        tl.reverse()
    }
})})