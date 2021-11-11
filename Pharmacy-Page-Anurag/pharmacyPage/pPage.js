// Top navigation javascript starts here

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
document.getElementById("signin").addEventListener("click", openModal);

// Opening the signin/registration form on middle of the page
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

// new customer regitration form showing
function registration() {
  document.getElementById("registration").style.display = "flex";
  document.getElementById("sign-in-form").style.display = "none";
  document.getElementById("registration-span").style.display = "none";
  document.getElementById("sign-in-span").style.display = "block";
}

// new customer sign in form showing
function signin() {
  document.getElementById("registration").style.display = "none";
  document.getElementById("sign-in-form").style.display = "flex";
  document.getElementById("registration-span").style.display = "block";
  document.getElementById("sign-in-span").style.display = "none";
}

// Top navbar javascript ends here

// location nav starts here

document.getElementById("search").addEventListener("click", function (e) {
  document.getElementById("search").setAttribute("placeholder", "");
});
document.getElementById("search").addEventListener("click", function (e) {
  document.getElementById("search").setAttribute("placeholder", "");
  document.getElementById("search").style.backgroundColor = "white";
});

function putPlaceholder() {
  document
    .getElementById("search")
    .setAttribute("placeholder", "Search for... general or pharma products");
  document.getElementById("search").style.backgroundColor = "#F8F9FA";
}
document.getElementById("searchMenu").addEventListener("click", function () {
  document.getElementById("search-menu").style.display = "block";
});

function removeSearchList() {
  document.getElementById("search-menu").style.display = "none";
}

// document.getElementsByClassName("search-menu-item").addEventListener("click",function(){
//   alert("clicked");
// })

function viewShoppingCart() {
  document.getElementById("cart-mini-menu").style.display = "block";
}
function removeCart() {
  document.getElementById("cart-mini-menu").style.display = "none";
  console.log("clicked");
}

// redirecting to the cart.html
document
  .getElementById("goToCartButton")
  .addEventListener("click", function () {
    window.location.href = "cart.html";
  });

// Registering the new user
var users = JSON.parse(localStorage.getItem("userList")) || [];

document
  .getElementById("registration")
  .addEventListener("submit", registerUser);

function registerUser(e) {
  e.preventDefault();
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("rEmail").value;
  var mobile = document.getElementById("mobileNumber").value;
  var password = document.getElementById("rPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var isAvailable = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].userMobile == mobile) {
      console.log("found");
      isAvailable = true;
      break;
    }
  }
  if (!isAvailable) {
    if (password == confirmPassword) {
      var user = {
        userName: fname + " " + lname,
        userEmail: email,
        userPassword: password,
        userMobile: mobile,
        cart: [],
      };
      users.push(user);
      localStorage.setItem("userList", JSON.stringify(users));
      localStorage.setItem("user", user.userName);
      printUserName(user);
      closeModal();
    } else {
      alert("Please confirm password");
    }
  } else {
    alert("You entered registered number!");
    return;
  }
}

// Printing username
function printUserName(user) {
  var div = document.getElementById("userNameDiv2");
  document.getElementById("userNameDiv1").style.display = "none";
  var span = document.createElement("span");
  span.textContent = user.userName;
  var icon = document.createElement("span");
  icon.innerHTML =
    '<i class="far fa-user-circle"><i class="fas fa-sort-down"></i>';
  div.innerHTML = "";
  div.append(span, icon);
}

window.addEventListener("load", function () {
  if (localStorage.getItem("user")) {
    document.getElementById("signin").style.display = "none";
    var div = document.getElementById("userNameDiv2");
    var span = document.createElement("span");
    span.setAttribute("id", "userNameSpan");
    span = localStorage.getItem("user");
    var icon = document.createElement("span");
    icon.innerHTML =
      '<i class="far fa-user-circle"><i class="fas fa-sort-down"></i>';
    div.innerHTML = "";
    div.append(span, icon);
  } else {
    document.getElementById("signin").style.display = "block";
  }
});

//  menu after clicking on username of main page

var button = document.querySelector("#userNameDiv2");
button.addEventListener("click", function () {
  document.querySelector("#userNameMenu").style.display = "block";
});
var body = document.querySelector("#userNameMenu");
//   button
window.addEventListener("load", loadItem);

var loadOptions = `<div id="aDiv">
        <ul id="aUl">
          <li class="aLi">
            <a href="" title="My Account">
              <img
                class="sImg"
                src="https://static2.medplusmart.com/live/webpwa/images/myprofile-icn-36-cssbg.svg"
                alt=""
              />
              My Account
            </a>
          </li>
          <li class="aLi">
            <a href="">
              <img
                class="sImg"
                src="https://static2.medplusmart.com/live/webpwa/images/purchasehistory-icn-cssbg.svg"
                alt=""
              />
              Purchase History
            </a>
          </li>
          <li class="aLi">
            <a href="">
              <img
                class="sImg"
                src="https://static2.medplusmart.com/live/webpwa/images/lab-orders-icn-cssbg.svg"
                alt=""
              />
              My Lab Orders
            </a>
          </li>
          <li class="aLi">
            <a href="">
              <img
                class="sImg"
                src="https://static2.medplusmart.com/live/webpwa/images/refillhistory-icn-cssbg.svg"
                alt=""
              />
              Refill History
            </a>
          </li>
          <li class="aLi">
            <a href="">
              <img
                class="sImg"
                src="https://static2.medplusmart.com/live/webpwa/images/healthrecords-icn-36-cssbg.svg"
                alt=""
              />
              Health Records
            </a>
          </li>
          <li class="aLi">
              <a href="">
                  <img class="sImg" src="https://static2.medplusmart.com/live/webpwa/images/frequently-ordered-list-36px.svg" alt="">
                  Frequently Ordered List
              </a>
          </li>
          <li class="aLi">
              <a href="">
                  <img class="sImg" src="https://static2.medplusmart.com/live/webpwa/images/flexirewards-icn-36-cssbg.svg" alt="">
              FlexiRewards
              </a>
          </li>
          <li class="aLi">
              <a href="">
                  <img class="sImg" src="https://static2.medplusmart.com/live/webpwa/images/medpluswallet-icn-36-cssbg.svg" alt="">
              My Wallet
              </a>            
              
          </li>
          <li class="aLi">
              <a href="">
                  <img class="sImg" src="https://static2.medplusmart.com/live/webpwa/images/my-complaints-icn-36-cssbg.svg" alt="">
              My Complaints
              </a>
          </li>
          <hr id="myhr">
          <li  class="aLi" id="logOutButton" onclick="logOutUser()">
              <p>Logout</p>
          </li>
        </ul>
      </div>`;
function loadItem() {
  body.innerHTML = loadOptions;
  body.style.display = "none";
}



// Logging out the user
function logOutUser() {
  localStorage.removeItem("user");
  document.querySelector("#userNameMenu").style.display = "none";
  document.getElementById("userNameDiv2").style.display = "none";
  document.getElementById("userNameDiv1").style.display = "block";

}

// Catagory section

var categoryCarouselImages = [
  {
    img: "https://www.medplusmart.com/new_theme/web/images/new/xpharmacy-cat-icn.png.pagespeed.ic.9I12fTP2Cb.webp",
    title: "Pharmacy",
  },
  {
    img: "https://www.medplusmart.com/new_theme/web/images/new/xlab-tests-cat-icn.png.pagespeed.ic.sfswoBA0UR.webp",
    title: "LabTests",
  },
  {
    img: "https://static2.medplusmart.com/live/bannerImage/Mart/f020c15dc4c57e001200393695d9378c.jpg",
    title: "Baby Needs",
  },
  {
    img: "https://static2.medplusmart.com/live/bannerImage/Mart/aede9ef1f3ebf36a0a1f4556facc4732.jpg",
    title: "Pesonal Care",
  },
  {
    img: "https://static2.medplusmart.com/live/bannerImage/Mart/880ae68c4dee7f6632781c46c5c7b0f9.jpg",
    title: "Health & Nutrition",
  },
  {
    img: "https://static2.medplusmart.com/live/bannerImage/Mart/f44c82c87230e64243501a302d6e7da6.jpg",
    title: "OTC & Health Needs",
  },
];

categoryCarouselImages.map(function (item) {
  var img = document.createElement("img");
  var title = document.createElement("span");
  img.setAttribute("src", item.img);
  title.textContent = item.title;
  var circleDiv = document.createElement("div");
  circleDiv.append(img);
  var div = document.createElement("div");
  div.setAttribute("class", "catagoryCard");
  div.append(circleDiv, title);
  document.getElementById("cContainer").append(div);
});

// Top offers section products

var topOffersProduct = [
  {
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
    imgLink:
      "https://static2.medplusmart.com/products/_1d262b9_/NIVE0038_T.jpg",
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
];

topOffersProduct.map(function (item) {
  var productName = item.productName;
  var imgLink = item.imgLink;
  var price = item.price;

  var img = document.createElement("img");
  img.setAttribute("src", item.imgLink);
  var nameSpan = document.createElement("span");
  nameSpan.textContent = item.productName;
  var priceSpan = document.createElement("span");
  priceSpan.setAttribute("class", "priceSpan");
  priceSpan.textContent = "Rs. " + Number(item.price);

  var heartIcon = document.createElement("span");
  heartIcon.innerHTML = '<i class="far fa-heart"></i>';
  heartIcon.setAttribute("id", "heartIcon");

  var addCartButton = document.createElement("button");
  addCartButton.setAttribute("id", "addCartButton");
  addCartButton.textContent = "Add to Cart";

  var cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "pCard");
  cardDiv.append(img, nameSpan, priceSpan, addCartButton, heartIcon);
  document.getElementById("pContainer").append(cardDiv);
});

// Best sellers setion

var bestSellersProduct = [
  {
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
    imgLink:
      "https://static2.medplusmart.com/products/_1d262b9_/NIVE0038_T.jpg",
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
];

bestSellersProduct.map(function (item) {
  var productName = item.productName;
  var imgLink = item.imgLink;
  var price = item.price;

  var img = document.createElement("img");
  img.setAttribute("src", item.imgLink);
  var nameSpan = document.createElement("span");
  nameSpan.textContent = item.productName;
  var priceSpan = document.createElement("span");
  priceSpan.setAttribute("class", "priceSpan");
  priceSpan.textContent = "Rs. " + Number(item.price);

  var heartIcon = document.createElement("span");
  heartIcon.innerHTML = '<i class="far fa-heart"></i>';
  heartIcon.setAttribute("id", "heartIcon");

  var addCartButton = document.createElement("button");
  addCartButton.setAttribute("id", "addCartButton");
  addCartButton.textContent = "Add to Cart";

  var cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "pCard");
  cardDiv.append(img, nameSpan, priceSpan, addCartButton, heartIcon);
  document.getElementById("bContainer").append(cardDiv);
});

// User sign in function starts here

document.getElementById("sign-in-form").addEventListener("submit", userSignIn);

function userSignIn(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = users.filter(function (person) {
    return person.userMobile == email && person.userPassword == password;
  });
  if (user[0] !== undefined) {
    printUserName(user[0]);
    closeModal();
  } else {
    alert("You entered wrong credentials!");
  }
}
