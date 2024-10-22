
function Student(no,name,kor,eng,mat) {
    // let _no = no;
    // this.setNo = function(no){
    //     _no = no;
    // }
    // this.getNo = function(){
    //     return _no;
    // }

    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
}
//프로토타입은 함수 ,메서드만만든다
Student.prototype.total = function() {
    return this.kor + this.eng + this.mat;
}
const s1 = new Student(1,"새똥이",100,100,100);

console.log(s1.total());


const arr = [1,2,3,4,5];
//중간삭제,중간추가
// arr.splice(1,3,10,20);
Array.prototype.remove = function(index) {
    this.splice(index,1);
}//Array는 내장클래스 배열인데 prototype으로 인해 메서드를 추가함 개사기기능이네
console.log(arr.remove(3));
console.log(arr);
//in operator
for(let i in s1){
    if(i == 'name'){
        s1[i] = '소똥이';
    }
    console.log(i,s1[i]);
}

for(let i in arr){
    console.log(i,arr[i]);
}

console.log('name' in s1);
console.log('addr' in s1);

for(let i in "abcde"){
    console.log(i,"abcde"[i]);
}


// for(let i of arr){
//     console.log(i,s1[i]);
// }