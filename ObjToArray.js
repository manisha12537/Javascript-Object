var dic={1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
var list2=[]
for(var i in dic){
  var list=[]
  list.push(i)
  list.push(dic[i])
  list2.push(list)
}
console.log(list2)