let hamburger = document.getElementById('hamburger');
let backgrond_nav_mobile = document.getElementById('background-mobile-nav');
let Explore = document.getElementById('Explore');
let links = document.querySelector('.links');
let Bar_Search = document.querySelector('.Bar-Search');
const items = document.querySelectorAll(".data");
let logo = document.querySelector(".Logo");
let linksBarSearch = document.querySelectorAll(".Bar-Search ul li svg");
console.log(linksBarSearch);
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response => response.json())
// .then(json => {
//     for(photo of json){
//         console.log(photo.title)
//     }
// })

linksBarSearch.forEach(link => {
    link.addEventListener("click", () => {
        linksBarSearch.forEach(linkr =>{
            linkr.classList.remove("active");
        })
        link.classList.add("active");
    })
})




$(document).on('click','.links ul li a', function(){
    $('.links ul li a.active').removeClass('active');
    $(this).addClass('active')
})

logo.addEventListener("click",() =>{
    location.reload();

})
gsap.registerPlugin(TextPlugin,CSSRulePlugin);


gsap.to(CSSRulePlugin.getRule(".box-three .box-panel-one h2::before"), {duration: .3, cssRule: {color: "blue",height: "100%"}});


Explore.addEventListener("click",()=>{
    document.getElementById("3k").textContent = '30000'
    document.getElementById("1k").textContent = '36'
    window.scrollTo(0, document.body.scrollHeight);
    gsap.from(items, {
        textContent: 0,
        duration: 2,
        ease: Power1.easeIn,
        snap: { textContent: 1 },
        stagger: .1,
        onComplete : () =>{
            document.getElementById("3k").textContent = '30k +'
            document.getElementById("1k").textContent = '36 +'
        } 
    });
    
    gsap.to('#text-panel',{
        duration:5.5,
        ease: "expo.out",
        text:"We've proven ourself to our customers"
    })
    
})
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle('is-active')
    backgrond_nav_mobile.classList.toggle('active')
    links.classList.toggle('active')
    Bar_Search.classList.toggle('active')
    var tl = gsap.timeline({duration: .1})
})
const media= matchMedia("(max-width: 1000px)");

media.addEventListener("change", () => {
    hamburger.classList.remove('is-active')
    backgrond_nav_mobile.classList.remove('active')
    links.classList.remove('active')
    Bar_Search.classList.remove('active')
    Bar_Search.style.transform = 'translate(0%, 0%)'
    links.style.transform = 'translate(0%, 0%)'

})




window.onscroll = ()=> {
    hamburger.classList.remove('is-active')
    backgrond_nav_mobile.classList.remove('active')
    links.classList.remove('active')
    Bar_Search.classList.remove('active')
}

gsap.from('#moveDown-h2',{
    y:-200,
    duration:1.5,
    autoAlpha: 0,
    ease: "expo.out",
})
gsap.from(Explore,{
    x:-200,
    duration:2.5,
    autoAlpha: 0,
    ease: "expo.out",
})

gsap.to('#type-text-p',{
    duration:5.5,
    ease: "expo.out",
    text:'With so much demand for style of board where every aspect of if flews, we created a new series'
})


window.onload = () =>{
    gsap.from(items, {
        textContent: 0,
        duration: 2,
        ease: Power1.easeIn,
        snap: { textContent: 1 },
        stagger: .1,
        onComplete : () =>{
            document.getElementById("3k").textContent = '30k +'
            document.getElementById("1k").textContent = '36 +'
        } 
    });
}


gsap.to('#text-panel',{
    duration:5.5,
    ease: "expo.out",
    text:"We've proven ourself to our customers"
})
