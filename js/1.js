$(function(){
	
	$('#small').mouseover(function(){
		$('#move,#big').show();
		$(this).mousemove(function(ent){
           var x=ent.pageX-$(this).offset().left-$('#move').width()/2;
           var y=ent.pageY-$(this).offset().top-$('#move').height()/2;
           if(x<=0){
        	 x=0;
           }
           if(y<=0){
        	   y=0;
           }
           var maxleft=$('#small').width()-$('#move').width();
           if(x>=maxleft){
        	   x=maxleft;
           }
           var maxtop=$('#small').height()-$('#move').height();
           if(y>=maxtop){
        	   y=maxtop;
           }
           $('#move').css({left:x,top:y});
           var bleft=$('#big_img').width()*(x/$('#small').width());
           var btop=$('#big_img').height()*(y/$('#small').height());
           $('#big_img').css({left:-bleft,top:-btop});
		})
		
	}).mouseout(function(){
		$('#move,#big').hide();
	})

	$('#dian>li>img').click(function(){
		    var N = $(this).attr('src');
			$('#small_img').attr('src',N);
			$('#big_img').attr('src',N);

		})
})

$(function(){
	$('#two>#two-4>span').mouseover(function(){
		$(this).css('box-shadow','0px 0px 2px 2px red');
	}).mouseout(function(){
		$(this).css('box-shadow','none');
	})

	$('#two>#two-5 img').mouseover(function(){
		$(this).css({'box-shadow':'0px 0px 2px 2px red'});
	}).mouseout(function(){
		$(this).css('box-shadow','none');
	})

	$('#two-6').click(function(){
		$('#five').fadeIn();
	})
	$('#five>button').click(function(){
		$('#five').hide();
	})
})
