const dropBtn = document.querySelector('.dropbtn');
const nav = document.querySelector('.banner-menu ul');


dropBtn.addEventListener("click", function(){
    if(nav.style.display === "none"){
        nav.style = "display: block";
    } else {
        nav.style = "display: none";
    } 
    console.log('click');
});



