var dict_num = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
var count=0
console.log("key"," ","value"," ","count")
for(var i in dict_num){
  count+=1
  console.log(i,"   ",dict_num[i],"   ",count)
}