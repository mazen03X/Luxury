const btn1 =document.getElementById('btn1');
const h1 =document.querySelector('h1');


btn1.onclick= function(){
    h1.classList.toggle("Hidden");

}



btn1.onmouseover= function(){



interval = setInterval(() => {
    RanColor=RandomColor();
        btn1.style.transition='background-color 3s ease-in-out';

  btn1.style.backgroundColor = RanColor;
  h1.style.transition='color 3s ease-in-out';
              h1.style.color=RanColor;
              
  
}, 3000);
}
 

btn1.onmouseleave=function(){
 clearInterval(interval);

}
RandomColor = function(){
return '#'+ Math.floor(Math.random()*16777215).toString(16);
}
randomColor= RandomColor();
  btn1.style.backgroundColor = randomColor;
                h1.style.color=randomColor;
