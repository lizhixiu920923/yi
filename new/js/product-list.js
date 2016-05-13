$(function(){
   $(".pro-content-img img").first().css({display:'block'})
   $(".pro-content-btn li").last().css({marginRight:0})
   var proBtn=$(".pro-content-btn li")
   var proImg=$(".pro-content-img img")
   proBtn.mouseover(function(){
     var index=$(this).index()
     proImg.css({display:'none'}).eq(index).css({display:'block'})
   })
})
