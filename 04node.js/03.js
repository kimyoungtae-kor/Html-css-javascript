var arr = [];
//10을 추가, 30을 추가, 5를 추가, 20을 추가
//40을 0번인덱스에 추가

arr.push(10,30,5,20);
console.log(arr);
arr.unshift(40);
console.log(arr);
arr.reverse();
console.log(arr);
arr.sort((x,y) => y - x);
console.log(arr);
