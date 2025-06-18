

    // 変数settingsに設定情報などを格納
$(function(){
        const $lists = $('.lists'),
                $input = $('#search-input'),
                $message = $('.message'),
                //class idのオブジェクト

                searchF = '<li class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</li>',
                searchE = '<li class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</li>';
                //各メッセージ
                
                let pageCount = 1,
                        beforeSearchWord = '';
                //ページカウントを初期化


        $(".search-btn").on('click', function(){
                const searchWord = $("#search-input").val();
                //入力した内容をsearchWordに代入

                const settings = {
                // 実行するURL。実行するURLのことをエンドポイントと言います。
                url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
                // サーバーに送るメソッド
                method: "GET",
                dataType: "json"
                };



        // Ajaxの実行
        //.doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
        $.ajax(settings).done(function (response) {
                
                const graph = response["@graph"][0],
                        items = graph.items;
                //サーバーから帰ってきたプロパティパス

                let html = "";

                //追加されるHTMLを格納する変数

                if (!Array.isArray(items) || !graph) {
                //itemsが配列ではないまたはgraphが配列ではない場合は
                        $lists.empty();
                        $lists.append(searchF);
                        return;
                        //$listsに追加されたHTML要素をクリアしsearchFを追加して.doneの処理を終了
                }

                        let len = items.length;
                        //itemsのlengthを格納

                for(let i = 0; i < len; i++) {
                        html += `
                        <li class="lists-item list-inner">
                        <p>${"タイトル：" + items[i].title}</p>
                        <p>${"作者：" + items[i]["dc:creator"]}</p>
                        <p>${"出版社：" + items[i]["dc:publisher"]}</p>
                        <a href=${items[i].link["@id"]}>書籍情報</a>
                        </li>`;
                //for文で空のhtmlにHTML要素＋サーバーから帰ってきたデータのindex番号のプロパティを表示
                }

                
                if(searchWord === beforeSearchWord) {
                        pageCount ++;
                } else {
                        $lists.empty();
                        pageCount = 1;
                }
                beforeSearchWord = searchWord;
                //前回の検索結果が同一の場合pageCountが+1される。違う場合以前の検索結果を削除してカウントを１に戻す。

                $message.remove();
                //$messageの要素を削除する

                $lists.prepend(html);
                //処理が成功した際に検索結果を$listsへHTMLを追加


        //.failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取って
        }).fail(function (err) {
                $lists.empty();
                //表示されている要素をクリア

                if(err.status === 0) {
                //帰ってきたエラーのstatusプロパティパスが0だった場合はtrue
                        $lists.append(searchE);
                } else {
                
                //それ以外の場合はstatusTextプロパティの値を返す
                        $lists.append(err.statusText);    
                };
        });
        });

        $('.reset-btn').on('click', function(){
                $lists.empty();
                $input.val('');
                //リセットボタンを押すと$listsの要素と検索ワードをクリア
        });
});

