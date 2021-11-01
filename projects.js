//projects list

const projects = [
	{
		id: 1,
		img: "./projects/callCenter.jpg",
		githubSrc: "https://www.figma.com/community/file/1026900218146519721",		
		liveView: "https://www.figma.com/proto/eVpBDQzpnqdzmiI27jqInO/WebTest?page-id=0%3A1&node-id=18%3A223&viewport=241%2C48%2C0.18&scaling=min-zoom",
		decs: "Full responsive Redevelop form qoqa.ch using Html5 css3 javascript bootstrap.",
		category:"Ui Ux Design"
	},
	{
		id: 2,
		img: "./projects/drConsult.jpg",
		githubSrc: "#",
		liveView: "#",		
		decs: "Full responsive Psd to Frontend Development using Html5 css3 javascript",
		category:"Ui Ux Design"
	},
	{
		id: 3,
		img: "./projects/sommet.jpg",
		githubSrc: "#",
		liveView: "#",		
		decs: "Full responsive E-commerce Psd to Frontend Development using Html5 css3 javascript",	
		category:"Ui Ux Design"
	},	
	{
		id: 4,
		img: "./projects/qoqa.jpg",
		githubSrc: "https://github.com/abdullahBalti/qoqa",
		liveView: "https://qoqa.netlify.app/",		
		decs: "This PSD design converting web template using html5 or scss for learning.",
		category:"Frontend Development"
	},
	{
		id: 5,
		img: "./projects/projects_2.jpg",
		githubSrc: "https://github.com/abdullahBalti/aroma",
		liveView: "https://abdullahbalti.github.io/aroma/",		
		decs: "Full responsive Psd to Frontend Development using Html5 css3 javascript",
		category:"Frontend Development"
	},
	{
		id: 6,
		img: "./projects/projects_3.jpg",
		githubSrc: "https://github.com/abdullahBalti/Styler-shop",
		liveView: "https://abdullahbalti.github.io/Styler-shop/",		
		decs: "Full responsive E-commerce Psd to Frontend Development using Html5 css3 javascript",	
		category:"Frontend Development"
	},
	{
		id: 8,
		img: "./projects/education.jpg",
		githubSrc: "#",
		liveView: "#",		
		decs: "Full responsive Psd to Frontend Development using Html5 Bootstrap css3 javascript",
		category:"React Js"
	},
	{
		id: 9,
		img: "./projects/course.jpg",
		githubSrc: "#",
		liveView: "#",		
		decs: "Full responsive Psd to Frontend Development using Html5 Bootstrap css3 javascript",
		category:"React Js"
	},
	{
		id: 10,
		img: "./projects/skyBooking.jpg",
		githubSrc: "#",
		liveView: "#",
		decs: "Full responsive Psd to Frontend Development using Html5 Bootstrap css3 javascript",
		category:"React Js"
	},
	{
		id: 11,
		img: "./projects/jsShoppingCart.jpg",
		githubSrc: "https://github.com/abdullahBalti/javascriptShoppingCart",
		liveView: "https://abdullahbalti.github.io/javascriptShoppingCart/",		
		decs: "Fetch data form fakestoreapi.com or Design website Temp and then add products to cart and local storage and calculate products price and delete products form cart.",
		category:"JavaScript"
	},
	{
		id: 12,
		img: "./projects/profile.jpg",
		githubSrc: "https://github.com/abdullahBalti/Profile",
		liveView: "https://stoic-einstein-f0ae91.netlify.app/",		
		decs: "Javascript Html5 Css3 Profile website complete designing and frontend developing custom. all static data store in side app.js.",
		category:"JavaScript"
	},	
	{
		id: 4,
		img: "./projects/sass1.jpg",
		githubSrc: "#",
		liveView: "#",		
		decs: "This PSD design converting web template using html5 or scss for learning.",
		category:"wordpress"
	},
	{
		id: 5,
		img: "./projects/sass2.jpg",
		githubSrc: "#",
		liveView: "#",		
		decs: "This PSD design converting web template using html5 or scss for learning",
		category:"wordpress"
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
							<p>${/* project.decs*/'' }</p>
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
			if (project.category === 'Ui Ux Design') {
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
								<p>${/* project.decs */'' } </p>
							</div>
						</div>`;
			}  	
  });
  displayProject = displayProject.join("");
  // console.log(displayMenu);
  projectsContainer.innerHTML = displayProject; 
}