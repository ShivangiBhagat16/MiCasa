var btn = document.getElementsByClassName("item");
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function(){
            
            if (this.classList.contains('active')) {
                this.classList.add('deactive');
                this.classList.remove('active');
            } else if (this.classList.contains('deactive')) {
                this.classList.add('active');
                this.classList.remove('deactive');
            }
            
            for(var k=0; k<btn.length; k++){
                if(btn[k] != this) {
                    btn[k].classList.remove('active');
                    btn[k].classList.add('deactive');
                } 
            }
        })
    }

    function checkIfFilterApplied() {
        var isFilterApplied = false;
        for (var i = 0; i < btn.length; i++) {
            if ((i != 0) && btn[i].classList.contains('active')) {
                isFilterApplied = true;
            }
        }
        if (!isFilterApplied) {
            document.querySelector('nav.owl-filter-bar').children[0].click();
        }
    }

    var owl = $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:1
            },
            500:{
                items:2
            },
            700:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $( '.owl-filter-bar' ).on( 'click', '.item', function() {

    var $item = $(this);
    var filter = $item.data( 'owl-filter' )
    owl.owlcarousel2_filter( filter );

    checkIfFilterApplied();

    } )