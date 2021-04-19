//projects list

const projects = [
	{
		id: 1,
		img: "./projects/qoqa.jpg",
		githubSrc: "https://github.com/abdullahBalti/qoqa",
		liveView: "https://qoqa.netlify.app/",
		decs: "Full responsive Redevelop form qoqa.ch using Html5 css3 javascript bootstrap.",
		category:"Html5 Css3 Js"
	},
	{
		id: 2,
		img: "./projects/projects_2.jpg",
		githubSrc: "https://github.com/abdullahBalti/aroma",
		liveView: "https://abdullahbalti.github.io/aroma/",		
		decs: "Full responsive Psd to Frontend Development using Html5 css3 javascript",
		category:"Html5 Css3 Js"
	},
	{
		id: 3,
		img: "./projects/projects_3.jpg",
		githubSrc: "https://github.com/abdullahBalti/Styler-shop",
		liveView: "https://abdullahbalti.github.io/Styler-shop/",		
		decs: "Full responsive E-commerce Psd to Frontend Development using Html5 css3 javascript",	
		category:"Html5 Css3 Js"
	},	
	{
		id: 4,
		img: "./projects/sass1.jpg",
		githubSrc: "https://github.com/abdullahBalti/constructioncompany",
		liveView: "https://eager-beaver-7ff42d.netlify.app/",		
		decs: "This PSD design converting web template using html5 or scss for learning.",
		category:"Sass"
	},
	{
		id: 5,
		img: "./projects/sass2.jpg",
		githubSrc: "https://github.com/abdullahBalti/directone",
		liveView: "https://youthful-mirzakhani-263d92.netlify.app/",		
		decs: "This PSD design converting web template using html5 or scss for learning",
		category:"Sass"
	},
	{
		id: 6,
		img: "./projects/education.jpg",
		githubSrc: "https://github.com/abdullahBalti/education",
		liveView: "https://abdullahbalti.github.io/education/",		
		decs: "Full responsive Psd to Frontend Development using Html5 Bootstrap css3 javascript",
		category:"Bootstrap"
	},
	{
		id: 7,
		img: "./projects/course.jpg",
		githubSrc: "https://github.com/abdullahBalti/course",
		liveView: "https://loving-raman-68c910.netlify.app/",		
		decs: "Full responsive Psd to Frontend Development using Html5 Bootstrap css3 javascript",
		category:"Bootstrap"
	},
	{
		id: 8,
		img: "./projects/skyBooking.jpg",
		githubSrc: "https://github.com/abdullahBalti/skyBooking",
		liveView: "https://abdullahbalti.githu/",
		decs: "Full responsive Psd to Frontend Development using Html5 Bootstrap css3 javascript",
		category:"Bootstrap"
	},
	{
		id: 9,
		img: "./projects/jsShoppingCart.jpg",
		githubSrc: "https://github.com/abdullahBalti/javascriptShoppingCart",
		liveView: "https://abdullahbalti.github.io/javascriptShoppingCart/",		
		decs: "Fetch data form fakestoreapi.com or Design website Temp and then add products to cart and local storage and calculate products price and delete products form cart.",
		category:"JavaScript"
	},
	{
		id: 10,
		img: "./projects/profile.jpg",
		githubSrc: "https://github.com/abdullahBalti/Profile",
		liveView: "https://stoic-einstein-f0ae91.netlify.app/",		
		decs: "Javascript Html5 Css3 Profile website complete designing and frontend developing custom. all static data store in side app.js.",
		category:"JavaScript"
	},
];

// get parent element
const projectsContainer = document.querySelector(".projects-container");
const sortBtn = document.querySelectorAll(".sort-btn");

window.addEventListener("DOMContentLoaded", function () {
  diplayProjects(projects);
  // displayMenuButtons();
});

//sorting category button
sortBtn.forEach(function (btn) {
	btn.addEventListener("click", function(e){
		// console.log(e.currentTarget.dataset.id);
		const category = e.currentTarget.dataset.id;
		const menuCategory = projects.filter(function(project){
			// console.log(project.category);
			if (project.category === category) {
				return project;
			}
		});
		diplayCategory(menuCategory);		
		function diplayCategory(menuCategory) {
		  let displayProject = menuCategory.map(function (project) {
			    return `<div class="projects-item">
						<img src="${project.img}" alt="">
						<div class="on-hvoer">
							<ul class="hove-list" align="center">
								<li>
									<a href="${project.githubSrc}">
									<i class="fab fa-github"></i>&nbsp;&nbsp;View Sorce Code</a>
								</li>
								<li>
									<a href="${project.liveView}">
									<i class="far fa-browser"></i>&nbsp;&nbsp;Live Website</a>
								</li>
							</ul>
						</div>
						<div class="about-projects" align="center">
							<p>${project.decs}</p>
						</div>
					</div>`;					
		  });
		  displayProject = displayProject.join("");
		  // console.log(displayMenu);
		  projectsContainer.innerHTML = displayProject; 
		}

	});
});


function diplayProjects(projects) {
  let displayProject = projects.map(function (project) {
			if (project.category === 'Html5 Css3 Js') {
			    return `<div class="projects-item">
							<img src="${project.img}" alt="">
							<div class="on-hvoer">
								<ul class="hove-list" align="center">
									<li>
										<a href="${project.githubSrc}">
										<i class="fab fa-github"></i>&nbsp;&nbsp;View Sorce Code</a>
									</li>
									<li>
										<a href="${project.liveView}">
										<i class="far fa-browser"></i>&nbsp;&nbsp;Live Website</a>
									</li>
								</ul>
							</div>
							<div class="about-projects" align="center">
								<p>${project.decs}</p>
							</div>
						</div>`;
			}  	
  });
  displayProject = displayProject.join("");
  // console.log(displayMenu);
  projectsContainer.innerHTML = displayProject; 
}