var s = {x:10,z:true,no:10};

s.no = 20;
s.name = "이재용";
s.mat = 70;
s.kor = 80;
s.eng = 70;
s.total = function() {
    return this.kor + this.eng + this.mat;
}
// console.log(s.no);
// // 필드 제거 :delete
// delete s.no;
// console.log(s);
// console.log(s.no);
// console.log(s.total());

// typeof연산자 : 단항,대상 피연산자의 타입을 문자열로 반환
// var num = 10;
// num = Boolean(String(num));
// console.log(num,typeof num);


// 문자열 <<>> 숫자
// num = "1234"*1;
// console.log(num,typeof !!num);


num ="ABCD";
num /= 1;
// num /= 1 ;
// num = !!num; boolean

//문자열 만들기 : 빈무자열 붙이기
//숫자 만들기 : /1 ,*1 , -0
//boolean 만들기 : !!(이중부정)

//다른 데이터 타입이 논리 연산종 false가 오는경우
// 문자열 >> 빈문자열일때 공백한칸도 true라서 완전히빈문자열
// 숫자 >> 0
// 논리 >> false
// 객체 >> null(주소값 위주로 쫒아가서 null만됨)
// 함수 >> 
// 함수 = 일급객체
if(function() {

}){

}




console.log(num,typeof num);
console.log(3/0,0/0);

for(var i = 10 ;--i ;){
    console.log(i);
}
//var arr = {}; 객체 리터럴
//var arr = []; //배열 리터럴
var arr = new Array(10) //가변길이 가지는 배열
// var arr = new Array(10,20); //10과 20을 가지는 2칸의 배열

arr[0] = 1;
arr[1] =";";
arr[2] = true;
arr[3] = undefined;
arr[4] = [1,2,3,4];
arr[5] = {x:10,y:20};
arr[5].x = 30;
console.log(arr[4][2]);
console.log(arr[5].y);//20
console.log(arr[5]['x']);//10 //30
arr.length = 19;
console.log(arr);
console.log(arr[100]);
arr[99] = 1234;
console.log(arr);
arr.length =2;
console.log(arr);
