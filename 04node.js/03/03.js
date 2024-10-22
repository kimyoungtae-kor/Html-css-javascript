const arr = [10,20,30,40,50];
//fillter,foreach
//10,30,50 만출력

function f(x){
    return x % 20 !=0;
}
function f2(x){
    console.log(x);
}
function f3(x){
    return x ** 2 /10;
}
//프레디킷 : true.false
// arr.filter(i => (i /10) %2 == 1).forEach(num => console.log(num));
arr.filter(i => f(i)).map(i => f3(i)).forEach(num => f2(num));

arr.filter(i => i%20!=0).forEach(x => console.log(x));



// arr.filter(function(x){
//     x % 20 != 0
// }).map(function(x){
//     x ** 2/10
// }).forEach(x)
// {
//     console.log(x)
// };


const arr2 = [1,5,7,8];
const result = arr2.reduce(function(acc,cur){
    console.log("acc : "+acc);
    console.log("cur : "+cur);
    return acc+cur;
},0);
console.log(result);
//reduce = 행을 합치는것