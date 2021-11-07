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

  document.getElementById("goToCartButton").addEventListener("click",function(){
    window.location.href = "cart.html";
  })


  // Registering the new user
  var users = JSON.parse(localStorage.getItem("userList"))||[];

  document.getElementById("registration").addEventListener("submit",registerUser)


  function registerUser(e){
    e.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("rEmail").value;
    var mobile = document.getElementById("mobileNumber").value;
    var password = document.getElementById("rPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
var isAvailable = false;
    for(var i = 0; i < users.length;i++){
      if(users[i].userMobile == mobile){
        console.log("found");
        isAvailable = true;
        break;
      }
    }
    if(!isAvailable){
      if(password == confirmPassword){
        var user = {
          userName: fname +" "+ lname,
          userEmail: email,
          userPassword: password,
          userMobile: mobile,
          cart:[]
        }
        users.push(user);
        localStorage.setItem("userList",JSON.stringify(users));
        localStorage.setItem("user",user.userName);
        closeModal();
        printUserName(user);
      }else{
        alert("Please confirm password")
      }
    }else{
      alert("You entered registered number!")
      return;
    }
  }

  function printUserName(user){
    var div = document.getElementById("userNameDiv2");
    var div = document.getElementById("userNameDiv1").style.display = "none";
    console.log(div.innerHTML);
    var span = document.createElement("span");
    span.textContent = user.userName;
    var icon = document.createElement("span");
    icon.innerHTML = '<i class="far fa-user-circle"><i class="fas fa-sort-down"></i>';
    div.innerHTML = "";
    div.append(span,icon);

  }



   window.addEventListener("load",function(){
     if(localStorage.getItem("user")){
      document.getElementById("signin").style.display = "none";
      var div = document.getElementById("userNameDiv2");
      var span = document.createElement("span");
      span.setAttribute("id","userNameSpan");
      span = localStorage.getItem("user");
      var icon = document.createElement("span");
      icon.innerHTML = '<i class="far fa-user-circle"><i class="fas fa-sort-down"></i>';
      div.innerHTML = "";
      div.append(span,icon);
      }else{
        document.getElementById("signin").style.display = "block";
      }
   })


  //  menu after clicking on username of main page

 var button = document.querySelector("#userNameDiv2");
 button.addEventListener("click",function (){
  document.querySelector("#userNameMenu").style.display ="block";
 })
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


    function logOutUser(){
      console.log("user logged out")
      localStorage.removeItem("user");
      document.querySelector("#userNameMenu").style.display ="none";
    }