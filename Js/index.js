const imageOnPhotos = document.querySelectorAll(".photos a");
const popup = document.querySelector(".popup");
const bigImg = document.querySelector(".slider img");
imageOnPhotos.forEach((img)=>{
    img.addEventListener("click",function(e){
        e.preventDefault();    
console.log(this);
let imgSrc = this.getAttribute("href");
console.log(bigImg);
bigImg.setAttribute("src" ,imgSrc);
popup.style.display ="flex";

    });
});
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("popup")){
        console.log(e.target);
        popup.style.display="none";
    }
});

// document.addEventListener("click",function(){
//     popup.style.display="none";
// })


