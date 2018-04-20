/**
 * Created by beikongguocai on 2017/3/28.
 */
/*
var buffer=new Buffer(256);
var len=buffer.write('我就是我');
console.log(len);*/
/*
var buffer=new Buffer(26);
for(var i=0;i<26;i++){
    buffer[i]=i+97;
}
console.log(buffer.toString('ascii'));
console.log(buffer.toString('utf-8',0,5));*/
/*var buffer=new Buffer('hello,bom');
var json=buffer.toJSON();
console.log(json);*/
/*var buffer1=new Buffer('ABC');
var buffer2=new Buffer(3);
buffer1.copy(buffer2);
console.log(buffer1.toString());
console.log(buffer2.toString());
var buffer3=Buffer.concat([buffer1,buffer2]);
var result=buffer1.compare(buffer2);*/
//console.log(result);
//console.log(buffer3.toString());
var buffer=new Buffer('rundomss');
var buffer1=buffer.slice(1,3);
console.log(buffer1.toString());