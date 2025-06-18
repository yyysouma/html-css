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
    });

    $('#q6').on('click', function(){
        $(this).animate({
            'margin-left': '100px',
            'margin-top': '100px'
        },2000);
    });

    $('#q7').on('click', function(){
        console.log('#q7')
    });

    $('#q8').on('mouseover', function(){
        $(this).addClass('large')
            .on('mouseout', function(){
        $(this).removeClass('large')
        });
    });

    $('#q9 > li').on('click', function(){
        const q9Index = $(this).index();
        alert(q9Index)
        
    });

    $('#q10 > li').on('click', function(){
        const $q10s = $(this).index();
        $('#q11 > li').eq($q10s).addClass('large-text');
    });
    
});