$(function(){
       var rand;
       var data = [];
       for(var i=0;i<40;i++){
            rand=Math.floor(Math.random()*40)+1;
            data.push({"id":rand,"pic":"imgs/"+rand+".jpg","jiage":"￥79.00","yuanjia":"￥399","title":"针织衫女开衫夏季爆款七分袖披肩外套空调衫","zhe":"浙江","hang":"杭州"})
       }
       
	$(document).scroll(function(){
		var a=$(document).height();
		var str='';
		if($(document).scrollTop()>=a/10){
		for(var i in data){
             str+='<div>';
             str+='<img src="'+data[i]['pic']+'">';
             str+='<p id="one">'+data[i]['title']+'</p>';
             str+='<p id="two">现价：<span class="one">'+data[i]['jiage']+'</span><span class="three">原价：</span><span class="two">'+data[i]['yuanjia']+'</span></p>';
             str+='<p id="three"><span>'+data[i]['zhe']+'</span><span>'+data[i]['hang']+'</span></p>';
             str+='</div>';
             console.log(rand);
		}
		$('#main').append(str);
	}
	})
})

var r,g,b;

$(document).scroll(function(){
      if($(document).scrollTop()>=80){
             $('#nav').css({'position':'fixed','left':'5px','top':'160px','display':'block'});
      }
      if($(document).scrollTop()<=80){
             $('#nav').css('display','none');
      }
})

$('#nav li:not(.red)').mouseover(function(){
      r = Math.floor(Math.random()*256);
      g = Math.floor(Math.random()*256);
      b = Math.floor(Math.random()*256);
      $(this).css('background','rgb('+r+','+g+','+b+')');
}).mouseout(function(){
      $(this).css('background','#666');
})

var arr = [
      {'jiage':'10','title':'衣服','yuanjia':'100'},
      {'jiage':'20','title':'裤子','yuanjia':'200'},
      {'jiage':'30','title':'外套','yuanjia':'300'},
      {'jiage':'40','title':'鞋子','yuanjia':'400'},
      {'jiage':'50','title':'袜子','yuanjia':'500'}
]
