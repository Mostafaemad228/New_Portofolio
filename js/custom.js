
  
// ! defining 
const body = document.getElementsByTagName('body')[0];
let toggler = document.querySelector(".MENU_toggler");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
let navlink = document.querySelectorAll('.nav-link');
let NavTitle = document.querySelector('.Nav-Title');
let bars = document.querySelectorAll('.bar');
let bigPhoto = document.querySelector('.bigPhoto');
let smallPhoto = document.querySelectorAll('.smallPhoto');
let to_up = document.querySelector('.to_up');
let rocket_lunch = document.querySelector('.rocket_lunch');
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
// let skills = document.querySelector('.skills');
let Skills_container = document.querySelector('.Skills_container');
let projects_container = document.querySelector('.projects_container');



// ! ///////////////// menue togller ////////////////
toggler.onclick = function(e) {
  nav.classList.toggle("open");
  bars.forEach(el => {
    el.classList.toggle("barAfter")
  });
}

// ! //////////////////// change menue togller on open and close /////////////////////////////
nav.onclick = function (e) {
  nav.classList.toggle("open");
  bars.forEach(el => {
    el.classList.toggle("barAfter")
  });
  NavTitle.textContent = "Hello";
}

// ! //////////////////// close the nav bar on click any navlink  /////////////////////////////
navlink.forEach(el => {
  el.addEventListener("click", function () {
    setTimeout(() => {
      nav.classList.add("open");
      NavTitle.textContent = " ";
      nav.classList.remove("open");
    }, 1500);
  })
});

// ! /////////////////////// set nav link text in another div on hover //////////////////////////

navlink.forEach(el => {
  el.addEventListener("mouseenter", function () {
    NavTitle.textContent = el.dataset.text;
  })
});

// ! ////////////////close And close beaf Div/////////////////////
//* open breaf div
Wave.addEventListener("click", function () {
  My_breaf.style.display="block"
  My_breaf.style.transition = "all 0.5s ease-in-out";
});

//* close breaf div
Close_Breaf.addEventListener("click", function () {
  My_breaf.style.display = "none";
});


// ! ////////////////////// chang my photos    ///////////////////////////
smallPhoto.forEach(el => {
  el.addEventListener("click", function () {
    bigPhoto.setAttribute("src", this.getAttribute('src'))
  })
});


// ! /////////////////////  lunch rocket (go to up)   ///////////////////////////

to_up.onclick = function (e) {

  rocket_lunch.style.display = "flex";

  setTimeout(() => {
    rocket_lunch.style.display = "none";
  }, 1000);

};


// ! ///////////// change div to show personal information ///////////

meBtn.onclick = function (e) {
  personalData.style.display = "none";
  text_container.style.display="block";

};

Personal_Btn.onclick = function (e) {
  text_container.style.display = "none";
  personalData.style.display = "block";
};


// ! //////////////////  click sound effect ///////////////////////////////


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



// ! ////////////////// open and close Style control ///////////////////////////////


toggle_style_switcher.addEventListener("click", () => {
  style_switcher.classList.toggle("open_controls");
});


// ! //////////////////  dark mood system ///////////////////////////////

function setLightMode() {
  root.style.setProperty('--main-color', '#4a3b95');
  root.style.setProperty('--Sec-color', '#7257fa');
  root.style.setProperty('--glass-bac', '#7257fa73');
  root.style.setProperty('--text-color', '#320F55');
  root.style.setProperty('--white', '#fff');
  root.style.setProperty('--black', '#000');
  root.style.setProperty('--toggle-mood', '#ffffffe4');
  root.style.setProperty('--opa-color', '#d7d9fd');
  root.style.setProperty('--Nav-color', '#352970f5');
  root.style.setProperty('--brightness', 'brightness(200%)');
  root.style.setProperty('--timeline_item_bg', 'rgba(255, 255, 255, 0.373)');
  root.style.setProperty('--home-background', 'url("../images/download (1).png") no-repeat center');
  root.style.setProperty('--projects-background', 'url("../images/download (1).png") no-repeat center');
  root.style.setProperty('--timeline-background', 'url("../images/6.webp") no-repeat center');
}
      


function setDarkMode() {
  root.style.setProperty('--toggle-mood', '#10051C');
  root.style.setProperty('--main-color', '#B973FF');
  root.style.setProperty('--Sec-color', '#D0A1FF');
  root.style.setProperty('--text-color', '#fff');
  root.style.setProperty('--Nav-color', '#210a38f3');
  root.style.setProperty('--brightness', 'brightness(100%)');
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



// ! ////////////////// display Items Skills section ///////////////////////////////

const skills_arr = [
  {
    Skill_name:"HTML",
    Skill_src: "images/skills/html.png",
  },
  {
    Skill_name: "CSS",
    Skill_src: "images/skills/css.png",
  },
  {
    Skill_name: "JAVASCRIPT",
    Skill_src: "images/skills/js.png",
  },
  {
    Skill_name: "BOOTSTRAP",
    Skill_src: "images/skills/bootstrap.png",
  },
  {
    Skill_name: "SASS",
    Skill_src: "images/skills/sass.png",
  },
  {
    Skill_name: "JSON",
    Skill_src: "images/skills/json.png",
  },
  {
    Skill_name: "RESTFULL API",
    Skill_src: "images/skills/restfull.png",
  },
  {
    Skill_name: "ES6",
    Skill_src: "images/skills/ES6.png",
  },
  {
    Skill_name: "REACT JS",
    Skill_src: "images/skills/react.png",
  },
  {
    Skill_name: "REDUX",
    Skill_src: "images/skills/redux.png",
  },
  {
    Skill_name: "GITHUB",
    Skill_src: "images/skills/github-mark.png",
  },
  {
    Skill_name: "NPM",
    Skill_src: "images/skills/npm.png",
  },
  {
    Skill_name: "VSCode",
    Skill_src: "images/skills/vscode.png",
  },

]


// let Skills_container = document.querySelector('.Skills_container');
function displaySkillsItems() {  
  Skills_container.innerHTML = ``
  skills_arr.forEach((item) => {
    let Counter = 0;
    Skills_container.innerHTML += `
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-2" data-aos="fade-in" data-aos-delay="${200}" data-aos-duration="1000">
                <div class=" p-2 skill_container">
                    <img src="${item.Skill_src}" class="img-fluid"   alt="">
                    <span>${item.Skill_name}</span>
                </div>
            </div>`
  });


  console.log("Skills Data has been displayed in html showed");
}


displaySkillsItems();









// ! ////////////////// display Items projects section ///////////////////////////////
projects_data = [
  {
    project_img:"images/projects/cars.png",
    project_demo_link:"https://mostafaemad228.github.io/cars/",
    project_code_link:"https://github.com/Mostafaemad228/cars",
  },
  {
    project_img: "images/projects/Glowing.png",
    project_demo_link: "https://mostafaemad228.github.io/makeup-glowing-website/",
    project_code_link: "https://github.com/Mostafaemad228/makeup-glowing-website",
  },
  {
    project_img: "images/projects/Coffee.png",
    project_demo_link: "https://mostafaemad228.github.io/Coffe-website/",
    project_code_link: "https://github.com/Mostafaemad228/coffe-website",
  },
  {
    project_img: "images/projects/calculator.PNG",
    project_demo_link: "https://mostafaemad228.github.io/calculator/",
    project_code_link: "https://github.com/Mostafaemad228/calculator",
  },
  {
    project_img: "images/projects/age.PNG",
    project_demo_link: "https://mostafaemad228.github.io/Calculate_Age-app/",
    project_code_link: "https://github.com/Mostafaemad228/Calculate_Age-app",
  },
  {
    project_img: "images/projects/azkar.PNG",
    project_demo_link: "https://mostafaemad228.github.io/Azkar/",
    project_code_link: "https://github.com/Mostafaemad228/Azkar",
  },
];


let c = 1 ;
let dur = 200;

function displayProjectsItems() {
  projects_container.innerHTML = ``
  for (let i = 0; i < projects_data.length; i++) {
    projects_container.innerHTML +=`
                  <div class="col-lg-4 p-3 mt-5 mb-3 text-center " data-aos="fade-in" data-aos-delay="${dur+200}" data-aos-duration="1400" >
                         <h3 class="Project_num"> ${c++} </h3>
                         <div class="col-lg-12 p-0  project  ">
                            <div class="Project_inner shadow ">
                                <div class="image_container" style="background-image: url('${projects_data[i].project_img}')"> </div> 
                                <div class="overlay text-light d-flex justify-content-center align-items-center flex-row">
                                    <a href="${projects_data[i].project_demo_link}" target="_blank">
                                        <button class="Projects_btns">  <span> Demo 🔥  </span> </button>
                                    </a>
                                    <a href="${projects_data[i].project_code_link}" target="_blank">
                                        <button class="Projects_btns">  <span> code 💻</span>  </button> 
                                    </a> 
                                </div>
                            </div> 
                                       
                        </div>
                    </div>`
  
}
  console.log("Skills Data has been displayed in html showed");
}

displayProjectsItems();


  

  
  
  
  
  
  
  
  

  
  
  
  
  