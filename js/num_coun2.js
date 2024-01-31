$(document).ready(function () {
// Counter To Count Number Visit
let a = 0;
$(window).scroll(function() {

  let oTop = $('#counter').offset().top - window.innerHeight;
  // Md.Asaduzzaman Muhid
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.number').each(function() {
        let $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 5000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    a = 1;// Md.Asaduzzaman Muhid
  }
});
});