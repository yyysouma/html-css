$(function() {
    $('.dropdwn li').on('mouseover', function(){
        //liにマウスオーバー
        const $dropdown = $(this).find('.dropdwn_menu');
        //変数
           $dropdown.stop(true).slideDown(350 , 'swing');
        //変数にstopメソッドでアニメーション中にカーソルが離れると中止するように。slideDownメソッドにミリ秒とイージング
        $(this).on('mouseleave', function(){
        //マウスが離れた際の動作
            $dropdown.stop(true).slideUp(350 , 'linear');
            //同様に閉じる最中にカーソルが乗った際に閉じるのを中止。戻る動作はslideUpメソッド
        });
    });
});