function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function calculation(x,y,callback){
    return callback(x,y);
}
let result=calculation(2,5,add);
let result1=calculation(21,5,add);
console.log(result);
console.log(result1);