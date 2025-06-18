$(function(){
    $('.modal_open_button').on('click', function(){
        //modal_open_buttonをクリックすると
        $('.modal_win').fadeIn()
        //htmlでdisplay:noneで隠されているmodal_winクラスをfadeInメソッドで表示
    });
    $('.modal_close_button').on('click', function(){
        //modal_close_buttonをクリックすると
        $('.modal_win').fadeOut()
        //.fadeInで表示されていたmodal_winクラスをフェードアウトする
    });
});