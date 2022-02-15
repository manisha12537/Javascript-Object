var dic={'V': [1, 4, 6, 10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
var dict={}
for(var i in dic){
  var list=[]
  for(var j in dic[i]){
    if(dic[i][j]%2==0){
      list.push(dic[i][j])

    }
  }dict[i]=list
}console.log(dict)


// var dic={'V': [1, 4, 6, 10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
// var dict={}
// for(var i in dic){
//   var list=[]
//   for(var j in dic[i]){
//     if(dic[i][j]%2!=0){
//       list.push(dic[i][j])

//     }
//   }dict[i]=list
// }console.log(dict)