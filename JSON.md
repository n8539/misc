1，关于JS  JQUERY JSON

解析 JSON

在 jQuery 中已经提供了对于解析 JSON 的内在支持，

jQuery.parseJSON 函数提供了解析的支持，详细的说明见这里http://api.jquery.com/jQuery.parseJSON/。

var obj = jQuery.parseJSON('{"name":"John"}');  
alert( obj.name === "John" );  


使用对象生成 JSON 格式串

在 jQuery 中并没有提供直接将普通的 JavaScript 对象转换为 JSON 串的方法，可以使用下面的扩展库来完成。

jquery-json 扩展库

这个库用来扩展 jQuery ，对于 JSON 的使用，扩展了两个方法。

toJSON 方法用来将一个普通的 JavaScript 对象序列化为 JSON 串。

var thing = {plugin: 'jquery-json', version: 2.3};    
var encoded = $.toJSON( thing ); // '{"plugin":"jquery-json","version":2.3}' 

evalJSON 方法将一个 JSON 串解析为一个普通的 JavaScript 对象。

var thing = {plugin: 'jquery-json', version: 2.3};    
var encoded = $.toJSON( thing ); // '{"plugin":"jquery-json","version":2.3}'   
var name = $.evalJSON( encoded ).plugin; // "jquery-json"   
var version = $.evalJSON(encoded).version; // 2.3 
这个扩展的下载地址：http://code.google.com/p/jquery-json/
