$(function(){

    $('.nav').find('li').on('click', function(){
    //class navの子要素liをクリックするイベント

        const $navItem = $(this).index(),
        //jQueryオブジェクトのクリックされたliのインデックス番号を取得する変数
        $description = $('.description').find('li');
        //jQueryオブジェクトclass = description内のli要素を探す
            $description.addClass('is-hidden');
            //一旦、変数$description全てにCSSセレクタ.is-hiddenを付与する
            $description.eq($navItem).removeClass('is-hidden');
            //.eq()メソッドの引数にclass .nav内のクリックされたli要素の番号を渡して、その番号にあたる対象の要素のみCSSセレクタ.is-hiddenを削除する。
            });
    });