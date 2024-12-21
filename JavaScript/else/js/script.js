//else
var boolean = false;
if(boolean){
console.log("trueの処理");
console.log(boolean);
} else {
console.log("falseの処理");
console.log(boolean);
};


//elseを使用する時の注意点
    var boolean = false;
if (boolean) {
console.log("trueの処理");
console.log(boolean);
} `console.log("テスト");`
//if文とelseの間に処理を書いてもエラーとなってしまう
else {
console.log("falseの処理");
console.log(boolean);
} ;
//JavaScriptで実装した時の確認ポイント
/*この状態で読み込むと
Uncaught SyntaxError: Unexpected token 'else'と表示される
JavaScriptで実装した時の確認ポイント*/

//数値型を比較してelseの処理に入る処理を作ってください。
const number = 100;
if (number < 10){
    console.log('真値');
    } else {
        console.log('偽値');
    }

//文字列型を比較してelseの処理に入る処理を作ってください。
let text = '文字列';
if (text === 100){
    console.log('数字');
    } else {
    console.log('文字');
    }

