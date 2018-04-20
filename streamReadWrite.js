/**
 * Created by beikongguocai on 2017/3/29.
 */
var fs=require('fs');
var readStream=fs.createReadStream('input.txt');
var writeStream=fs.createWriteStream('output.txt');
readStream.pipe(writeStream);