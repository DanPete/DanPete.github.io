// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1750, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict

var gif1 = document.getElementById('modal1gif').complete;

console.log(gif1)

$('#modal1gif').on('load', function () { $('#loading').hide(); });

$('#modal1').click(function(){
  var sr="http://i.imgur.com/31h2ccc.gif" + (new Date()).getTime();
  $('#modal1gif').attr('src', sr);
  if (gif1.naturalWidth){  console.log("yes")};
  $('#portfolioModal1').modal('show')
  $('#loading').hide();
});

$('#modal2').click(function(){
  var sr="http://i.imgur.com/0JrvW31.gif" + (new Date()).getTime();
  $('#modal2gif').attr('src', sr);
  $('#portfolioModal2').modal('show');
});

$('#modal3').click(function(){
  var sr="http://i.imgur.com/pU1d29N.gif" + (new Date()).getTime();
  $('#modal3gif').attr('src', sr);
  $('#portfolioModal3').modal('show');
});

$('#modal4').click(function(){
  var sr="http://i.imgur.com/x0WrB41.gif" + (new Date()).getTime();
  $('#modal4gif').attr('src', sr);
  $('#portfolioModal4').modal('show');
});

$('#modal5').click(function(){
  var sr="http://i.imgur.com/2NKVh6r.gif" + (new Date()).getTime();
  $('#modal5gif').attr('src', sr);
  $('#portfolioModal5').modal('show');
});

$('#modal6').click(function(){
  var sr="http://i.imgur.com/tGI2wkN.gif" + (new Date()).getTime();
  $('#modal6gif').attr('src', sr);
  $('#portfolioModal6').modal('show');
});

$('#modal2').click(function(){
  
});

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    $('#portfolioModal1').modal('hide');
  }   
});

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    $('#portfolioModal2').modal('hide');
  }   
});





// Unfocus social button
$(".btn-social").mouseup(function(){
    $(this).blur();
})