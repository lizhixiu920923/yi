$(function(){
var bpicbox=$(".b-pic-box")
var btnList=$(".btn-box li")
bpicbox.css({display:'none'})
var bannerLeft=$(".banner-left")
bpicbox.first().css({display:'block'})
btnList.css({background:'#464541'})
btnList.first().css({background:'#6F6F6C'})
var t=setInterval(move,3000)
var num=0;
function move(){
	num++;
  if (num<0) {
  	num=btnList.length-1
  }
  if (num>btnList.length-1) {
  	num=0;
  }
  btnList.css({background:'#464541'}).eq(num).css({background:'#6F6F6C'})
  bpicbox.css({display:'none'}).eq(num).css({display:'block'})
}
btnList.mouseover(function(){
  var index=$(this).index()
  btnList.css({background:'#464541'}).eq(index).css({background:'#6F6F6C'})
  bpicbox.css({display:'none'}).eq(index).css({display:'block'})
  num=index;
})
bannerLeft.hover(function(){
	clearInterval(t)
},function(){
   t=setInterval(move,3000)
})

var bmiddle=$(".b-middle li").first().css({marginRight:10})

// link
$(".firend-link li:even").css({marginRight:6})
$(".firend-link li:odd").css({marginRight:0,float:'right'})
// fly
$('#Marquee_x').jcMarquee({ 'marquee':'x','margin_right':'10px','speed':30 });
// 专家简介
$(".do-right ul").last().css({marginRight:0})
var proDesc=$(".do-left li")
var proDescPic=$(".do-right")
proDescPic.css({display:'none'})
proDescPic.first().css({display:'block'})
proDesc.mouseover(function(){
   var index=$(this).index()
   proDescPic.css({display:"none"}).eq(index).css({display:"block"})
})
})
