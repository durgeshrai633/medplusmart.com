var sign=document.getElementById("signin")

var userdata=JSON.parse(localStorage.getItem("userList"))
        // console.log(userdata)

var user=localStorage.getItem("user")
// console.log(user)

for(var i=0;i<userdata.length;i++){
    if(userdata[i].userName==user){
        sign.innerHTML=`${user}
        <i style="font-size:24px" class="fa">&#xf2be;</i>`;
         
sign.style.color="black";
sign.style.fontSize="16px"
sign.style.border="none";

     }
}