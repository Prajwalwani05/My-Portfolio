// window.location.reload(`${document.getElementById('sec1')}`)
let home = document.getElementById('sec1');
let about = document.getElementById('sec2');
let project = document.getElementById('sec3');
let contact = document.getElementById('sec4');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');

window.addEventListener('load', ()=>{
    window.scrollTo(0 , home);
});


const header = document.querySelector('header');

function updateHeaderBackgroundColor() {
    const scrollStart1 = 150;
    const scrollEnd1 = 700; 
    const scrollStart2 = 800;
    const scrollEnd2 = 1300;
    const scrollStart3 = 1600;
    const scrollEnd3 = 2500;
    if ( (window.scrollY >= scrollStart1 && window.scrollY <= scrollEnd1) ) {
        header.style.backgroundColor = '#000814';
    }
    else if((window.scrollY >= scrollStart2 && window.scrollY <= scrollEnd2)){
        header.style.backgroundColor = '#000814'; // Change to your desired color
    }
    else if((window.scrollY >= scrollStart3 && window.scrollY <= scrollEnd3)){
        header.style.backgroundColor = '#000814'; // Change to your desired color
    }

     else {
        header.style.backgroundColor = 'transparent'; // Reset to transparent when not scrolled 100vh
    }
}

window.addEventListener('scroll', updateHeaderBackgroundColor);

updateHeaderBackgroundColor();

let resume = 'https://drive.google.com/file/d/1zj7O-FfeY5f5xpncMJ92h2EN_gtpoCVl/view?usp=drive_link';

document.getElementById("resumeBtn").addEventListener('click' , ()=>{
    window.open(resume)
})



var tl = gsap.timeline();

tl.from(".headerSec1 .logo , .navLinks li",{
    y:-100,
    opacity:0,
    duration:.5,
    // delay:.2,
    stagger:0.2,
})

tl.from(".textContent1 .heading1 , .textContent1 p , .textContent1 .socialLinks" , {
    x:-200,
    opacity:0,
    duration:.5,
    stagger:0.2,
})
  tl.from(".imgDiv", {
      x:100,
      scale:1.5,
      opacity: 0, // Start from opacity: 0
      duration: .5, // Adjust the duration as needed
      stagger: 0.5, // Adjust the stagger effect as needed
    });

    tl.from(".secondDiv ,.icons>ul>li",  {
        y:20,
        opacity:0,
        duration:.5,
        stagger:0.1
    })
    tl.from(".sec2 .aboutImage , .sec2 .aboutContent", {
        scale:.5,
        opacity:0,
        duration:.7,
        
        scrollTrigger:{
            trigger:".sec2 .aboutImage",
            scroller:"body",
            start:"top 60%",
        }
    })
  