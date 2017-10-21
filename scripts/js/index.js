// poster frame click event
$(document).on('click','.js-videoPoster',function(ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');
  // hide poster
  $wrapper.addClass('videoWrapperActive');
  // add iframe src in, starting the video
  $iframe.attr('src',src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
  // if we're stopping all videos on page
  if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
  // if we're stopping a particular video
  } else {
    var $iframe = $wrapper.find('.js-videoIframe');
  }
  // reveal poster
  $wrapper.removeClass('videoWrapperActive');
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr('src','');
}

$(document).ready(function() {
	$('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".caret").css({"transform":"rotate(180deg)"});
	}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".caret").css({"transform":"rotate(0deg)"});
	});
	
	//preload images
	img1 = new Image();
	img1.src = "assets/img/skyviper-logo-hover.png";
  // Custom 
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top + 200;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };
  
  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');
    
    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });
    
    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
	var lastScroll;
	handleScroll();
	$(window).resize(function (event) {
		handleScroll();
	});
	$(window).scroll(function (event) {
		handleScroll();
	});
	function handleScroll()
	{
		var scroll = $(window).scrollTop();
		var max = $(document).height()-$(window).height();
		if(scroll!=lastScroll)
		{
			$(".site-header").css({'background-color': 'rgba(0,0,0,'+Math.min(.8,scroll/200)+')'});
			
			$(".site-header.desktop").css({'height': Math.max(5,Math.min(11,11-4*scroll/200))+"vw"});
			$(".site-header.mobile").css({'height': Math.max(10,Math.min(22,22-4*scroll/200))+"vw"});
			$(".site-header.desktop").css({'padding-top': Math.max(.5,Math.min(2,2-1*scroll/200))+"vw"});
			$(".site-header.mobile").css({'padding-top': Math.max(1.5,Math.min(2,2-1*scroll/200))+"vw"});
			$(".site-header.desktop .nav-item").css({'padding-top': Math.max(0,Math.min(.65,1*scroll/500))+"vw"});
			$(".site-header").css({'padding-bottom': Math.max(.5,Math.min(2,2-1*scroll/200))+"vw"});
			$("section.title .spider-drone-logo").css({'top': (8.5 +scroll/40) +'vw'});
			$(".clouds").css({'margin-top':(0-scroll/4)+"px"});
			console.log(Math.min(1,scroll/100));
			$("section").each(function(){
					position = 0-($(this).offset().top-scroll-$(window).height());
					visPerc = (position-200)/($(window).height()*.5);
					if(visPerc<0) visPerc = 0;
					if(visPerc>3) visPerc = 3;
					console.log(visPerc);
					if($(this).is(".bg-image")){
						$(this).css({"padding-top":(12-5+visPerc*3)+"vw"});
						$(this).css({"padding-bottom":(12+5-visPerc*3)+"vw"});
					}
					
					if(visPerc>1) visPerc = 1;

					$(this).css({ 'opacity' : visPerc });
					
					
			});
		}
		lastScroll = scroll;
	}
	
	//Inst player video 
	$(".instructional-player .close, .instructional-player").click( function(){
		$(".instructional-player").fadeOut();
		$(".instructional-player .player1").attr("src","");
		$(".instructional-player .player2").attr("src","");
	});
	$("section.instructional .video.video1").click( function(){
		$(".instructional-player .player1").show();
		$(".instructional-player .player1").attr("src",$(".instructional-player .player1").data("src"));
		$(".instructional-player .player2").hide();
		$(".instructional-player").fadeIn();
	});
	$("section.instructional .video.video2").click( function(){
		$(".instructional-player .player2").show();
		$(".instructional-player .player2").attr("src",$(".instructional-player .player2").data("src"));
		$(".instructional-player .player1").hide();
		$(".instructional-player").fadeIn();
	});
});