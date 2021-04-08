window.addEventListener("scroll", ()=>{
	let mainNav = document.querySelector('.main-nav');
	let linksColor = document.querySelector('.nav-list');
	linksColor.classList.toggle("on-scroll", window.scrollY > 130);
	mainNav.classList.toggle("nav-fixed", window.scrollY > 130);
});


// let projectslist = document.getElementById('myDIV');
let list = document.querySelector('.projects-list');
let btns = document.querySelectorAll('.projects-li');
	btns.forEach(btn =>{
		btn.addEventListener("click", function(){
			// alert("message?: DOMString");
			list.querySelector('.active').classList.remove('active');
			btn.classList.add('active');
		});
});