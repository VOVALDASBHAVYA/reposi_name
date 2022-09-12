function first(){
    console.log("first function");
}
function second(){
    console.log("second function");
}
function third(x){
    //x();
    console.log("third function");
    x();
}
function fourth(z){
    z();
    //y();
    console.log("fourth function");
   // y();

}
first();
third(first);
//third(second);
fourth(first);
//fourth(second);
