var slider=document.querySelector(".slider")

var leftarrow=document.querySelector(".left");
var rightarrow=document.querySelector(".right");
var indicatorparents=document.querySelector(".controls ul");

var sectionindex=0;

document.querySelectorAll(".controls li").forEach(function(indicator,index){
   indicator.addEventListener("click",function(){
    sectionindex=index;
    document.querySelector(".controls .selected").classList.remove("selected");
    indicator.classList.add('selected')
    slider.style.transform= 'translate( '+(sectionindex)*-25+'% )'; 
})
})

leftarrow.addEventListener("click",function(){
    sectionindex=sectionindex-1;
 
    if(  sectionindex>=0){
        document.querySelector(".controls .selected").classList.remove("selected");
        indicatorparents.children[sectionindex].classList.add("selected")
        slider.style.transform= 'translate( '+(sectionindex)*-25+'% )'; 
  
    }else{
        sectionindex=3;
        document.querySelector(".controls .selected").classList.remove("selected");
        indicatorparents.children[sectionindex].classList.add("selected")
        slider.style.transform= 'translate( '+(sectionindex)*-25+'% )'; 
    }
  });

rightarrow.addEventListener("click",function(){
    sectionindex=sectionindex+1;

    if(  sectionindex<4){
        document.querySelector(".controls .selected").classList.remove("selected"); 
        indicatorparents.children[sectionindex].classList.add("selected")
        slider.style.transform= 'translate( '+(sectionindex)*-25+'% )';
       }else{
        sectionindex=0;
        document.querySelector(".controls .selected").classList.remove("selected");
        indicatorparents.children[sectionindex].classList.add("selected")
        slider.style.transform= 'translate( '+(sectionindex)*-25+'% )'; 
    }
  });

     
var sign=document.getElementById("signinregister")

var userdata=JSON.parse(localStorage.getItem("userList"))
        console.log(userdata)

var user=localStorage.getItem("user")
console.log(user)

for(var i=0;i<userdata.length;i++){
    if(userdata[i].userName==user){
        sign.innerHTML=`${user}
        <i style="font-size:24px" class="fa">&#xf2be;</i>`;  
     }
}
