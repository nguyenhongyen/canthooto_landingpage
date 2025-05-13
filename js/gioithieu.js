$(document).ready(function () {
	if ($('#slideWhy').length > 0) {
		new Swiper("#slideWhy", {
			slidesPerView: 1,
			spaceBetween: 30,
			mousewheel: true,
			centerSlides: true,
			autoplay: 5000,
			autoplayDisableOnInteraction: false,
		});
	}
})
