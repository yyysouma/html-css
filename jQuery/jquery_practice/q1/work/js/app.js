$(function (){
    $('#q1').css('color', '#8f6552');
    //html id = q1要素のCSSにカラープロパティのブラウンの値を適用

    $('#q2').on('click', function(){
    //id = q2に.on()メソッドとしてclickイベント、クリックした処理を記述
        $(this).css({
        //this（q2）.onメソッドの対象にCSSメソッド
            color: '#8f6552',
            backgroundColor: '#992211'        
            }
            //カラープロパティとその値にカラーコードを記述
            //背景色のプロパティにもカラーコードを記述
        );
    });
    $('#q3').on('click', function(){
    //id = q3に.on()メソッドとしてclickイベント、クリックした処理を記述
        $(this).fadeOut(3000)
        //this（q2）.onメソッドの対象にフェードアウトメソッドとその引数にミリ秒
    });

    $('#q4').on('click', function(){
        $(this).addClass('large')
        //id = q4をクリックした場合それにCSSで用意された.largeクラスを付与する
    });

    $('#q5').on('click', function(){
        $(this).prepend('<span>DOMの前</span>').append('<span>DOMの後</span>').before('<span>DOMの前</span>').after('<span>DOMの後</span>')
        //id=q5をクリックするとその要素内の前と後、id=q5のbutton要素の前と後ろにspanタグのテキストを追加
    });

    $('#q6').on('click', function(){
        $(this).animate({
            'margin-left': '100px',
            'margin-top': '100px'
        },2000);
        //id=q6の要素をクリックすると2秒かけてmarginのcssスタイルを追加した後の位置へ動く
    });

    $('#q7').on('click', function(){
        console.log('#q7')
        //id=q7をクリックしてコンソール表示
    });

    $('#q8').on('mouseover', function(){
        $(this).addClass('large')
            .on('mouseout', function(){
        $(this).removeClass('large')
        });
        //id=q8要素内にマウスカーソルを置くとlargeクラスを付加。要素から外れるとlargeクラスを削除
    });

    $('#q9 > li').on('click', function(){
        const q9Index = $(this).index();
        alert(q9Index)
        //q9の子要素liタグをクリックするとliタグの配列番号を取得しalertのテキストに渡す    
    });

    $('#q10 > li').on('click', function(){
        const $q10s = $(this).index();
        $('#q11 > li').eq($q10s).addClass('large-text');
        //q10の子要素liをクリックするとq10の取得した配列番号と同一のid=q11の子要素liを選択してクラスを付与
    });
    
});