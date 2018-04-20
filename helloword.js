/**
 * Created by beikongguocai on 2017/3/29.
 */
/*
var word=require('./hello');
word.world();*/
function  say(word) {
    console.log(word);
}
function  execute(world,value) {
    world(value);
}
execute(say,'hello')
console.log(__filename);
console.log(__dirname)