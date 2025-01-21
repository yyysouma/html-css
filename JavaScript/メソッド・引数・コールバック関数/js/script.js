/*メソッド

プロパティが関数となっているものがメソッド。*/
const teacher = { 
    // プロパティー
    name: "太郎",

    // プロパティー
    subject: "国語",

    // メソッド
    profile: function () { console.log("担当教科は国語です"); } }

teacher.profile()


/*引数

関数を呼び出すときに呼び出し先へ値を引き渡す値のことを引数
引数を用いることで再利用性を高めることができる*/
function sumNum(x) {
    const result = x + 1
    console.log(result);
  };
  sumNum(1)

//１行目のsumNum(x)のxが引数
//5行目のsumNum(1)の１をxに引き渡している。
/*const result = x + 1のxが引き渡された値を参照している。 */
function sumNum(x, y) {
    const result = x + y
    console.log(result);
  };
  sumNum(5, 10)

//2つの値が引き渡されている。
//sumNum(5, 10)の5がxで10がy
//複数の引数を渡すとき、1つ目の引数を第1引数、2つ目を第2引数
//文字列も渡すことができる。


/*コールバック関数

引数として渡される関数のことをコールバック関数と呼ぶ。*/
function tomato(price, func) {
    const name = "トマト";
    func(name, price);
    }
    const price = function price(name, price) {
    console.log(name + " の値段は" + price + "円です。");
    }
    tomato(100, price);

//10行目のtomato(100,price)が実行され第1引数に100、第2引数にpriceが引き渡される

//3行目のfunction tomato()が実行されその中のfunc(name,price);も実行される
//funcは引数。今回はpriceを引き渡している
func(name, price); = price(name, price);


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

  
//キーの箇所にメソッド名を指定し、値の箇所に関数を定義します。
//関数には、functionキーワードを使った関数式かアロー関数が使えます。


//下記の関数を実行してその結果をコンソールに表示してください。(スコープ内に書く方法はだめです。)

function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};
fruit('トマト', 200);

function fruit(price, func) {
  const name = "トマト";
  func(name, price);
  }
  const price = function price(name, price) {
  console.log(name + " の値段は" + price + "円です。");
  }
  fruit(100, price);


//下記の関数を経由して2つの関数を実行するような処理を作ってください。

  function addTax(price, func) {
    // priceは値段
    // funcは実行する関数名
    // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
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

  
