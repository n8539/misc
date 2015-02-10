//JS创建对象的几种方法
//方便学习js类的朋友，让你快速的掌握js类的定义方法，方法有很多种，结果都一样。大家可以根据自己的爱好选用。
//贴个代码先: 
function O(user,pwd){ //use constructor 
this.user=user; 
this.pwd=pwd; 
this.get=get; 
return this; 
} 
function O2(user,pwd){ //use factory 
var obj=new Object(); 
obj.user=user; 
obj.pwd=pwd; 
obj.get=get; 
return obj; 
} 
function O3(){ //use prototype 
} 
O3.prototype.user='abc'; 
O3.prototype.pwd='dis'; 
// O3.propotype.get='get'; 
//O3.prototype.get(){ 
//alert(this.pwd); 
//} 
function O4(user,pwd){ 
this.user=user; 
this.pwd=pwd; 
return this; 
} 
O4.prototype.get=function(){alert('123');} 

//function get(){ 
//alert("This User:"+this.user); 
// } 
function test2(){ 
//var a=new O2('Us','Pw'); use factory & constructor 
//var a=new O3(); //use prototype 
//a.get(); 
var a=new O4('*U4','P4'); //混合 
//a.user='Not ABC'; //set new property 
//alert(a.user); 
a.get(); 
} 