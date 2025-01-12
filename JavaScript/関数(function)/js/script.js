//関数宣言を行い、実行された時にアラート表示させるよう処理を作ってください。
function showAlert() {
    alert("アラート表示")
    }
    showAlert();

//関数式内で計算した結果を返し、それを外部から実行してコンソールで表示させてください。
const getText = function () {
    const text = "getTextが実行されるとこのテキストを返します";
    console.log(text);
};
    console.log(getText());


/*
関数とスコープ
定義された関数はそれぞれスコープを持っている。
スコープは　変数　や　関数　の因数などを参照できる範囲を決めるもの

 */
function scPractice() {
    const a = 1;
    //関数 scPractice のスコープ内から a を参照できる
    console.log(a);
}
//  変数 a は scPractice関数のスコープに定義されているため、scPractice内では参照できる。

scPractice();
//scPractice関数のスコープ外から a は参照できないからエラー
console.log(a);

//このような関数内のスコープを関数スコープと呼ぶ。

//またletやconstは同じスコープ内に同じ名前の変数を二重に定義できない。(var functionによる変数宣言は例外となる)

/*スコープが異なれば同じ名前で変数を宣言できる */
function scPractice1() {
    const a;
}

function scPractice2() {
    const a;
}

//ブロックスコープ
/*
{と}で囲んだ範囲をブロックと呼ぶ。ブロックもスコープを作成する 
ブロック内で宣言された変数はブロック内でのみ参照でき、スコープの外側からは
参照できない。*/

if (true) {
    const a = "inner";
    console.log(a);
}

console.log(a);//エラー
//if文、while文もブロックスコープを作成する。これは外から参照できない


//for文はループごとに新しいスコープを作成する。
const array = [1, 2, 3, 4, 5];
//ループごとに新しいブロックスコープを作成する
for (const element of array) {
    //forのブロックスコープの中でのみ element を参照できる
    console.log(element);
}

console.log(element);//エラー

//スコープチェーン
//関数、ブロックは入れ子にできるのと同様にスコープも入れ子にできる


//グローバルスコープ
/*暗黙的なグローバルスコープというものが存在する。
グローバルスコープはプログラム実行時に作成される。
*/
//プログラム直下はグローバルスコープ
const a = "a";

console.log(a);

/*
グローバルスコープで定義した変数はグローバル変数と呼ばれる
グローバル変数はあらゆるスコープから参照できる変数となる。
 */

//グローバル変数はどのスコープからも参照できる
const globalValiable = "グローバル";

//ブロックスコープ
{
    //ブロックスコープないには該当する変数が定義されてない　->外側のスコープへ
    console.log(globalVariable);// =>"グローバル"
}

//関数スコープ
function a() {
    //関数ブロックスコープ内には該当する変数が定義されてない -> 外側のスコープへ
    console.log(globalVariable);// => "グローバル"
}

/*グローバルスコープには自分で定義したグローバル変数以外に、プログラム実行時に
自動的に定義されるビルトインオブジェクトがある。
*/