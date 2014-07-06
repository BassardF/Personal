/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  

(function($) {

	/*---------------------------------------------------- */
  	/* Preloader
   ------------------------------------------------------ */ 
  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();     
      
    	$('.js #hero .hero-image img').addClass("animated fadeInUpBig"); 
      $('.js #hero .buttons a.trial').addClass("animated shake");    

  	}) 


  	/*---------------------------------------------------- */
  	/* Mobile Menu
   ------------------------------------------------------ */  
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "Menu",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  

  	/* id JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function(){
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function(){      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('h1.responsive-headline').fitText(1.2, { minFontSize: '25px', maxFontSize: '40px' });

  	}, 100);


  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


  	/*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#nav-wrap a");

	sections.waypoint( {

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'
	});


	/*----------------------------------------------------*/
  	/* FitVids
  	/*----------------------------------------------------*/
   $(".fluid-video-wrapper").fitVids();


   /*----------------------------------------------------*/
  	/* Waypoints Animations
   ------------------------------------------------------ */
  	$('.js .design').waypoint(function() {
   	$('.js .design .feature-media').addClass( 'animated pulse' );    
  	}, { offset: 'bottom-in-view' });

  	$('.js .responsive').waypoint(function() {
   	$('.js .responsive .feature-media').addClass( 'animated pulse' );    
  	}, { offset: 'bottom-in-view' });

  	$('.js .cross-browser').waypoint(function() {
   	$('.js .cross-browser .feature-media').addClass( 'animated pulse' ); 
  	}, { offset: 'bottom-in-view' });

  	$('.js .video').waypoint(function() {
   	$('.js .video .feature-media').addClass( 'animated pulse' );     
  	}, { offset: 'bottom-in-view' });

  	$('.js #subscribe').waypoint(function() {
   	$('.js #subscribe input[type="email"]').addClass( 'animated fadeInLeftBig show' ); 
    	$('.js #subscribe input[type="submit"]').addClass( 'animated fadeInRightBig show' );   
  	}, { offset: 'bottom-in-view' });

  	
  	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
  	$('.flexslider').flexslider({
   	namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 12000,
      animationSpeed: 600,
      randomize: false,
   });


   /*----------------------------------------------------*/
   /* ImageLightbox
   /*----------------------------------------------------*/

   if($("html").hasClass('cssanimations')) {

      var activityIndicatorOn = function()
      {
       	$( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
      },
      activityIndicatorOff = function()
      {
       	$( '#imagelightbox-loading' ).remove();
      },

      overlayOn = function()
      {
       	$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
      },
      overlayOff = function()
      {
       	$( '#imagelightbox-overlay' ).remove();
      },

      closeButtonOn = function( instance )
      {
       	$( '<a href="#" id="imagelightbox-close" title="close"><i class="fa fa fa-times"></i></a>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
      },
      closeButtonOff = function()
      {
       	$( '#imagelightbox-close' ).remove();
      },

      captionOn = function()
      {
      	var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
        	if( description.length > 0 )
         	$( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );        
      },
      captionOff = function()
      {
       	$( '#imagelightbox-caption' ).remove();
      };     

      var instanceA = $( 'a[data-imagelightbox="a"]' ).imageLightbox(
      {
         onStart:   function() { overlayOn(); closeButtonOn( instanceA ); },
         onEnd:     function() { overlayOff(); captionOff(); closeButtonOff(); activityIndicatorOff(); },
         onLoadStart: function() { captionOff(); activityIndicatorOn(); },
         onLoadEnd:   function() { captionOn(); activityIndicatorOff(); }

      });
        
    }      
    else {
         
      /*----------------------------------------------------*/
   	/* prettyPhoto for old IE
   	/*----------------------------------------------------*/
      $("#screenshots").find(".item-wrap a").attr("rel","prettyPhoto[pp_gal]");

      $("a[rel^='prettyPhoto']").prettyPhoto( {

      	animation_speed: 'fast', /* fast/slow/normal */
      	slideshow: false, /* false OR interval time in ms */
      	autoplay_slideshow: false, /* true/false */
      	opacity: 0.80, /* Value between 0 and 1 */
      	show_title: true, /* true/false */
      	allow_resize: true, /* Resize the photos bigger than viewport. true/false */
      	default_width: 500,
      	default_height: 344,
      	counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
      	theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
      	hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
      	wmode: 'opaque', /* Set the flash wmode attribute */
      	autoplay: true, /* Automatically start videos: True/False */
      	modal: false, /* If set to true, only the close button will close the window */
      	overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
      	keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
      	deeplinking: false,
      	social_tools: false

      }); 

    }

    /*----------------------------------------------------*/
   /* Messi
   /*----------------------------------------------------*/

    var MESSI = {
      sport : "<p>Sport has always been a very important part of my life. I started this 'addiction' when young with swimming, skating and roller skating.</p><p>I have had the good fortune of growing up in a spaceful environment and sport was a perfect way to spend time outdoor with my friends.</p><p>Since then, I've developed other interests in sports such as performance, competition and health gain. Apart from physical enjoyment, I always go in for sport in view of a concrete goal. By setting successive goals and keeping in mind the long term one, I maintain the motivation without losing sight of what I want to achieve.  In short, I see sport as the key to an active and balanced life as well as a means to get to know people.</p><p>Over the years, I practiced swimming, running, judo, weight lifting, fitness, American football and soccer. Currently, I'm essentially focused on crossfit and physical improvement in general.</p><p>I also see sport as a way to get to know yourself by achieving a better understanding of what one's is really capable of. It helped me to understand that one is responsible for the pursuit of one's own happyness.</p>",
      photo : "<p>Photography is a brand new hobby of mine. I first started while travelling and hiking in beautiful places of which I wanted to render its particular characteristics. At the same time, I felt limited in the field of web design by lack of skills in picture manipulation.</p> <p>Increasing my knowledge of photography allows me both to render faithfully what I enjoyed seeing and to improve myself in web design.</p><p>I started with a quick blast through every technical fact, from a scientific point of view. Then, I immersed myself in tutorials and gathered information from different sources. I am putting into practice all the theory I just learned and am getting as much fun as possible from doing it.</p><p>In a next step, I aim to share my work with the community looking for feedback to improve my technical skills.</p>",
      nutrition : "<p>Understanding and mastering nutrition have a quick and stunning effect on the way one feels. I started thinking about nutrition to improve my performance in sports and I was surprised to discover it had many other benefits.</p><p>Most of the people who are getting into nutrition are focused on one goal, which is key to stay motivated but they miss out on the many other benefits.</p><p>Personally, I wanted to get stronger and leaner but it also provided me:</p><ul><li> - More energy <li><li> - Great health benefits <li><li> - Skills in cooking <li><li> - Understanding of the food industry <li><li> - Knowledge of yourself and your body <li><li> - An improved average mood <li> </ul> <p>I don't consider myself as 'being what I eat' but nutrition definitively brings me benefits I am not willing to do without.</p>",
      gaming : "<p>Gaming is often seen as a funny way to spend your time. Truth is, I have never seen it that way. I my mind, gaming is all about social skills and competitiveness.</p><p>I'm reducing my implication but I have no regrets about all the time I have spent playing games. Gaming is a great way to develop reactivity, strategy, social habits and focus. Moreover, gaming is about struggling to reach your goals. Being top world in a certain type of games isn’t given to everyone. It shows talent, learning skills and dedication.</p><p>From 7 to 22 I went in for all of the following games, being highly ranked on the French scene for some of them:</p><ul><li> - Counter Strike </li><li> - Warcraft III </li><li> - Starcraft I </li><li> - Diablo II </li><li> - World Of Warcraft </li><li> - Starcraft II </li><li> - Diablo III </li> </ul> <p>Yes, I know, I'm a blizzard fan :)</p>",

      trigger : function(content, title){
        new Messi(content, {title: title});
      },
      events : function(){
        $("#photo").click(function(){
          MESSI.trigger(MESSI.photo, "Photography");
        });
        $("#sport").click(function(){
          MESSI.trigger(MESSI.sport, "Sports");
        });
        $("#nutrition").click(function(){
          MESSI.trigger(MESSI.nutrition, "Nutrition");
        });
        $("#gaming").click(function(){
          MESSI.trigger(MESSI.gaming, "Gaming");
        });
      }
    }

    MESSI.events();

})(jQuery);