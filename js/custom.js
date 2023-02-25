
  
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
let breaf_Overlay = document.querySelector('.breaf_Overlay');
let My_breaf = document.querySelector('.My_breaf');
let Close_Breaf = document.querySelector('.Close_Breaf');
let my_song = document.querySelector('#my-song');
let music_img = document.querySelector(".music_img");
let toggle_style_switcher = document.querySelector(".toggle-style-switcher");
let style_switcher = document.querySelector(".style-switcher");
let root = document.querySelector(':root');
let darkmood_img = document.querySelector('.darkmood_img');
let skills = document.querySelector('.skills');


// ? ///////////////// menue togller ////////////////
toggler.onclick = function(e) {
  nav.classList.toggle("open");
  bars.forEach(el => {
    el.classList.toggle("barAfter")
  });
}

// ? //////////////////// change menue togller on open and close /////////////////////////////
nav.onclick = function (e) {
  nav.classList.toggle("open");
  bars.forEach(el => {
    el.classList.toggle("barAfter")
  });
  NavTitle.textContent = "Hello";
}

// ? //////////////////// close the nav bar on click any navlink  /////////////////////////////
navlink.forEach(el => {
  el.addEventListener("click", function () {
    setTimeout(() => {
      nav.classList.add("open");
      NavTitle.textContent = " ";
      nav.classList.remove("open");
    }, 1500);
  })
});

// ? /////////////////////// set nav link text in another div on hover //////////////////////////

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


// ? ////////////////////// chang my photos    ///////////////////////////
// ? ////////////////////// chang my photos    ///////////////////////////
// ? /////////////////////  chang my photos   ///////////////////////////
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
};


// ? //////////////////  click sound effect ///////////////////////////////
// ? //////////////////  click sound effect ///////////////////////////////
// ? //////////////////  click sound effect ///////////////////////////////


music_img.onclick = function (e) {
  if (music_img.getAttribute('src') === "images/Controls/music_on.png") {
    music_img.src = "images/Controls/music_off.png";
    body.addEventListener('click', (e) => {
      my_song.play();
    });
  }
  else {
    music_img.src = "images/Controls/music_on.png";
    body.addEventListener('click', (e) => {
      my_song.pause();
    });
  }
}



// ? ////////////////// open and close Style control ///////////////////////////////
// ? ////////////////// open and close Style control ///////////////////////////////
// ? ////////////////// open and close Style control ///////////////////////////////


toggle_style_switcher.addEventListener("click", () => {
  style_switcher.classList.toggle("open_controls");
});


// ? //////////////////  dark mood system ///////////////////////////////
// ? //////////////////  dark mood system ///////////////////////////////
// ? //////////////////  dark mood system ///////////////////////////////

function setLightMode() {
  root.style.setProperty('--main-color', '#4a3b95');
  root.style.setProperty('--Sec-color', '#7257fa');
  root.style.setProperty('--glass-bac', '#7257fa73');
  root.style.setProperty('--text-color', '#AFABB3');
  root.style.setProperty('--white', '#fff');
  root.style.setProperty('--black', '#000');
  root.style.setProperty('--toggle-mood', '#ffffffe4');
  root.style.setProperty('--opa-color', '#d7d9fd');
  root.style.setProperty('--Nav-color', '#352970f5');
  root.style.setProperty('--timeline_item_bg', 'rgba(255, 255, 255, 0.373)');
  root.style.setProperty('--home-background', 'url("../images/download (1).png") no-repeat center');
  root.style.setProperty('--projects-background', 'url("../images/download (1).png") no-repeat center');
  root.style.setProperty('--timeline-background', 'url("../images/6.webp") no-repeat center');
}
      


function setDarkMode() {
  root.style.setProperty('--toggle-mood', '#10051C');
  root.style.setProperty('--main-color', '#962DFF');
  root.style.setProperty('--Sec-color', '#B973FF');
  root.style.setProperty('--text-color', '#fff');
  root.style.setProperty('--Nav-color', '#210A38');
  root.style.setProperty('--opa-color', '#210A38');
  root.style.setProperty('--home-background', 'none');
  root.style.setProperty('--timeline-background', 'none');
  root.style.setProperty('--projects-background', 'none');
  root.style.setProperty('--timeline_item_bg', 'rgba(148, 70, 244, 0.063)');
}

function toggleMood() {
  const currentMood = localStorage.getItem('mood');
  if (currentMood === 'light') {
    darkmood_img.src = "images/Controls/sun.png";
    setDarkMode();
    localStorage.setItem('mood', 'dark');
  } else {
    darkmood_img.src = "images/Controls/moon.png";
    setLightMode();
    localStorage.setItem('mood', 'light');
  }
}

function initializeMood() {
  const currentMood = localStorage.getItem('mood');
  if (currentMood === 'dark') {
    setDarkMode();
  } else {
    setLightMode();
  }
}

initializeMood();
darkmood_img.addEventListener('click', toggleMood);



// ? //////////////////  0000 ///////////////////////////////
// ? //////////////////  0000 ///////////////////////////////
// ? //////////////////  0000 ///////////////////////////////

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

 
  

  
  
  
  
  
  
  
  

  
  
  
  
  