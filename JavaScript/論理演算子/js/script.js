/*AND(&&)の条件を作成し、その処理に入るよう作ってください。
(elseの処理も作成してください)
*/
const age = 25;
if (age >= 20 && age <= 29){
    console.log('20代');
} else {
    console.log('20代以外');
}

/*OR(||)の条件を作成し、その処理に入るよう作ってください。
(elseの処理も作成してください)
*/
const age2 = 25;
if (age2 <= 18 || age2 >= 60){
    console.log('ジュニアまたはシニア');
} else {
    console.log('成人');
}

/*NOT(!)の条件を作成し、その処理に入るよう作ってください。
比較条件は数値型の比較でお願いします。
(elseの処理も作成してください)
*/
var boolean = 81;
if (!(boolean <= 80)) {
    console.log('規格外');    
} else {
    console.log('規格内');
}