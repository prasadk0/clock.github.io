

setInterval(()=>{
    const date =  new Date();
const min = date.getMinutes();
const hours=date.getHours();
const seconds=date.getSeconds();
  document.getElementById('hour').innerHTML=hours;
//    const hour=document.getElementById('hour').innerHTML;
 
//    console.log(hour);
// console.log(hours);
   document.getElementById('minute').innerHTML=min;
//    console.log(min);
   document.getElementById('second').innerHTML=seconds;

//    console.log(seconds);

},100);