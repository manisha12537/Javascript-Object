var list=[[1, 'Jean Castro', 'V'], [2, 'Lula Powell', 'V'], [3, 'Brian Howell', 'VI'], [4, 'Lynne Foster', 'VI'], [5, 'Zachary Simon', 'VII']]
// Convert the said list of lists to a dictionary:
// {1: ['Jean Castro', 'V'], 2: ['Lula Powell', 'V'], 3: ['Brian Howell', 'VI'], 4: ['Lynne Foster', 'VI'], 5: ['Zachary Simon', 'VII']}
var dict={}
for(var i in list){
  var a=[]
    for(var j in i){
      for(var k in list[i]){
        if(typeof(list[i][k])!="number"){
          a.push(list[i][k])
        }
      }
    }dict[list[i][j]]=a
}
console.log(dict)

