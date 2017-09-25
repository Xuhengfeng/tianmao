var i=0;
var length=$('#lun>li').length;
function autoRun(){
run=setInterval(function(){
	$('#lun>li').hide();
	$('#num>li').css('background','black');
	i++;
	if(i>=length){
		i=0;
	}
	$('#lun>li:eq('+i+')').fadeIn();
	$('#num>li:eq('+i+')').css('background','blue');
},2000);
}
autoRun();
$('#lun,#num').mouseover(function(){
	clearInterval(run);
	$('#lun_left,#lun_right').fadeIn();
	$('#num>li').mouseover(function(){
		$('#lun>li').hide();
	    $('#num>li').css('background','black');
	    i=$(this).index();
	    $('#lun>li:eq('+i+')').fadeIn(20);
	    $('#num>li:eq('+i+')').css('background','blue');
	})
}).mouseout(function(){
	autoRun();
	$('#lun_left,#lun_right').hide();
})

$('#lun_left,#lun_right').mouseover(function(){
	$('#lun_left,#lun_right').fadeIn();
	clearInterval(run);
})
$('#lun_right').mousedown(function(){
	$(this).css({'border':'1px solid red','box-shadow':'0px 0px 2px 2px red'});
    $('#lun>li').hide();
	$('#num>li').css('background','black');
	i++;
	if(i>=length){
		i=0;
	}
	$('#lun>li:eq('+i+')').fadeIn();
	$('#num>li:eq('+i+')').css('background','blue');
}).mouseup(function(){
	$(this).css({'border':'1px solid gray','box-shadow':'none'});
})
$('#lun_left').mousedown(function(){
	$(this).css({'border':'1px solid red','box-shadow':'0px 0px 2px 2px red'});
    $('#lun>li').hide();
	$('#num>li').css('background','black');
	i--;
	if(i<0){
		i=length-1;
	}
	$('#lun>li:eq('+i+')').fadeIn();
	$('#num>li:eq('+i+')').css('background','blue');
}).mouseup(function(){
	$(this).css({'border':'1px solid gray','box-shadow':'none'});
})


$('#shen>div').mouseover(function(){
	$(this).css({'border':'1px solid red','box-shadow':'0px 0px 5px 1px gray'});
}).mouseout(function(){
    $(this).css({'border':'1px solid gray','box-shadow':'none'});
})

$(document).scroll(function(){
	$('#xian').hide();

	if($(document).scrollTop()>=50){
       $('#header div').css({'position':'fixed','top':'-30px','background':'#fff','opacity':'0.9'});
       $('#header #inp').css({'position':'absolute','top':'10px'});
       $('#xian').css({'top':'52px','opacity':'1'});
       $('#nav').css({'position':'fixed','left':'5px','top':'160px','display':'block'});
	} 
	if($(document).scrollTop()<=50){
       $('#header div').css({'position':'static','top':'30px','opacity':'1'});
       $('#header #inp').css({'position':'absolute','top':'70px'});
       $('#xian').css('top','112px');
       $('#nav').css('display','none');
	} 
})

$('input').click(function(){
	$('#xian').toggle();
})

$('#xian>li').mouseover(function(){
	$(this).css('background','#aaa');
}).mouseout(function(){
	$(this).css('background','');
})

var r,g,b;

$('#nav li:not(.red)').mouseover(function(){
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	$(this).css('background','rgb('+r+','+g+','+b+')');
}).mouseout(function(){
	$(this).css('background','#666');
})

$(document).scroll(function(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	if(50<=$(document).scrollTop()&&$(document).scrollTop()<=400){
		$('#nav li:eq(1)').css('background','rgb('+r+','+g+','+b+')');
		$('#nav li:eq(1)').siblings().not('.red').css('background','#666');
	}
	if(400<=$(document).scrollTop()&&$(document).scrollTop()<=800){
		$('#nav li:eq(2)').siblings().not('.red').css('background','#666');
		$('#nav li:eq(2)').css('background','rgb('+r+','+g+','+b+')');
	}
	if(800<=$(document).scrollTop()&&$(document).scrollTop()<=1200){
		$('#nav li:eq(3)').siblings().not('.red').css('background','#666');
		$('#nav li:eq(3)').css('background','rgb('+r+','+g+','+b+')');
	}
	if(1200<=$(document).scrollTop()&&$(document).scrollTop()<=1600){
		$('#nav li:eq(4)').siblings().not('.red').css('background','#666');
		$('#nav li:eq(4)').css('background','rgb('+r+','+g+','+b+')');
	}
	if(1600<=$(document).scrollTop()&&$(document).scrollTop()<=2000){
		$('#nav li:eq(5)').siblings().not('.red').css('background','#666');
		$('#nav li:eq(5)').css('background','rgb('+r+','+g+','+b+')');
	}
	if(2000<=$(document).scrollTop()&&$(document).scrollTop()<=2400){
		$('#nav li:eq(6)').siblings().not('.red').css('background','#666');
		$('#nav li:eq(6)').css('background','rgb('+r+','+g+','+b+')');
	}
	if(2400<=$(document).scrollTop()&&$(document).scrollTop()<=2800){
		$('#nav li:eq(7)').siblings().not('.red').css('background','#666');
		$('#nav li:eq(7)').css('background','rgb('+r+','+g+','+b+')');
	}
})	

$('#tian-1 .two').mouseover(function(){
	$(this).css({'border-bottom':'2px solid #8888ff','color':'#8888ff'});
	$('#tian-2').show();
	$(this).siblings().css({'border-bottom':'0px solid cyan','color':'#333'});
	$('#tian-2').siblings().not('#tian-1').hide();
})

$('#tian-1 .three').mouseover(function(){
	$(this).css({'border-bottom':'2px solid #8888ff','color':'#8888ff'});
	$('#tian-3').show();
	$(this).siblings().not('#tian-1').css({'border-bottom':'0px solid cyan','color':'#333'});
	$('#tian-3').siblings().not('#tian-1').hide();
})

$('#tian-1 .four').mouseover(function(){
	$(this).css({'border-bottom':'2px solid #8888ff','color':'##8888ff'});
	$('#tian-4').show();
	$(this).siblings().not('#tian-1').css({'border-bottom':'0px solid cyan','color':'#333'});
	$('#tian-4').siblings().not('#tian-1').hide();
})

$('#tian-1 .five').mouseover(function(){
	$(this).css({'border-bottom':'2px solid #8888ff','color':'#8888ff'});
	$('#tian-5').show();
	$(this).siblings().not('#tian-1').css({'border-bottom':'0px solid cyan','color':'#333'});
	$('#tian-5').siblings().not('#tian-1').hide();
})
$('#tian-1 .six').mouseover(function(){
	$(this).css({'border-bottom':'2px solid #8888ff','color':'#8888ff'});
	$('#tian-6').show();
	$(this).siblings().not('#tian-1').css({'border-bottom':'0px solid cyan','color':'#333'});
	$('#tian-6').siblings().not('#tian-1').hide();
})




var fx='left';
run1=setInterval(function(){
  	if(fx=='left'){
        var x=$('#yidong-1>div').offset().left-200;
        if(x<=-1200){
             x=-1205;
             setTimeout(function(){
             	 fx='right';
             },4000)
 	    }
 	     $('#yidong-1>div').css('left',x);
  	}else if(fx=='right'){
        var x=$('#yidong-1>div').offset().left+20;
        if(x>=-120){
 		     x=0;
 		     setTimeout(function(){
 		     	  fx='left';
 		     },4000)
 	    }
 	     $('#yidong-1>div').css('left',x);
  	}
},100)	


$('#yidong-2>#left').click(function(){
	clearInterval(run1);
	run=setInterval(function(){
	    var x=$('#yidong-1>div').offset().left-120;
 	    if(x<=-1200){
             x=-1205;
             clearInterval(run);
 	    }
        $('#yidong-1>div').css('left',x); 
    },10)
})


$('#yidong-2>#right').click(function(){
	clearInterval(run1);
	run=setInterval(function(){
	var x=$('#yidong-1>div').offset().left+150;
 	if(x>=-120){
 		x=0;
 		clearInterval(run);
 	}
    $('#yidong-1>div').css('left',x); 
 },100)
	
})
