//1.3つ以上の値を用意して変数に代入してください。その1番目と3番目をコンソールで表示してください。
const signal = ["赤", "青", "黄"];

console.log(signal[0], signal[2]);


//key、value、プロパティーについて説明してください。
/*
key = 名前
value = 値
プロパティ：設定した値に名前をつけたもの（key + value）
*/

//3つほどプロパティを用意したオブジェクトを用意してコンソールで表示してください。
let meat = {
    chicken: "鶏肉",
    pork: "豚肉",
    beef: "牛肉",
};
console.log(meat);

//オブジェクトを3つ用意してそれを配列として代入してください。配列の0番目と3番目を表示させ、その中のkeyを指定してコンソールに表示させてください。
let riceball = [
    {
        ingredients: "紅鮭",
        price: "150円",
        likes: "まあまあ",
    },
    {
        ingredients: "ネギ味噌",
        price: "140円",
        likes: "うまい",
    },
    {
        ingredients: "梅",
        price: "140円",
        likes: "すっぱい",
    },
];

console.log(riceball[0].ingredients,riceball[2].ingredients);