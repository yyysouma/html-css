// //ターゲットとなるinput（テキスト）
// <input type="text" name="hoge" value="あおいえお" data-target="fuga" id="input-1" class="target"></input>

// //値(value)を取得
// const target = $('.target').val();
//     //idから値を取得する場合は$('#input-1')とかきかえればOK


// //name値から値(value)を取得
// const target = $('input[name="hoge"]').val();

// //data属性から値(value)を取得
// const target = $('input').data('target' , 'fuga').val();

// //値(value)から要素を選択
// const target = $('input[value="あいうえお"]');

// //値(value)からclassを取得
// const target = $('input[value="あいうえお"]').attr('class');
// //id、name値も同様でattr('id') or attr('name')と指定すればＯＫ

// //値(value)からdata値を取得
// const target = $('input[value="あいうえお"]').data('target');

// //値(value)を任意のテキストに変更
// $('.target').val('テキスト');

// //値(value)を空にする
// $('.target').val();
//ｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰｰ





$(function(){
    $('.btn').on('click', function() {
    //アカウント作成から

            const $familyName = $('#family__name').val(), //入力した値を取得
            $givenName = $('#given__name').val(),
            year = $('.year').val(),
            month = $('.month').val(),
            day = $('.day').val(),
            gender = $('input[name="gender"]:checked').val(),
            job = $('.occupation').val(),
            accountName = $('#account__name').val(),
            email = $('#email').val(),
            password = $('#password').val(),
            duplicationPassword = $('#duplication__password').val(),
            address = $('#address').val(),
            tel = $('#tel').val(),
            subscription = $('input[name="subscription"]:checked');


            console.log('名字');//テキストを表示
            console.log($familyName);
            console.log('名前');
            console.log($givenName);
            console.log('生年月日');
            console.log(year + '年' + month + '月' + day + '日');
            console.log('性別');
            console.log(gender);
            console.log('職業');
            console.log(job);
            console.log('アカウント名');
            console.log(accountName);
            console.log('メールアドレス');
            console.log(email);
            console.log('パスワード');
            console.log(password);
            console.log('確認用パスワード');
            console.log(duplicationPassword);
            console.log('住所');
            console.log(address);
            console.log('電話番号');
            console.log(tel);
            console.log('購読情報');


            subscription.each(function(){//val()メソッドで１度だけ取得したデータを返すため、空の配列に２つの値をpushするかループ処理で複数のチェックボックスの処理結果を出す
                console.log($(this).val());
            });

    });
});