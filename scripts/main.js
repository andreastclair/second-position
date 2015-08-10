$(document).ready(function(){
	$('.favorite').click(function(){
		if(!$(this).hasClass('iLoveIt')){
			$(this).addClass('iLoveIt');
			$(this).attr('src', 'images/favorite-yellow.png');
			// $(this).attr('src', '/images/favorite.svg');

		}
		else {
			$(this).removeClass('iLoveIt');
			$(this).attr('src', 'images/favorite.png');
		}
	})

	// SIZE CHART

var show = $('.show-more');
var hide = $('.hide-modal');
var backdrop = $('.modal-backdrop');

show.click(function(){
	showMore();
});

hide.click(function(){
	hideModal();
})

function hideModal() {
	backdrop.hide();
}

$('.modal-backdrop img').click(function(){
  $(this).addClass('hide-img');
})

hide.click(function(){
  $('.modal-backdrop img').removeClass('hide-img');
})

function showMore() {
	backdrop.show();
}

function showText() {
  show.html('show more');
}

function hideText() {
  show.html('hide more');
}



$('iframe').hide();


$('.play').click(function(){
	$('.play-box').hide();
	$(this).hide();
	$('.intro').hide();
	$('iframe').show();
	// $("iframe#ytplayer").attr("src", $("iframe#ytplayer").attr("src").replace("autoplay=0", "autoplay=1"));
	// $("iframe")[0].src += "&autoplay=1";
	// $(this).unbind("click")

})





































});
