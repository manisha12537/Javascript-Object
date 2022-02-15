var dic={1: 'red', 2: 'green', 3: 'black', 4: 'purple', 5: 'black'}
var d={}
for(var i in dic){
  var k=0
  while(k<dic[i].length){
      k++
  }
  d[dic[i]]=k
}
console.log(d)