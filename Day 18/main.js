const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".menu-items");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
	});
};

navSlide();

gsap.from(".workSelect", {
	// scrollTrigger: ".workSelect",
	y: 500,
	duration: 1,
	stagger: 0.1,
	ease: "back-in",
	scrub: 3,
	// scrub: 3,
});

gsap.from(".intro", {
	x: -1000,
	duration: 0.5,
	stagger: 0.2,
	ease: "back-in",
});
