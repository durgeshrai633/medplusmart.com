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
    
    if(password == confirmPassword){
      console.log("into ther if")
      var user = {
        userName: fname +" "+ lname,
        userEmail: email,
        userPassword: password,
        userMobile: mobile,
        cart:[]
      }
      users.push(user);
      localStorage.setItem("userList",JSON.stringify(users));
    }else{
      alert("Please confirm password")
    }
  
  }