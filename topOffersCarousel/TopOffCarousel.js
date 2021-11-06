var TopOffers = [{
        productName: "ZANDU BALM 50ML",
        imgLink: "https://static2.medplusmart.com/products/_4329c4_/PAMP0172_T.jpg",
        price: 199.0,
    },
    {
        productName: "WHISPER ULTRA CLEAN XL + WINGS 30S",
        imgLink: "https://static2.medplusmart.com/products/_588580_/WHIS0029_T.jpg",
        price: 285.0,
    },
    {
        productName: "PEDIASURE 7+ CHOCOLATE 400GM BIB",
        imgLink: "https://static2.medplusmart.com/products/_8798f0_/PEDI0219_T.jpg",
        price: 355.0,
    },
    {
        productName: "NIVEA NOURISHING BODY MILK 400 ML",
        imgLink: "https://static2.medplusmart.com/products/_1d262b9_/NIVE0038_T.jpg",
        price: 339.15,
    },
    {
        productName: "MAMY POKO PANTS M 96S",
        imgLink: "https://static2.medplusmart.com/products/_8658b0_/MAMY0096_T.jpg",
        price: 979.0,
    },
    {
        productName: "LIRIL LIME SOAP BAR 125GM",
        imgLink: "https://static2.medplusmart.com/products/_4b828d_/LIRI0005_T.jpg",
        price: 50.0,
    },
    {
        productName: "HORLICKS WOMEN'S PLUS CARAMEL 400G JAR",
        imgLink: "https://static2.medplusmart.com/products/_65dbfe_/HORL0079_T.jpg",
        price: 269.0,
    },
    {
        productName: "HIMALAYA GENTLE BABY WIPES 72S",
        imgLink: "https://static2.medplusmart.com/products/_cd1b4d_/HIMA0258_T.jpg",
        price: 175.0,
    },
    {
        productName: "HORLICKS CHOCOLATE 750GMS REFILL",
        imgLink: "https://static2.medplusmart.com/products/_e81f62_/HORL0065_T.jpg",
        price: 265.0,
    },
    {
        productName: "FAST&UP VITALIZE EFFERVESCENT MULTIVITAMINS 20S TABLET ORANGE",
        imgLink: "https://static2.medplusmart.com/products/_6b32de_/FAST0098_T.jpg",
        price: 370.5,
    },
];
var index = 0

// To load the carousel start
var caroTrack = document.querySelector(".TopOffers-carousel-track");

TopOffers.map(function (item) {
    var li = document.createElement("li");
    li.setAttribute("class", "TopOffers-carousel-slide")

    var img = document.createElement("img");
    img.setAttribute("src", item.imgLink);

    var nameSpan = document.createElement("span");
    nameSpan.textContent = item.productName;

    var priceSpan = document.createElement("span");
    priceSpan.setAttribute("class", "TopOffers-priceSpan");
    priceSpan.textContent = "Rs. " + Number(item.price);

    var heartIcon = document.createElement("span");
    heartIcon.innerHTML = '<i class="far fa-heart"></i>';
    heartIcon.setAttribute("id", "TopOffers-heartIcon");

    var addCartButton = document.createElement("button");
    addCartButton.setAttribute("id", "TopOffers-addCartButton");
    addCartButton.textContent = "Add to Cart";

    li.append(img,nameSpan,priceSpan,addCartButton,heartIcon);
    caroTrack.append(li)
})
var firstCarousel = caroTrack.children[0];
firstCarousel.classList.add("current-slide")

// To load the carousel end

// To make carousel transitions start
const track = document.querySelector(".TopOffers-carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".TopOffers-next-btn");
const prevBtn = document.querySelector(".TopOffers-prev-btn");
const slideWidth = (slides[0].clientWidth) + 40;

nextBtn.addEventListener("click", function (event) {
    index++
    if (index < 3) {
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;
        moveToSlide(track, currentSlide, nextSlide)
    }

})
prevBtn.addEventListener("click", function (event) {
    index--
    if (index >= 1) {
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

// To make carousel transitions end

// // // To autoplay carousel start
// // setInterval(function () {
// // autoPlay()
// // },6000)

// // function autoPlay() {
// // var currentBar = barsNav.querySelector(".current-slide")
// // var targetBar = currentBar.nextElementSibling;
// // var targetIndex = bars.findIndex(bar => bar === targetBar);
// // if(targetIndex !== -1) {
// //     var currentSlide = track.querySelector(".current-slide")
// //     var targetSlide = currentSlide.nextElementSibling;


// //     moveToSlide(track, currentSlide, targetSlide)
// // }
// // else{
// //     var currentSlide = track.querySelector(".current-slide");
// //     var targetSlide = track.children[0]
// //     moveToSlide(track, currentSlide, targetSlide)

// //     var targetBar = barsNav.children[0]
// //     currentBar.classList.remove("current-slide");
// //     targetBar.classList.add("current-slide")
// // }

// // }
// // // To autoplay carousel end