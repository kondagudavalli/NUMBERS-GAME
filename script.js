const increment=document.getElementById("inc");
const decrement=document.getElementById("dec");
const increment5=document.getElementById("inc5");
const decrement5=document.getElementById("dec5");
const result=document.getElementById("result");
const content=document.getElementById("content");
function op(){
  result.textContent=count;
}
let count =0;
increment.addEventListener("click",function(){
    console.log("clicking...")
  count=count+1;
  op();
  content.textContent="Incresing One By One..."
});
decrement.addEventListener("click",function(){
    if(count>0){
        count=count-1;
       op();
         content.textContent="Decresing One By One..."

    }
});
increment5.addEventListener("click",function(){
    count=count+5;
   op();
     content.textContent="Incresing Five to each time..."

});
decrement5.addEventListener("click",function(){
    if(count>4){
        count=count-5;
        op();
          content.textContent="Decresing 5 to each time..."

    }
});