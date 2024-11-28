// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });



var a = document.querySelector(".elem-container")
var b = document.querySelector(".box-image")


a.addEventListener("mouseenter", function () {
  b.style.display = "block"
})
a.addEventListener("mouseleave", function () {
  b.style.display = "none"
})


var d = document.querySelectorAll('.elem')
d.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var img = e.getAttribute('data-image')
    b.style.backgroundImage = `url(${img})`
  })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  centeredSlides: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});


 var loder = document.querySelector(".loder")

 setTimeout(() => {
     loder.style.top = "-100%"
 }, 4000);


var swip = document.querySelector(".end")
var mouse = document.querySelector(".mouse")

swip.addEventListener('mouseenter', function (dets) {
  mouse.style.display = 'block'
})
swip.addEventListener('mousemove', function (dets) {
  mouse.style.left = dets.x + "px";
  mouse.style.top = dets.y + "px";
  
})

swip.addEventListener('mouseleave', function (dets) {
  mouse.style.display = 'none'
})