// this script makes some visual tweaks to the features/platform/* left side nav
$(function() {
	$(window).scroll(function() {
		var nav = $('#products-platform-navig');
		var position=nav.position();
		if(nav.css('position')=='fixed' && 	$(window).scrollTop()<=164) {
			nav.css('position','static');
			return;
		}
		if($(window).scrollTop() > position.top && $(window).scrollTop()!=position.top) {
			nav.css('top','0px');
			nav.css('position','fixed');
		}
	});
	
});
