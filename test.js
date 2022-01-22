const ary = [1,2,5,90,23,987,101];
const e = new Error('abort');
for(var item of ary){
    console.log(item);
}

// for(var item of e){
    console.log('error name:',e.name)
    console.log('error message:',e.message)
// }