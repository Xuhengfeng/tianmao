$(function(){
	$('.three>#red').mouseover(function(){
		$(this).css('background','red');
	}).mouseout(function(){
		$(this).css('background','');
	})

	function message(msg,bool){
        	var info='';
        	if(bool){
        		info='<span>'+msg+'</span>';
        	}else{
        		info='<span>'+msg+'</span>';
        	}
        	return info;
        }
		$('#input_one').blur(function(){
			 value=$(this).val();
			 pattern1=/^1(([358]\d)|(47)|7[0178])\d{8}$/;
			if(pattern1.test(value)){
				$(this).next().next().html(message('格式正确'));
			}else{
				$(this).next().next().html(message('格式不正确，请重新输入'));
			}
		});
		$('#password').blur(function(){
			 value=$(this).val();
			 pattern2=/^[a-zA-Z0-9]{6,16}$/;
			if(pattern2.test(value)){
				$(this).next().next().next().next().html(message('格式正确'));
			}else{
				$(this).next().next().next().next().html(message('格式不正确，请重新输入'));
			}
		});

        $('#zhuce .six input').click(function(){
        	if(pattern1.test(value) && pattern2.test(value)){
                $('#zhuce .one span:eq(1)').css({'color':'#000','border-bottom':'2px solid #000'});
                $('#zhuce .one span:eq(0)').css({'color':'#f60','border-bottom':'2px solid #f60'});
        	
        	}else{
        		$('#zhuce .one span:eq(0)').css({'color':'#000','border-bottom':'2px solid #000'});
                $('#zhuce .one span:eq(1)').css({'color':'#f60','border-bottom':'2px solid #f60'});
        	}
        })



		
		

})