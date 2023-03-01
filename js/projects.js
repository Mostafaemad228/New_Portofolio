/* 1. Proloder */
$(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(850).css({
        'overflow': 'visible'
    });
})


// ! ///////////////////////// Projects Data  ///////////////////////////

const all_projects = document.querySelector('.all_projects') 


all_projects_data = [
    {
        project_img: "images/projects/All_icons/icons8-quran-64.png",
        project_name: "Azkar Ap",
        project_demo_link: "https://mostafaemad228.github.io/Azkar/",
        project_code_link: "https://github.com/Mostafaemad228/Azkar",
    },
    {
        project_img: "images/projects/All_icons/icons8-calculator-64.png",
        project_name: "calculator",
        project_demo_link: "https://mostafaemad228.github.io/calculator/",
        project_code_link: "https://github.com/Mostafaemad228/calculator",
    },
    {
        project_img: "images/projects/All_icons/icons8-think-60.png",
        project_name: "guess number game",
        project_demo_link: "https://mostafaemad228.github.io/guess_the_number_game/",
        project_code_link: "https://github.com/Mostafaemad228/guess_the_number_game",
    },
    {
        project_img: "images/projects/All_icons/icons8-makeup-64.png",
        project_name: "Glowing Website ",
        project_demo_link: "https://mostafaemad228.github.io/makeup-glowing-website/",
        project_code_link: "https://github.com/Mostafaemad228/makeup-glowing-website",
    },
    {
        project_img: "images/projects/All_icons/icons8-coffee-pot-64.png",
        project_name: "Kahwa website",
        project_demo_link: "https://mostafaemad228.github.io/coffee-website/",
        project_code_link: "https://github.com/Mostafaemad228/coffe-website",
    }, {
        project_img: "images/projects/All_icons/icons8-app-64.png",
        project_name: "App webSite",
        project_demo_link: "https://mostafaemad228.github.io/elmanar-app/",
        project_code_link: "https://github.com/Mostafaemad228/elmanar-app",
    },
    {
        project_img: "images/projects/All_icons/icons8-age-64.png",
        project_name: "Calculate_Age-app ",
        project_demo_link: "https://mostafaemad228.github.io/Calculate_Age-app/",
        project_code_link: "https://github.com/Mostafaemad228/Calculate_Age-app",
    },
    {
        project_img: "images/projects/All_icons/icons8-Asme100.png",
        project_name: " Asme website",
        project_demo_link: "https://mostafaemad228.github.io/Asme_Update_website/",
        project_code_link: "https://github.com/Mostafaemad228/Asme_Update_website",
    },
    {
        project_img: "images/projects/All_icons/icons8-cars-ecommerce-64.png",
        project_name: "Cardoor  websit",
        project_demo_link: "https://mostafaemad228.github.io/cars/",
        project_code_link: "https://github.com/Mostafaemad228/cars",
    },
    {
        project_img: "images/projects/All_icons/icons8-resturant-66.png",
        project_name: "Resturant design",
        project_demo_link: "https://mostafaemad228.github.io/resturant-design/",
        project_code_link: "https://github.com/Mostafaemad228/resturant-design",
    },
    {
        project_img: "images/projects/All_icons/icons8-portfolio-96.png",
        project_name: " Old Me",
        project_demo_link: "https://mostafaemad228.github.io/portofolio/",
        project_code_link: "https://github.com/Mostafaemad228/portofolio",
    },
    {
        project_img: "images/projects/All_icons/icons8-bench-64.png",
        project_name: "BenchMark",
        project_demo_link: "https://mostafaemad228.github.io/Benchmark/",
        project_code_link: "https://github.com/Mostafaemad228/Benchmark",
    },
    {
        project_img: "images/projects/All_icons/icons8-country-100.png",
        project_name: "country And borders Neighbour app",
        project_demo_link: "https://mostafaemad228.github.io/Country_and_Border_From_APi-/",
        project_code_link: "https://github.com/Mostafaemad228/Country_and_Border_From_APi-",
    },
    {
        project_img: "images/projects/All_icons/icons8-building-construction-48.png",
        project_name: " constructed",
        project_demo_link: "https://mostafaemad228.github.io/construction-landingPage/",
        project_code_link: "https://github.com/Mostafaemad228/construction-landingPage",
    },
    {
        project_img: "images/projects/All_icons/icons8-type-16.png",
        project_name: "Auto type (test) ",
        project_demo_link: "https://mostafaemad228.github.io/auto_type_effect/",
        project_code_link: "https://github.com/Mostafaemad228/auto_type_effect",
    },
   
    
    
    
];


let c = 1 ;
function displayAllProjectsItems() {
    all_projects.innerHTML = ``
    for (let i = 0; i < all_projects_data.length; i++) {
        all_projects.innerHTML +=`
                <div class=" AllProject_item mt-2 mb-3">
                    <!--////////// start ///////////-->
                    <div class="d-flex ">
                        <h1> ${c++} </h1>
                        <div class="p-2 projectsData ">
                            <img src="${all_projects_data[i].project_img}"  class="img-fluid project_link " alt=""> 
                             <span> ${all_projects_data[i].project_name} </span> 
                        </div>
                        
                        <div class="ml-auto projectslinks">
                            <a href="${all_projects_data[i].project_demo_link}" target="_blank"  tabindex="0" data-toggle="tooltip" title="demo">
                                <button class="btn btn-transparent text-light">
                                    <img src="images/projects/All_icons/icons8-link-100.png"  class="img-fluid project_link " alt=""> 
                                </button>
                            </a>
                           <a href="${all_projects_data[i].project_code_link}" target="_blank" tabindex="0" data-toggle="tooltip" title="github">
                                <button class="btn btn-transparent text-light">
                                    <img src="images/projects/All_icons/icons8-github-100.png"  class="img-fluid project_link " alt=""> 
                                </button>
                            </a>                       
                        </div>
                        
                    </div>
                    <!--////////// start ///////////-->

                </div>`

    }
    console.log("All Projects  Data has been displayed in html showed");
}

displayAllProjectsItems();










$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})