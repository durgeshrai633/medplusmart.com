var homeMainCarouselImages = [{
    caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/55519bfa3e6de316be1d90982fca1c3c.jpg",
    title: "Flat 20% off",
    subtitle: "On every medicine"
},
{
    caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/7b265488a26c33fee10a29bea4e1d0d2.jpg",
    title: "Get Upto 600",
    subtitle: "Mobikwik Cash Back"
},
{
    caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/4ec84732175565115948155568587cbe.jpg",
    title: "Upto Rs 399 Off",
    subtitle: "Baby Diapers"
},
{
    caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/769ee22b6cca0ce5da266790554754fd.jpg",
    title: "Upto 15% Off",
    subtitle: "The Man Company"
},
{
    caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/96a7a94c559eb699de02a570ad242f87.jpg",
    title: "Upto 15% Off",
    subtitle: "Nivea"
},
{
    caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/964797a960ddb176f0e182e545f8db9f.jpg",
    title: "Lab Tests",
    subtitle: "Health Packages"
}
]

// To load the carousel start
var caroTrack = document.querySelector(".mainCarousel .carousel-track");

homeMainCarouselImages.map(function (item) {
var li = document.createElement("li");
li.setAttribute("class", "carousel-slide")
var img = document.createElement("img");
img.setAttribute("src", item.caroImg)
li.append(img);
caroTrack.append(li)
})
var firstCarousel = caroTrack.children[0];
firstCarousel.classList.add("current-slide")
// To load the carousel end

// To load carousel indicators start
var indicatorNav = document.querySelector(".carousel-nav")
homeMainCarouselImages.map(function(item){
var btn = document.createElement("button")
var content = `<h3>${item.title}</h3><h4>${item.subtitle}</h4>`
btn.innerHTML = content
btn.setAttribute("class","carousel-indicator")
indicatorNav.append(btn)
})
var firstIndicator = indicatorNav.children[0];
firstIndicator.classList.add("current-slide")
// To load carousel indicators end 

// To make carousel transitions start
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children)
const barsNav = document.querySelector(".carousel-nav");
const bars = Array.from(barsNav.children);
const slideWidth = slides[0].clientWidth;

// To add offset to carousel images position start
function setSlidePosition(slide, index) {
slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition)
// To add offset to carousel images position end 

function moveToSlide(track, currentSlide, targetSlide) {
const nextSlide = targetSlide
track.style.transition = "transform 250ms ease-in"
track.style.transform = `translateX(-${nextSlide.style.left})`
currentSlide.classList.remove("current-slide");
targetSlide.classList.add("current-slide");
}

// To make carousel transitions end

// To make carousel indicator  transitions start
function moveIndicator(e) {
const targetBar = e.target.closest("button");

const currentSlide = track.querySelector(".current-slide")
const currentBar = barsNav.querySelector(".current-slide")
const targetIndex = bars.findIndex(bar => bar === targetBar);
const targetSlide = slides[targetIndex];
moveToSlide(track, currentSlide, targetSlide)
currentBar.classList.remove("current-slide")
targetBar.classList.add("current-slide")
console.log(currentSlide)
console.log(targetSlide)
}
bars.map((item) => item.addEventListener("click", function (e) {
moveIndicator(e)
}))
// To make carousel indicator  transitions end

// To autoplay carousel start
setInterval(function () {
autoPlay()
},6000)

function autoPlay() {
var currentBar = barsNav.querySelector(".current-slide")
var targetBar = currentBar.nextElementSibling;
var targetIndex = bars.findIndex(bar => bar === targetBar);
if(targetIndex !== -1) {
    var currentSlide = track.querySelector(".current-slide")
    var targetSlide = currentSlide.nextElementSibling;


    moveToSlide(track, currentSlide, targetSlide)
    currentBar.classList.remove("current-slide")
    targetBar.classList.add("current-slide")
}
else{
    var currentSlide = track.querySelector(".current-slide");
    var targetSlide = track.children[0]
    moveToSlide(track, currentSlide, targetSlide)
    
    var targetBar = barsNav.children[0]
    currentBar.classList.remove("current-slide");
    targetBar.classList.add("current-slide")
}

}
// To autoplay carousel end