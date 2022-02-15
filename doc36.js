var a={'key1': 1, 'key2': 3, 'key3': 2}
var b={'key1': 1, 'key2': 2}
for(var i in a){
  for(var j in b){
    if(i==j && a[i]==b[j]){
      console.log(a[i],i)
    }
  }
}