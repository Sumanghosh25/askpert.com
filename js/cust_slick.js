// homepage slider js
$(document).ready(function () {
  $('.testn_wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(".prev-btn").click(function () {
		$(".testn_wrap").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".testn_wrap").slick("slickNext");
	});
});


// homepage slider js logo-markqu
jQuery(document).ready(function($) {
  $('.logo_wrap').slick({
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    slidesToShow: 1,
    draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
    });
  });


// service-single testnimolas  slider js

$(document).ready(function () {
$('.testnimolias').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:1199,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }
  ]

});
$(".prev-btn").click(function () {
  $(".testnimolias").slick("slickPrev");
});

$(".next-btn").click(function () {
  $(".testnimolias").slick("slickNext");
});
});
