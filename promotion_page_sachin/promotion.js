// carousel start
var carouselImges = ["https://static2.medplusmart.com/live/bannerImage/Mart/0036e89c7e5a2972f3061b54d182f722.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/60343147c35ebd43bda28c383dad957e.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/362fcf14bcdb8e04a481cc1c29bc99ea.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/6c819bc37cfa2c512bc929db636c79d2.jpg"
]

var caroTrack = document.querySelector(".carousel-track");

carouselImges.map(function (item) {
    var li = document.createElement("li");
    li.setAttribute("class", "carousel-slide")
    var img = document.createElement("img");
    img.setAttribute("src", item)
    li.append(img);
    caroTrack.append(li)
})
firstCarousel = caroTrack.children[0];
firstCarousel.classList.add("current-slide")


const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children)
// console.log(track)
const barsNav = document.querySelector(".carousel-nav");
const bars = Array.from(barsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(barsNav)
function setSlidePosition(slide, index) {
    slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition)

function moveToSlide(track, currentSlide, targetSlide) {
    const nextSlide = targetSlide
    // console.log(currentSlide, targetSlide)
    track.style.transform = `translateX(-${nextSlide.style.left})`
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

barsNav.addEventListener("click", function (e) {
    const targetBar = e.target.closest("button");

    const currentSlide = track.querySelector(".current-slide")
    const currentBar = barsNav.querySelector(".current-slide")
    const targetIndex = bars.findIndex(bar => bar === targetBar);
    const targetSlide = slides[targetIndex];
    // console.log(targetSlide)

    moveToSlide(track, currentSlide, targetSlide)
    currentBar.classList.remove("current-slide")
    targetBar.classList.add("current-slide")
})
// carousel end


var bannerImages = [

    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/179bbcb7a80a5c04be7e455d185aca7d.jpg",
        title: "DoqtarChairBackSupport",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/eb14ec6ed9da3cb92e7b5f31f6f78ab4.jpg",
        title: "Pulse Oximeters Flat Rs 699",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/f5972a0a54a08cdad4f083d67302c6c5.jpg",
        title: "Softovac",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/feb52bdfe198cf8b17f8a744fff99f8c.jpg",
        title: "Vicks",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/849fd1f16d5d7c1ba6e57a8ad8c6e899.jpg",
        title: "Zandu",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/77c6aa7a99ab4ec186bb36c490a528e8.jpg",
        title: "Sofy",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/85fe5f8c3f65582b79df481e8ff3ef61.jpg",
        title: "Whisper",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/4e01e11086446018b33d0655028c3b85.jpg",
        title: "Iodex",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/c52e32a3d9c89d5d0d1671b9bd4d6b44.jpg",
        title: "Eno",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/d619c481204b3100338dafae6f7f1e24.jpg",
        title: "VBath",
        category: "OTC & HEALTH NEEDS"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/55ac129b2a644cfb692134a41833b5c5.jpg",
        title: "Flat 20 Percentage off on every medicine",
        category: "PHARMACY"

    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/6cb33c4d5d68401ee7466acb08486c36.jpg",
        title: "Flat 20 Percentage off on every medicineGet Upto 600 Mobikwik Cash Back",
        category: "PHARMACY"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/657400e2d33fdf8ea612ccf998238839.jpg",
        title: "Gillette",
        category: "PERSONAL CARE"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/0e2427c791019f4da8cfd9facb3705e9.jpg",
        title: "AXE",
        category: "PERSONAL CARE"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/3ee5e06f334c82c98055be62c617adf2.jpg",
        title: "ponds",
        category: "PERSONAL CARE"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/b1f0001fa5a9df4228a76a83773eb09c.jpg",
        title: "Vaseline",
        category: "PERSONAL CARE"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/b1f0001fa5a9df4228a76a83773eb09c.jpg",
        title: "Nivea",
        category: "PERSONAL CARE"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/7a7e29deb04765706c947d1fa405ea49.jpg",
        title: "The Man Company",
        category: "PERSONAL CARE"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/c9621fd8d57c5f31277cb2a7033a40bc.png",
        title: "LupiSafe",
        category: "PERSONAL CARE"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/13b7f7f9c55eb41d3f32ce8bb337aadc.jpg",
        title: "FairAndLovely",
        category: "PERSONAL CARE"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/2dd6a664a5d5c0b9d4794d1b1c664153.jpg",
        title: "Lakme",
        category: "PERSONAL CARE"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/72765db073153fc2cb08e62fb214a9fd.jpg",
        title: "DoqtarOrthomate",
        category: "DIABETIC NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/4ecd9e6ea7d90c4ab586d22e61a8818c.jpg",
        title: "Glucipro",
        category: "DIABETIC NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/ff091ff96ee1765fc037af97ef651756.jpg",
        title: "Corcal",
        category: "VITAMINS & SUPPLEMENTS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/0a90a4e18ddca33db301ef28d5364039.jpg",
        title: "Lupin Be One Cap",
        category: "VITAMINS & SUPPLEMENTS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/75b869cd88a3d6b2bd3bfec6f56f800b.jpg",
        title: "NUTRIMAXX",
        category: "VITAMINS & SUPPLEMENTS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/b0a566946538a5f198470aae38db3351.jpg",
        title: "LittleAngel",
        category: "BABY NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/c2b1b72f3bb2f94e3df43b7b29cd768f.jpg",
        title: "Kiddos",
        category: "BABY NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/bf887a8b939c8fe320866c20894b034b.jpg",
        title: "LittlesBabyWipes",
        category: "BABY NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/9a23a2c8a26f086240083b72990833f6.jpg",
        title: "BabyDove",
        category: "BABY NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/ddf512988f8e709f62623ae21e19f2cc.jpg",
        title: "Kenko Copper Bottle 1 Liter",
        category: "HOUSEHOLD NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/d39032a1e2fc6e4d55dc2b7cf3e320b4.jpg",
        title: "Tresemme",
        category: "HOUSEHOLD NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/52394aee0eaf8f0cbbb4515d7691659c.jpg",
        title: "Closeup",
        category: "HOUSEHOLD NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/13910433323208b31a424a8aafc78b5e.jpg",
        title: "Dove",
        category: "HOUSEHOLD NEEDS"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/beca05d6a44bb82d03e3b23f6cf4960b.jpg",
        title: "Horlicks",
        category: "HEALTH & NUTRITION"
    },
    {
        bannerImgLink: "	https://static2.medplusmart.com/live/bannerImage/Mart/f2386fde721f2515372cedfcfeb3c7fd.jpg",
        title: "Pediasure",
        category: "HEALTH & NUTRITION"
    },
    {
        bannerImgLink: "	https://static2.medplusmart.com/live/bannerImage/Mart/5400d1aeb542f2d68ac348e22d5998e7.jpg",
        title: "HorlicksProteinPlus",
        category: "HEALTH & NUTRITION"
    },
    {
        bannerImgLink: "https://static2.medplusmart.com/live/bannerImage/Mart/f3490575b4cc4adb1a55693b62d5e87b.jpg",
        title: "HorlicksWomensPlus",
        category: "HEALTH & NUTRITION"
    },
]

var categories = ["ALL", "OTC & HEALTH NEEDS", "PHARMACY", "PERSONAL CARE", "DIABETIC NEEDS", "VITAMINS & SUPPLEMENTS", "BABY NEEDS", "HOUSEHOLD NEEDS", "HEALTH & NUTRITION"]
var catSec = document.querySelector(".category-section")
var catList = document.querySelector(".category-section>ul")
categories.map(function (item) {
    var li = document.createElement("li")
    li.setAttribute("class", "ls-item")

    var a = document.createElement("a")
    a.setAttribute("href", "#")
    a.textContent = item
    li.append(a)

    catList.append(li)
})

Array.from(document.querySelectorAll(".ls-item")).map(function (item, index, event) {
    item.addEventListener("click", function (event) {
        displayBanners(item.innerText)
        activeCat(index, item.innerText)
    })
})

function activeCat(index, text) {
    var prevIndex = localStorage.getItem("index")
    var prevCat = catList.children[prevIndex]
    prevCat.classList.remove("active")
    var removeIcon = prevCat.children[0].children[0]
    removeIcon.parentNode.removeChild(removeIcon)
    // console.log(index)
    localStorage.setItem("index", index)

    var activeCat = catList.children[index]
    activeCat.classList.add("active")
    var icon = `<i class="fas fa-angle-down"></i>${text}`
    activeCat.children[0].innerHTML = icon

}


var bannerImageCont = document.querySelector(".promotion-card-section")

function displayBanners(category) {
    bannerImageCont.innerHTML = ""
    if (category == "ALL") {
        bannerImages.map(function (item) {
            var anch = document.createElement("a")
            anch.setAttribute("href", "#")
            anch.setAttribute("class", "promotion-card")
            var img = document.createElement("img")
            img.setAttribute("src", item.bannerImgLink)
            img.setAttribute("title", item.title)
            anch.append(img)
            bannerImageCont.append(anch)
        })
    } else {
        bannerImages.map(function (item) {
            if (category == item.category) {
                var anch = document.createElement("a")
                anch.setAttribute("href", "#")
                anch.setAttribute("class", "promotion-card")

                var img = document.createElement("img")
                img.setAttribute("src", item.bannerImgLink)
                img.setAttribute("title", item.title)
                anch.append(img)
                bannerImageCont.append(anch)
            }
        })
    }
}

window.addEventListener("load", displayBannersAll)

function displayBannersAll(event) {
    localStorage.setItem("index", 0)
    catList.children[0].classList.add("class", "active")
    var txt = catList.children[0].children[0].textContent
    var icon = `<i class="fas fa-angle-down"></i>${txt}`
    catList.children[0].children[0].innerHTML = icon

    bannerImageCont.innerHTMLs = ""
    bannerImages.map(function (item) {
        var anch = document.createElement("a")
        anch.setAttribute("href", "#")
        anch.setAttribute("class", "promotion-card")
        var img = document.createElement("img")
        img.setAttribute("src", item.bannerImgLink)
        img.setAttribute("title", item.title)
        anch.append(img)
        bannerImageCont.append(anch)
    })
}