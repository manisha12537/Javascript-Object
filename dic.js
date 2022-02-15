var num_list = [1, 2, 3, 4]
var a=d={}
for(var i in num_list){
  d[i]={}
  d=d[i]
}
console.log(a)