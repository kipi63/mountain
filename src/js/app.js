const navMenu= document.querySelector(".nav__menu");
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelectorAll('.nav__link');

function mobileMenu() {
	hamburger.classList.toggle("activet");
	navMenu.classList.toggle("activet");

}
function closeMenu() {
	hamburger.classList.remove("activet");
	navMenu.classList.remove("activet");

}
hamburger.addEventListener("click" ,mobileMenu);

navLink.forEach(n=>n.addEventListener("click" ,closeMenu))





let slideIndex =1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex +=n);
}

function currentSlide(n ){
	showSlides(slideIndex =n);
}

function showSlides(n) {
	let i ;
	let slides =document.getElementsByClassName("reviews__none");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex =1}
	if (n<1){slideIndex =slides.length}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for ( i = 0 ; i < dots.length; i++) {
		dots[i].className =dots[i].className.replace("active" , "")
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].classname += "active";
}


