jQuery( document ).ready( function( $ ) {
	
		$('body').addClass('js');
		  var $menu = $('#menu'),
		  	  $menulink = $('.menu-link'),
		  	  $menuTrigger = $('.has-submenu');

		$menulink.click(function(e) {
			e.preventDefault();
			//alert("here");
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
			//
		});

		$menuTrigger.click(function(e) {
			e.preventDefault();
			//alert("there");
			var $this = $(this);
			if($this.hasClass('active')){
				$this.removeClass("active");
				$this.next('ul').removeClass("active");
			}else{
				$('.menu ul').removeClass('active');
				//alert($this.parent().parent().attr('class'));
				$this.parent().parent().addClass('active');
				$this.toggleClass('active').next('ul').toggleClass('active');
			}//if($this.hasClass('active'))
		});
});