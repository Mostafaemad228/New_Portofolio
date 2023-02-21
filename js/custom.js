
  
    // ? menu
const body = document.getElementsByTagName('body')[0];
let toggler = document.querySelector(".MENU_toggler");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
let navlink = document.querySelectorAll('.nav-link');
let NavTitle = document.querySelector('.Nav-Title');
let bars = document.querySelectorAll('.bar');
let bigPhoto = document.querySelector('.bigPhoto');
let smallPhoto = document.querySelectorAll('.smallPhoto');
let socialmedia = document.querySelector('.socialmedia');
let meBtn = document.querySelector('.meBtn');
let Personal_Btn = document.querySelector('.PersonalBtn');
let text_container = document.querySelector('.text-container');
let personalData = document.querySelector('.personalData');
let Wave = document.querySelector('.waving-hand');
let My_breaf = document.querySelector('.My_breaf');
let Close_Breaf = document.querySelector('.Close_Breaf');





toggler.onclick = function(e) {
  nav.classList.toggle("open");
  bars.forEach(el => {
    el.classList.toggle("barAfter")
  });
}

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

nav.onclick = function (e) {
  nav.classList.toggle("open");
  bars.forEach(el => {
    el.classList.toggle("barAfter")
  });
  NavTitle.textContent = "Hello";
}

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

navlink.forEach(el => {
  el.addEventListener("click", function () {
    setTimeout(() => {
      nav.classList.add("open");
      NavTitle.textContent = " ";
      nav.classList.remove("open");
    }, 1500);
  })
});

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////


navlink.forEach(el => {
  el.addEventListener("mouseenter", function () {
    NavTitle.textContent = el.dataset.text;
  })
});

// ? ////////////////close And close beaf Div/////////////////////
//* open breaf div
Wave.addEventListener("click", function () {
  My_breaf.style.display="block"
  My_breaf.style.transition = "all 0.5s ease-in-out";
});

//* close breaf div
Close_Breaf.addEventListener("click", function () {
  My_breaf.style.display = "none";

});



// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////



smallPhoto.forEach(el => {
  el.addEventListener("click", function () {
    bigPhoto.setAttribute("src", this.getAttribute('src'))
  })
});



// socialmedia.onclick = function (e) {
//   socialmedia.classList.toggle("socialmediaActive");
// };


meBtn.onclick = function (e) {
  personalData.style.display = "none";
  text_container.style.display="block";

};

Personal_Btn.onclick = function (e) {
  text_container.style.display = "none";
  personalData.style.display = "block";
}






// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////



// document.onkeyup = function (e) {
//   if (e.key === "Escape") {
//     nav.classList.remove("open");
//   bars.forEach(bar => {
//     bar.classList.toggle("allWidth");
//   });


//   }
// }




  // /////////////////////////////////////////
  // window.addEventListener("scroll" , function () {    
  //   var navbar =  document.querySelector("nav");
  //   navbar.classList.toggle("sticky",window.scrollY >100);
  // })
  // ///////////////////////////////////////////////////////////// ///////////////////////

// ////////////////////////// /////////////////////// ///////////////////////


// ///////////////////////////////////////////////////////////////////////////

  
// let body =  document.body;
// body.innerHTML = "<span > Glowing </span>" 

// let logo =  document.querySelector(".navbar-brand img");
// let Link = document.querySelector(".activeLink");
// let text = document.querySelector(".welcomediv h1")
// logo.setAttribute("src" , "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/130px-Google_Photos_icon_%282020%29.svg.png")
// Link.removeAttribute("href");
//   text.textContent = "hello from js iam mostafa emad"
     

// var textLogo = document.querySelectorAll(".neon");
// textLogo.forEach(el => {
//   var logoName = "wadeh";
//   el.textContent = `${logoName}`
//   el.removeAttribute("data-text")
// });

// let countNums = document.querySelectorAll(".countNums")
// let section = document.querySelector(".why")
// let started = false;

//  ? count up the numbers in  

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop) {
//     if (!started) {
//     countNums.forEach((num) => StartCount(num) ) 
//     }
//     started = true;
//   }
// }


// function StartCount(el) {
//   let goal = el.dataset.goal; 
//   console.log(goal);

//   let count = setInterval(() => {
//     el.textContent++; 
//     if ( el.textContent === goal) {
//       clearInterval(count);
//     }
//   }, 5000 / goal ); 
// }




 
  

  
  
  
  
  
  
  
  

  
  
  
  
  