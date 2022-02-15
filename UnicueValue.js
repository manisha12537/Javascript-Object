var l=[{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
var list=[]
for(var i in l){
  for(var j in l[i]){
    if(!list.includes(l[i][j])){
      list.push(l[i][j])
    }
  }
} console.log(list)