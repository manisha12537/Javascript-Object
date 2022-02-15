var dic={1: ['Jean Castro'], 2: ['Lula Powell'], 3: ['Brian Howell'], 4: ['Lynne Foster'], 5: ['Zachary Simon']}
var d={}
var list=[]
for(var i in dic){
  for(var j in dic[i]){
    d[i]=dic[i][j]
  }
}
list.push(d)
console.log(list)