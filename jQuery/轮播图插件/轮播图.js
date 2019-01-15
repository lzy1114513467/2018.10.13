$.fn.extend({
    slider:function(obj){
        var defaultset = {
            timer:1000,
            pic : []
        }
        var newset = $.extend({},defaultset,obj)

        var content = $("<div class='slider'></div>")
        var imgbar = '<div>'+
        '<div class="slider-panner sp-1 active"><div>'+
        '<img src="'+newset.pic[0]+'" ></div></div>'+
        '<div class="slider-panner sp-2 active"><div>'+
        '<img src="'+newset.pic[1]+'" ></div></div>'+
        '<div class="slider-panner sp-3 active"><div>'+
        '<img src="'+newset.pic[2]+'" ></div></div>'+
        '</div>'
        var btnbar ='<div class="list-btn">'+
        '<ul>'+
          '<li class="active"></li>'+
          '<li></li>'+
          '<li></li>'+
          '</ul>'+
          '</div>'
          content.html(imgbar+btnbar);
          $(this).append(content);

          var nowIndex = 0;
          var timer = null;
          $(".list-btn li").mouseover(function(){
            $(this).add($(".slider-panner").eq($(this).index())).addClass("active").siblings().removeClass("active");
          })
          function run(){
            timer = setInterval(function(){
              nowIndex++;
              if(nowIndex==3)nowIndex=0;
              $($(".list-btn li")).eq(nowIndex).triggerHandler("mouseover");
            },newset.timer)
          }
          $(".slider").hover(function(){
            clearInterval(timer)
          },function(){
            run();
          })
          run();
    }
})