var $jscomp = $jscomp || {};
 $jscomp.scope = {};
  $jscomp.createTemplateTagFirstArg = function (a) { return a.raw = a };
   $jscomp.createTemplateTagFirstArgWithRaw = function (a, b) { a.raw = b; return a };

$(function () {
  $("#q1").css("color", "green"); 
  //HTMLのid q1の要素にCSSのカラープロパティ、値をグリーンとして適用
  $("#q2").on("click", function () { $(this).css("background", "pink") });
   $("#q3").on("click", function () { $(this).fadeOut(3E3) });
    $("#q4").on("click", function () { $(this).addClass("large") });
    $("#q5").on("click", function () { $(this).prepend("DOM\u306e\u4e2d\u306e\u524d").append("DOM\u306e\u4e2d\u306e\u5f8c").before("DOM\u306e\u524d").after("DOM\u306e\u5f8c") });
     $("#q6").on("click", function () { $(this).animate({ "margin-top": 100, "margin-left": 100 }, 2E3) });
      $("#q7").on("click",
    function () { console.log(this) });
     $("#q8").on({ mouseenter: function () { $(this).addClass("large") }, mouseleave: function () { $(this).removeClass("large") } });
      $("#q9 li").on("click", function () { var a = $(this).index(); alert(a) });
       $("#q10 li").on("click", function () { var a = $(this).index();
         console.log($("#q11 li").eq(a));
          $("#q11 li").eq(a).addClass("large-text") })
});