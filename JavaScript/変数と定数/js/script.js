//var、let、constの使用についてまとめてください。
    var num = 1;//varは再代入、再宣言ができる。
    num = 2;//再代入
    var num = 3;//再宣言

    let num = 1;//letは再代入ができるが、再宣言はできない。
    num = 2;//再代入
    let num = 3;//Identifier 'num' has already been declared

    const num = 1;//constは再代入、再宣言できない。
    num = 2;//Assignment to constant variable.at <anonymous>:2:5
    const num = 3;//Identifier 'num' has already been declared

//なぜvarを使わないのか理由をまとめてください。
/*varは再宣言、再代入ができるため、変数がいつの間にか変わってしまい混乱
してしまうから。 */

//定数とは?
/*再代入、再宣言などはできない。定数の場合、中に入っている値が
固定されるため、不要なエラーを回避しやすい。 */