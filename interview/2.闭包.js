function a(){
  var i = 1;
  function b(){
    console.log(i+1);
  }
  return b;
}

 var c = a();
 c();

 //自执行的闭包
 for(var i = 0; i < 2; i++){
   setTimeout(function(){
     console.log(i);
   },0)
 }
 //出现的不是0、1而是2、2，这就是在运行延时器的时候for已经做完了，这就是没有隔离作用域造成的
 //两种办法解决
 for(var i = 0; i < 2; i++){
   (function(i){
     setTimeout(function(){
       console.log(i);
     })
   })(i)
 }

 for(let i = 0; i< 2; i++){
   setTimeout(function(){
     console.log(i);
   },0)
 }
