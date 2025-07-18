const vedio1 = document.getElementById("projectvideo1");
const vedio2 = document.getElementById("projectvideo2");
const vedio3 = document.getElementById("projectvideo3");
const hoversign = document.querySelector(".hoversign");

const sideBar = document.querySelector(".sidebar")
const menu = document.querySelector('.menu-icon')
const closeing = document.querySelector('.close-icon')

const vediolist = [vedio1, vedio2, vedio3]

vediolist.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play();
        hoversign.classList.add("active")
    })
    video.addEventListener('mouseout', function(){
        video.pause();
        hoversign.classList.remove("active")
    })
})

menu.addEventListener('click', function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
})

closeing.addEventListener('click', function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})