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
});



// $(document).ready(function(){
// 		$('.slider').slick({
// 			$('.single-item').slick();
// 		// setting-name: setting-value
// 		 });
// });
