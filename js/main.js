// JavaScript Document

/*
$(document).ready(function(){
	$("#homeBrand").find("li").find("img").eq(0).bind("load", function () {
		$("#homeBrand").height($("#homeBrand").find("img:eq(0)").height() + "px");
		qtglobal.Wresize(function () {
			$("#homeBrand").height($("#homeBrand").find("img:eq(0)").height() + "px");
		});
	});

	$("#homeBrand").hover(function () { $("#btn_prev,#btn_next").fadeIn(); }, function () { $("#btn_prev,#btn_next").fadeOut(); });
	$(".main_image").touchSlider({
		flexible: true,
		autoplay: true,
		speed: 1000,
		btn_prev: $("#btn_prev"),
		btn_next: $("#btn_next"),
		paging: $(".flicking_con a"),
		counter: function (e) {
			var curIndex = e.current - 1;
			$(".flicking_con a").removeClass("on").eq(curIndex).addClass("on");
		}
	});
	if ($("#homeBrand").find("li").length > 1) {
		var timer = setInterval(function () { $("#btn_next").click(); }, 3200);
		$(".main_visual").hover(function () {
			clearInterval(timer);
		}, function () {
			timer = setInterval(function () { $("#btn_next").click(); }, 3200);
		});
	}
});*/



/*提示*/
$(function(){
	$(".top_nav > ul > li").hover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		$(this).find(".con").show();
	},function(){
		$(this).find(".con").hide();
		$(this).removeClass("hover");
		$(this).find(".nav a").removeClass("hover");
	})

})


/*下拉选择*/

$.divselect = function(divselectid) {
	//var inputselect = $(inputselectid);
	$(divselectid+" span").click(function(){
		var ul = $(divselectid+" ul");
		if(ul.css("display")=="none"){
			ul.slideDown("fast");
		}else{
			ul.slideUp("fast");
		}
	});
	$(divselectid+" ul li a").click(function(){
		var txt = $(this).text();
		$(divselectid+" span").html(txt);
		//var value = $(this).attr("selectid");
		//inputselect.val(value);
		$(divselectid+" ul").slideUp("fast");
		
	});
	$(document).click(function(){
		//$(divselectid+" ul").hide();
	});
};

/*下拉选择*/
$(document).ready(function () {
	for (var i = 1; i <= 3; i++) {
		(function () {
			console.log("i ==== " + i);
			var lb = $("#limit-box" + i),
				lb_cur = 1,
				lbp_w = lb.find("#limit-buy" + i + " .products").width();
			lb_timer = null;
			t = 1;
			
			console.log("lb === " + lb);
			console.log("lbp_w === " + lbp_w);

			function showLimitBuyProducts(i) {
				if (lb_cur < 1) {
					lb_cur = 3;
				} else if (lb_cur > 3) {
					lb_cur = 1;
				}
				$("#J-lbcp").html(lb_cur);
				console.log("i === " + i)
				var products = $("#limit-buy" + i + " .products").hide().eq(lb_cur - 1).show(),
					ta = products.find("textarea");

				if (ta.length) {
					products.html(ta.val());
				}
			}

			var f = function (i) {
				lb_cur++;
				showLimitBuyProducts(i);
			};
			
			var j = i;
			
			lb_timer = setInterval(f(j), 4000);

			$("#limit-box" + i + " .btn-prev").click(function () {
				lb_cur--;
				showLimitBuyProducts(j);
			});

			$("#limit-box" + i + " .btn-next").click(function () {
				lb_cur++;
				showLimitBuyProducts(j);
			});

			$("#J-lb").hover(function () {
				clearInterval(lb_timer);
				lb_timer = null;
				$("#J-lb .btn-prev, #J-lb .btn-next").show();
			}, function () {
				lb_timer = setInterval(function () {
					lb_cur++;
					showLimitBuyProducts();
				}, 10000);
				/*$("#J-lb .btn-prev, #J-lb .btn-next").hide();*/
			});
		}())

	}

});


/*轮播*/

$(document).ready(function() {
	  var blw=$("#myscrollbox li").width();
	  //获取单个子元素所需宽度
	  var liArr = $("#myscrollbox ul").children("li");
	  //获取子元素数量
	  var mysw = $("#myscroll").width();
	  //获取子元素所在区域宽度
	  var mus = parseInt(mysw/blw);
	  //计算出需要显示的子元素的数量
	  var length = liArr.length-mus;
	  //计算子元素可移动次数（被隐藏的子元素数量）
	  var i=0
	  $("#right").click(function(){
		  i++
		  //点击i加1
		  if(i<length){
		      $("#myscrollbox").css("left",-(blw*i));
			  //子元素集合向左移动，距离为子元素的宽度乘以i。
		  }else{
			  i=length;
			  $("#myscrollbox").css("left",-(blw*length));
			  //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
	      }
      });
	  $("#left").click(function(){
		  i--
		  //点击i减1
		  if(i>=0){
		     $("#myscrollbox").css("left",-(blw*i));
			 //子元素集合向右移动，距离为子元素的宽度乘以i。
		  }else{
			 i=0;
			 $("#myscrollbox").css("left",0);
			 //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
	      }
      });
});

