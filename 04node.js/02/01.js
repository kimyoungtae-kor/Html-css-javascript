var arr= ["ABCD",true,1234];
console.log(arr.length);

var arr2 = new Array(10);
console.log(arr2);//Undefinded

//overloading


//slice (cf : substring)
var arr3 = arr.slice(1); //1이상 인덱스 2미만 인덱스까지 자르기
console.log(arr);//원본에 변화없음
console.log(arr3);

//split : 문자열 >> 배열 (구분자 seperator)
// join : 배열 >> 문자열로 

var str = "a-b-c-d-e"; // a/b/c/d/e/

arr =str.split('-');
console.log(arr);
arr = arr.join('/');
console.log(arr);

//자바의 배열 소융 맴버는 length 밖에없으면 조인사용방법은 String.join(배열,구분자)
arr = [1,2,3,4,5];
arr2 = [4,5,6,7];
var arr3 = arr.concat(arr2); //배열을이어붙이는 함수
var arr3 = [...arr,...arr2]; //concat과 같은역할 ...은 전개를한다
var arr3 = [0,...arr,10,...arr2]; //활용 원래는 unshift같은 함수를 써야구현할수있는걸 한줄로가능하다
console.log(arr3);
console.log(arr3.toString());

var num =1; // int num =1; num. Integer num =1; 이였을때 .으로 메서드호출가능한데 자바스크립트는 그런게없다
console.log(num.toString());

// 자바스크립트의 모든 변수는 객체로 관리됨 순수객체지향 언어

//함수
//hoist
// js >> 전체스캔 > 함수,변수 정리

console.log(f(10));
function f(x){
    return(x * x);
}

console.log(abc);
var abc = "1234";
console.log(abc);

//익명 함수
//변수 선언후 타입이 함수인 대상을 할당
//익명함수는 호이스팅 불가능
var f2 = function(x) {
    return x * x ;
}
console.log(f2(100));
console.log(function (x){
    return x*x;
}(20));


(function(str) {
  console.log("Hello" + str);  
})("용태");


function process() {
    return;
    var kor = 90;
    var mat = 90;
    var eng = 90;
    var avg = (kor + eng + mat)/3;
    return avg;
}
// 두수를 입력 받아 그중 큰값을 반환하는 함수
function max(x,y) {
    if(x > y){
        return x;
    }else{
        return x;
    }
}
console.log(max(5,10));



//여러수를 입력 받아 그중 큰값을 반환하는함수
function max2() {
    var max =  -Number.MAX_VALUE ;
    for(var i = 0 ; i < arguments.length;i++){
        if(typeof arguments[i] !=='number'){
            return undefined;
        }
        
        if(max < arguments[i]){
            max = arguments[i];
        }
    }
    return max == -Number.MAX_VALUE ? undefined : max;
    // for(i = 0 ;)

    console.log(max);

    // var aaa = arguments;
    // return Math.max(aaa);
}
console.log(max2()) ;

//화살표함수
// var max = (x,y) => {
//     if(x > y){
//         return x;
//     }else{
//         return x;
//     }
// }
// function을없애고 익명함수를 만든뒤 람다식
var max = (x,y) => x>y?x:y ;
var f = (f) => f*f;
var f = (f,b) => f*b;
console.log(max(5,10));
