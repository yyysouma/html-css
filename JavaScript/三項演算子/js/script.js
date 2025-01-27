//変数の中にtrueまたは、falseが代入された時の処理を作ってください。
const result = true; 
const result2 = result === true ? 'true' : 'false';
console.log(result2);

//代入された変数の中が5より大きい時にtrueの処理と、5より小さい時にfalseの処理を作ってください。
const age = 6;
const age2 = age > 5 ? 'trueの処理' : 'falseの処理';
console.log(age2);

//代入された変数の中が5より小さい時にtrueの処理と、5より大きい時にfalseの処理を作ってください。
const age3 = 6;
const age4 = age3 < 5 ? 'trueの処理' : 'falseの処理';
console.log(age4);

//代入された変数の中が10以上の時にtrueの処理と、10以下の時にfalseの処理を作ってください。
const age5 = 10;
const age6 = age5 >= 10 ? 'trueの処理' : 'falseの処理';
console.log(age6);

//代入された変数の中に値が存在する場合はtrue、存在しない場合はfalseの処理にしてください。
const age7 = null;
const age8 = age7 ? 'trueの処理' : 'falseの処理';
console.log(age8);