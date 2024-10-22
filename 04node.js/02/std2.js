// class Student {
//     constructor(no,name,score){
//         this._no = no;
//         this.name = name;
//         this.score = score;
//     }
//     toString(){
//         return `학번 : ${this._no}`;
//     }
//     get getName(){
//         return this.name;
//     }
//     set setName(name){
//         this.name = name;
//     }
//     set no(n){
//         if(n < 0){
//             return;    
//         }
//         this._no = n;
//     }
// }
// let student = new Student(1,"말똥이",60);
// console.log(student.getName);
// student.setName = '소똥이';
// console.log(student.getName);
// student._no = 10;
// console.log(student);
// console.log(student.toString());

// for(let i in student){
//     console.log(i);
// }

let num = 10; // typeof number


console.log(num.toFixed(2));
num = new Number(20); //typeof object
console.log(num.toFixed(2));
let str = "abcd";//String
str = new String("ABCD");// typeof object

console.log(typeof str);

