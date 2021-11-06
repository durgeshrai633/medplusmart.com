var categoryCarouselImages = [{
        caroImg: "https://www.medplusmart.com/new_theme/web/images/new/xpharmacy-cat-icn.png.pagespeed.ic.9I12fTP2Cb.webp",
        title: "Pharmacy"
    },
    {
        caroImg: "https://www.medplusmart.com/new_theme/web/images/new/xlab-tests-cat-icn.png.pagespeed.ic.sfswoBA0UR.webp",
        title: "LabTests"
    },
    {
        caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/f020c15dc4c57e001200393695d9378c.jpg",
        title: "Baby Needs"
    },
    {
        caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/aede9ef1f3ebf36a0a1f4556facc4732.jpg",
        title: "Pesonal Care"
    },
    {
        caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/880ae68c4dee7f6632781c46c5c7b0f9.jpg",
        title: "Health & Nutrition"
    },
    {
        caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/f44c82c87230e64243501a302d6e7da6.jpg",
        title: "OTC & Health Needs"
    },
    {
        caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/dfc7a48caf96c98482b9b38c1b849828.jpg",
        title: "Vitamins & Supplements"
    },
    {
        caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/38a94856e3ab4fd14503df7a91993964.jpg",
        title: "Diabetic Needs"
    },
    {
        caroImg: "https://static2.medplusmart.com/live/bannerImage/Mart/5fe39e3d90819ab9c9e79bae20f56a76.jpg",
        title: "Household Needs"
    },
]
var index=0
// var lastSlide= document.querySelector(".cate-carousel-track");
// console.log(lastSlide.children)


// To load the carousel start
var caroTrack = document.querySelector(".cate-carousel-track");

categoryCarouselImages.map(function (item) {
    var li = document.createElement("li");
    li.setAttribute("class", "cate-carousel-slide")
    var img = document.createElement("img");
    img.setAttribute("src", item.caroImg)
    var p = document.createElement("p")
    p.innerText = item.title
    li.append(img, p);
    caroTrack.append(li)
})
var firstCarousel = caroTrack.children[0];
firstCarousel.classList.add("current-slide")

// To load the carousel end

// // To make carousel transitions start
const track = document.querySelector(".cate-carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".cate-next-btn");
const prevBtn = document.querySelector(".cate-prev-btn");
const slideWidth = (slides[0].clientWidth) + 40;

nextBtn.addEventListener("click", function (event) {
    console.log(event.target.closest("li"))
    index++
    if(index<3){
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide)
    }

})
prevBtn.addEventListener("click", function (event) {
    index--
    if(index>=1){
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        moveToSlide(track, currentSlide, prevSlide)
    }

})

// To add offset to carousel images position start
function setSlidePosition(slide, index) {
    var totalWidth = caroTrack.clientWidth
    slide.style.left = (slideWidth * index) + "px";
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

// // To make carousel transitions end

// // To autoplay carousel start
// setInterval(function () {
// autoPlay()
// },6000)

// function autoPlay() {
// var currentBar = barsNav.querySelector(".current-slide")
// var targetBar = currentBar.nextElementSibling;
// var targetIndex = bars.findIndex(bar => bar === targetBar);
// if(targetIndex !== -1) {
//     var currentSlide = track.querySelector(".current-slide")
//     var targetSlide = currentSlide.nextElementSibling;


//     moveToSlide(track, currentSlide, targetSlide)
// }
// else{
//     var currentSlide = track.querySelector(".current-slide");
//     var targetSlide = track.children[0]
//     moveToSlide(track, currentSlide, targetSlide)

//     var targetBar = barsNav.children[0]
//     currentBar.classList.remove("current-slide");
//     targetBar.classList.add("current-slide")
// }

// }
// // To autoplay carousel end