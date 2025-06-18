$(function(){

    $('.select-box').on('change' , function(){
        //セレクトボックスクラスをクリックしたら対象のvalue属性と同名の属性のみを表示する処理
        const $selectBox = $(this),
            $selectValue = $selectBox.val();

        $('.food-list li').each(function() {
        //food-list li要素を対象にループ処理

            const dataCategory = $(this).data('category-type');
            //li要素の属性を取得

            //もしカテゴリ"all"ならli要素を全て表示させる
            //また、選択された値がセレクトボックスの属性と同一の値の場合、そのカテゴリだけ表示する
            if($selectValue === 'all' || $selectValue === dataCategory) {
               $(this).show();
            } else {
                //どちらにも当たらない場合、そのli要素を非表示にする
                $(this).hide();
            }
        }); 
    });
});