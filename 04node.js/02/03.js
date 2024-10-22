let obj = {
    x : 10,
    y:"1234",
    z : function() {}
};
console.log(obj.x);
obj.x = 20;
console.log(obj.x);
obj.x = function() {
    console.log("Hello World");
}
console.log(obj.x);
obj.x();
// 객체의 프로퍼티에 접근 하는 방법
console.log("zzz : "+obj['x']);
console.log(obj.x);

//객체에 프로퍼티 추가하는 방법
obj.a = undefined;
console.log(obj);
//객체에 프로퍼티 제거 하는 방법

delete obj.y;
console.log(obj);

let arg = {'0':'a','1':'b'};

let symbol = Symbol();
console.log(typeof symbol);

let info = {
    [symbol] : "자바스크립트",
    symbol : "제이쿼리"
}
console.log(info.symbol+","+info[symbol],info['symbol']);