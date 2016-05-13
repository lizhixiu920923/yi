$(function(){
    $(".p-product-title li").eq(2).css({marginRight:0})
  // banner
  var lilist=$(".p-banner-left-bg")
  var block=$(".p-left-block")
  lilist.hover(function(){
   $(this).find(".p-left-block").animate({left:204},1000)
   $(this).find(".p-left-block").css({display:'block'})
  },function(){
   $(this).find(".p-left-block").animate({left:210},1000)
   $(this).find(".p-left-block").css({display:'none'})
  })
  // 轮播
  var img=$(".p-c-imgbox img")
  var li=$(".p-c-btnbox li")
  img.first().css({display:'block',opacity:1})
  li.first().css({background:'#666'})
  li.mouseover(function(){
     var index=$(this).index()
     img.css({display:'none',opacity:0}).eq(index).css({display:'block'}).animate({opacity:1},400)
     li.css({background:"#CFCDCE"}).eq(index).css({background:'#666'})
     num=index;
  })
  var t=setInterval(move,2000)
  var num=0;
  function move(){
    num++;
    if (num<0) {
      num=li.length-1
    }
    if (num>li.length-1) {
      num=0;
    }
    img.css({display:'none',opacity:0}).eq(num).css({display:'block'}).animate({opacity:1},400)
     li.css({background:"#CFCDCE"}).eq(num).css({background:'#666'})
  }

  var pcenter=$(".p-banner-center")
  pcenter.hover(function(){
     clearInterval(t)
  },function(){
     t=setInterval(move,2000)
  })

  var pProductTitle=$(".p-product-title li")
  var pProductContent=$(".p-product-content")
   pProductContent.first().css({display:'block'})
  pProductTitle.mouseover(function(){
     var index=$(this).index()
     pProductTitle.css({color:'black'}).eq(index).css({color:'white'})
     pProductContent.css({display:'none'}).eq(index).css({display:'block'})
  })


})
