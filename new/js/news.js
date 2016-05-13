$(function(){
	var nArticle=$(".n-article")
	nArticle.focus(function(){
		 nArticle.val(" ")
	})
	nArticle.blur(function(){
		 nArticle.val("搜索文章")
	})

	var nleft=$(".n-left").height()
  var nright=$(".n-right").height()
    if (nleft<=nright) {
    	$(".n-left").css({height:nright})
    }else{
    	$(".n-right").css({height:nleft})
    }
})
