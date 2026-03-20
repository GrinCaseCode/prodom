$(document).ready(function () {

	setTimeout(function () {
		$(".preloader").fadeOut(200);
		$("body").removeClass("no-scroll");
	}, 1000);

	if ($('#fullpage').length > 0) {
		$('#fullpage').fullpage({
			normalScrollElements: '.header',
			responsiveHeight: 600,
			responsiveWidth: 1200,
			scrollingSpeed: 800,
		});
	}

	$('.btn-up').on('click', function() {
    $.fn.fullpage.moveTo(1);
});

//questions
$(".item-question__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
    $(this).parent().siblings(".item-question").removeClass("active");
    $(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
  });

	//слайдеры

	$('.slider-billbord').slick({
		arrows: false,
		dots: false,
		infinite: true,
		  autoplay: true,
  	autoplaySpeed: 4000,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
	});

	$('.slider-three').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.slider-two').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.slider-marquee').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		variableWidth: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.32752 9.41077L7.16085 3.57743C7.31802 3.42563 7.52852 3.34164 7.74702 3.34354C7.96552 3.34544 8.17453 3.43308 8.32903 3.58758C8.48354 3.74209 8.57118 3.9511 8.57308 4.1696C8.57498 4.3881 8.49098 4.5986 8.33919 4.75577L3.92835 9.1666H18.5834C18.8044 9.1666 19.0163 9.2544 19.1726 9.41068C19.3289 9.56696 19.4167 9.77892 19.4167 9.99993C19.4167 10.2209 19.3289 10.4329 19.1726 10.5892C19.0163 10.7455 18.8044 10.8333 18.5834 10.8333H3.92835L8.33919 15.2441C8.41878 15.321 8.48226 15.4129 8.52594 15.5146C8.56961 15.6163 8.5926 15.7256 8.59356 15.8363C8.59452 15.9469 8.57344 16.0566 8.53154 16.1591C8.48964 16.2615 8.42776 16.3545 8.34951 16.4328C8.27127 16.511 8.17823 16.5729 8.07582 16.6148C7.9734 16.6567 7.86367 16.6778 7.75302 16.6768C7.64237 16.6758 7.53302 16.6529 7.43135 16.6092C7.32968 16.5655 7.23773 16.502 7.16085 16.4224L1.32752 10.5891C1.17129 10.4328 1.08353 10.2209 1.08353 9.99993C1.08353 9.77896 1.17129 9.56704 1.32752 9.41077Z" fill="white"/></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1725 9.41077L13.3391 3.57743C13.182 3.42563 12.9715 3.34164 12.753 3.34354C12.5345 3.34544 12.3255 3.43308 12.171 3.58758C12.0165 3.74209 11.9288 3.9511 11.9269 4.1696C11.925 4.3881 12.009 4.5986 12.1608 4.75577L16.5716 9.1666H1.91665C1.69563 9.1666 1.48367 9.2544 1.32739 9.41068C1.17111 9.56696 1.08331 9.77892 1.08331 9.99993C1.08331 10.2209 1.17111 10.4329 1.32739 10.5892C1.48367 10.7455 1.69563 10.8333 1.91665 10.8333H16.5716L12.1608 15.2441C12.0812 15.321 12.0177 15.4129 11.9741 15.5146C11.9304 15.6163 11.9074 15.7256 11.9064 15.8363C11.9055 15.9469 11.9266 16.0566 11.9685 16.1591C12.0104 16.2615 12.0722 16.3545 12.1505 16.4328C12.2287 16.511 12.3218 16.5729 12.4242 16.6148C12.5266 16.6567 12.6363 16.6778 12.747 16.6768C12.8576 16.6758 12.967 16.6529 13.0687 16.6092C13.1703 16.5655 13.2623 16.502 13.3391 16.4224L19.1725 10.5891C19.3287 10.4328 19.4165 10.2209 19.4165 9.99993C19.4165 9.77896 19.3287 9.56704 19.1725 9.41077Z" fill="white"/></svg></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					speed: 15000,
				}
			}
		]
	});

	$('.item-card__slider').on('init', function (event, slick) {
		const $slider = $(this);
		const $dots = $slider.find('.slick-dots');

		if ($dots.length) {
			const $dotsHover = $dots.clone()
				.removeClass('slick-dots')
				.addClass('slick-dots-hover');

			$slider.append($dotsHover);
		}
	});

	$('.item-card__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
	});

	$('.item-card__slider').on('afterChange', function (event, slick, currentSlide) {
		const $slider = $(this);
		const $hoverDots = $slider.find('.slick-dots-hover li');

		$hoverDots
			.removeClass('slick-active')
			.eq(currentSlide)
			.addClass('slick-active');
	});

	$(document).on('mouseenter', '.item-card__slider .slick-dots-hover li', function () {
		const $dot = $(this);
		const index = $dot.index();
		const $slider = $dot.closest('.item-card__slider');

		if ($dot.hasClass('slick-active')) return;

		$slider.slick('slickGoTo', index);
	});

	var $slider = $('.etaps-wrap');

		function initMobileSlider() {
			var windowWidth = $(window).width();

			if (windowWidth <= 992) {
				if (!$slider.hasClass('slick-initialized')) {
					$slider.slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false,
						infinite: true,
						adaptiveHeight: true
					});
				}
			} else {
				if ($slider.hasClass('slick-initialized')) {
					$slider.slick('unslick');
				}
			}
		}

		initMobileSlider();

		$(window).on('resize', function() {
			initMobileSlider();
		});


	$(".input-phone").mask("+7 (999) 999-99-99");

	$('.tabs li a').click(function (event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents("section").find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$(this).parents("section").find(".tab-pane").find(".slider-two").slick('setPosition');
		$(this).parents("section").find(".tab-pane").find(".slider-three").slick('setPosition');
		$(this).parents("section").find(".tab-pane").find(".item-card__slider").slick('setPosition');
	});

	{
		if ($(window).width() > 992) {
			$('.tabs-steps li a').on('mouseenter', function(event) {
			event.preventDefault();
			$(this).parent().parent().find("li").removeClass('active');
			$(this).parent().addClass('active');
			$(this).parents("section").find(".tab-pane-steps").fadeOut(0);
			var selectTab = $(this).attr("href");
			$(selectTab).fadeIn(0);
		});

		}
	}

	{
		if ($(window).width() < 992) {
			$('.tabs-steps li a').on('click', function(event) {
			event.preventDefault();
			$(this).parent().parent().find("li").removeClass('active');
			$(this).parent().addClass('active');
			$(this).parents("section").find(".tab-pane-steps").fadeOut(0);
			var selectTab = $(this).attr("href");
			$(selectTab).fadeIn(200);
		});

		}
	}



	/*input file*/
	$("input[type='file']").change(function () {
		var filename_text = $(this).parent().siblings(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.html(filename);
	});

	{
		if ($(window).width() < 992) {
			//footer
			$(".footer__title").click(function () {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			});

			//flipper
			$('.flipper').click(function () {
				$(this).toggleClass('active');
				$(".flipper__text").fadeToggle(200);
			});

		}
	}

	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});

	//fixed video
	var e = $(".video-widget"),
		a = document.getElementById("video-widget__video");
	$(".video-widget__close").click(function (t) {
		return (
			t.preventDefault(),
			"default" == e.attr("data-state") ? e.hide() : (e.attr("data-state", "default"), (a.muted = !0)),
			!1
		);
	}),
		$(".video-widget__container").on("click", function (t) {
			"default" == e.attr("data-state")
				? (e.attr("data-state", "opened"), (a.currentTime = 0), (a.muted = !1))
				: (e.attr("data-state", "default"), (a.muted = !0));
		}),
		1024 < $(document).width() &&
		$(".video-widget__container").on("touchstart", function (t) {
			"default" == e.attr("data-state")
				? (e.attr("data-state", "opened"), (a.currentTime = 0), (a.muted = !1))
				: (e.attr("data-state", "default"), (a.muted = !0));
		}),
		$(document).mouseup(function (t) {
			e.is(t.target) ||
				0 !== e.has(t.target).length ||
				"default" == e.attr("data-state") ||
				(e.attr("data-state", "default"), (a.muted = !0));
		});


});

const circle = document.querySelector('.cursor-circle');

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

document.addEventListener('mousemove', (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

function animate() {
	posX += (mouseX - posX) * 0.1;
	posY += (mouseY - posY) * 0.1;

	circle.style.left = posX + 'px';
	circle.style.top = posY + 'px';

	requestAnimationFrame(animate);
}

animate();

function updateEtaps() {
    const container = document.querySelector('.etaps-wrap');
    const items = container.querySelectorAll('.item-etap');

    if (!items.length) return;

    const containerWidth = container.offsetWidth;
    const itemWidth = items[0].offsetWidth;
    const count = items.length;

    let shift = 0;

    if (count > 1) {
        const totalWidth = itemWidth * count;

        if (totalWidth > containerWidth) {
            shift = (totalWidth - containerWidth) / (count - 1);
        } else {
            shift = 0; // не накладываются вообще
        }
    }	

container.style.setProperty('--shift', shift + 'px');
}

updateEtaps();
window.addEventListener('resize', updateEtaps);