const para= document.getElementsByTagName('p')

let count=0;
function incr(){
 console.log(count)
 
    count++;
    para[0].textContent=count
    para[1].textContent="";
    
    if(count%2 == 0 || count ==! +2){
        console.log("even",count)
        para[1].textContent="Evening Number";
    }else{
        console.log("odd",count)
        para[1].textContent="Odd Number"
    }
} 

function decr(){
    if(count>0){
    count--
    para[0].textContent=count
    para[1].textContent="decremented"
}
else
{
    alert("dont decrese than zeroo")
}
}
function reset()
{
    count=0;
    para[0].textContent=count
    para[1].textContent=""
}
// function incr(n) {
//     console.log(n)
//     n = Number(n);
//     return n === 0 || !!(n && !(n%2));
//   }
  
//   function decr(n) {
//     return isEven(Number(n) + 1);
//   }