
function f (x){
    return x;
}
console.log(typeof f);
console.log(typeof f("10"));
console.log(typeof f([1,2,3,4]));
console.log(typeof f({x:10,y:20}));
console.log(typeof f(undefined));

function myFunc(a) {
    console.log("핫하");
    return a;
}
function myFunc2(x){
    return x;
}
console.log(typeof f(myFunc));
f(myFunc)();
// document.addEventListener("click", function(){
//     //click시 할일
// })

//scope
//지역변수 : 함수내에서 선언한 변수 
//전역변수 : 지역변수가 아닌변수

// var b =20;//전역 변수

function test () {
    // var a;
    // console.log(a); //error X
    // var a = 10; //지역 변수
    // console.log(a);
    b= 30;

}
// console.log(a);
test();
console.log(b);

for(var i =0;i<10 ;i++){

}
console.log(i);

{
    {
        {
            {
                {
                    {
                        var num =30;
                    }
                }
            }
        }
    }
}
console.log(num);

function f1(){
    var local = 30;
    function f2() {
        console.log(local + 50);
    }
    f2();
}
f1();


//let
var a= 10;
var a = 20;//함수기반 스코프
// console.log(number); let은 블럭기반 스코프라 호이스팅도막는다 
let number = 20;
number = 30;
console.log(a);

for(let s =0; s<10;s++){
    
    console.log(s);
}
// console.log(s);

let fn = function(x){
    console.log("hello" + x);
}
fn("world");
const pi = Math.PI;
console.log(pi);

// closure : 지역변수가 함수호출 종료후에도 값이 남아있는현상
// 클로저 동작의 최소 조건 >> 함수를 리턴 즉 전역에있던 값이랑 중복되지않기위해
function increseCount() {
    let n = 0;
    function inner(){
        n++;
        return n;
    }
    
    return inner;
}
let tmp = increseCount();
console.log(tmp());
console.log(tmp());
console.log(tmp());
console.log(tmp());
//GO로케이션
// function f() {
//     f();
    
// }
// f();

console.log(this);


console.log(parseInt("12345a789"));
console.log(parseInt("123.45a789"));
console.log(parseFloat("123.45aaa789"));
console.log(Number("12345789"));
// finish
// finity 유한
// infinity 무한
// unhappy 행복하지않은
// NaN,Infinity
let nan = NaN;
console.log(nan);
let posiInfi = Number.POSITIVE_INFINITY;
console.log(posiInfi);
let negeInfi = Number.NEGATIVE_INFINITY;
console.log(negeInfi);
console.log(nan === NaN); 
console.log(!!nan);
console.log(isNaN(nan));
console.log("=============================");
console.log(posiInfi === Number.POSITIVE_INFINITY);
console.log(negeInfi === Number.NEGATIVE_INFINITY);
console.log(isFinite(posiInfi));//finite 는 유한이라 무한이랑 비교하면 false가 맞다
 eval("let str = 'hello';console.log(str)");
//  통일된 자원에대한 장소 = url
// 통일된 자원에대한 ? = uri ==상위개념
// http://www.javaman.com/post/view?no =123 URL
// http://www.javaman.com/post/view?123 URI

let str = "http://www.자바맨.com/search/ch?query =http://www.네이버.com#abcd";
let str2 ="http%3A%2F%2Fwww.자바맨.com%2Fsearch%2Fch%3Fquery+%3Dhttp%3A%2F%2Fwww.네이버.com%23abcd";
let str3 ="http://www.%EC%9E%90%EB%B0%94%EB%A7%A8.com/search/ch?query%20=http://www.%EB%84%A4%EC%9D%B4%EB%B2%84.com#abcd";

console.log(encodeURI(str));
console.log(decodeURI(str3));
//객체 .프로퍼티 (접근) 라고부르고 자바에선 맴버라고부름
// 메서드 : 객체에 종속된 함수
let obj = {
    x:10,
    y:"abcd",
    z:function(){}//메서드라고 부름
};
console.log(obj.x);