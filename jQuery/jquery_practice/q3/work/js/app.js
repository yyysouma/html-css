$(function(){
    $('.drawer_button').on('click', function(){
        //drawer_buttonクラスの要素をクリックする
        $(this).toggleClass('active');
        //セレクタにactiveクラスが無ければ付与する。あれば消す。
        $('.drawer_nav_wrapper').toggleClass('open');
        //drawer_nav_wrapperクラスにopenクラスが無ければ付与する。あれば消す。
        $('.drawer_bg').fadeToggle()
        //htmlのspanタグ空要素のCSS(display:none)をフェードで表示、非表示される。
    });
});