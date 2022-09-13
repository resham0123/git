let x=13;
let count=0;
for(let i=1; i<=x; i++){
if(x%i==0){
count++;
}
 }
if(count==2){
console.log("Not Prime");
}else{
console.log("Prime")
}