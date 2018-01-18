$(function(){
    var fnSlideDown=[];
    var fnSlideUp=[];
	$(".sub-menu li ul").css("display","none");
	$(".sub-menu li ul").each(function(index){
		$(this).parent("li").hover(function(){
		    var obj=this;
		    clearTimeout(fnSlideUp[index]);
		    fnSlideDown[index]=setTimeout(function(){
		        $(obj).children("ul").slideDown();
		    },200);
		},function(){
		    var obj=this;
		    clearTimeout(fnSlideDown[index]);
		    fnSlideUp[index]=setTimeout(function(){
		        $(obj).children("ul").slideUp();
		    },200);
		});
	});
});