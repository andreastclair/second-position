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
  // $(this).addClass('hide-img');
  backdrop.hide();
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









































});
