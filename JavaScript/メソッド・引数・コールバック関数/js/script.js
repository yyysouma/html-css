//プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。
const obj = {
    //プロパティ　key：値
    age: 28,
    name:"yamada",
    birthday:"3月13日",

    //メソッド  key：関数
    methodA: function () {
      console.log("わたしは" + this.name + "です");
    },
    
    methodB: function () {
      console.log("誕生日は" + this.birthday + "です");
    },

    methodC: function () {
      console.log("年齢は" + this.age + "歳です");
    }
  };
  obj.methodA();
  obj.methodB();
  obj.methodC();



//下記の関数を実行してその結果をコンソールに表示してください。(スコープ内に書く方法はだめです。)
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};
console.log(fruit('トマト', 200));



//下記の関数を経由して2つの関数を実行するような処理を作ってください。
  function addTax(price, func) {
    const taxPrice = Math.round(price * 1.10);
    func(taxPrice);
  }
    // トマトの税込み価格をコンソールに表示させる処理
  const tomato = function func(taxPrice){
    console.log('トマトの値段は' + taxPrice + '円(税込)です。');
  }
  addTax(100, tomato);

  // 玉ねぎの税込み価格をコンソールに表示させる処理
  const onion = function func(taxPrice){
    console.log('玉ねぎの値段は' + taxPrice + '円(税込)です。');
  }
  addTax(80, onion);
  