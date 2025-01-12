for (let i = 1; i < 10; i++) {
    console.log("ループ" + i + "回目");
};
//インクリメント演算子でfalseになるまで繰り返し処理する

let items = ["リンゴ", "バナナ", "イチゴ"];
for (index in items) {
    console.log(items[index]);
};
//inを使用して変数を取り出す

//forを使ったループ処理を作ってください。
for (let i = 0; i <= 5; i++) {
    console.log(i + "回");
};

//for inを使ったループ処理を作ってください。
let seasoning = {さ:"砂糖", し:"塩", す:"酢", せ:"醤油", そ:"味噌"};
for (const item in seasoning) {
    console.log(item); 
};

//for ofを使ったループ処理を作ってください。
let fruits = ['りんご', 'みかん', 'バナナ'];
for (let element of fruits) {
    element = element + '食べたい';
    console.log(element);
}