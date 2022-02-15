var product_list = {'P 01' : 'DBMS', 'P 0 2' : 'OS','P0 3 ': 'Soft Computing'}
var dic={}
for(var i in product_list){
  var a=i.replace(" ","")
  var k=a.replace(" ","")
  dic[k]=product_list[i]
}console.log(dic)