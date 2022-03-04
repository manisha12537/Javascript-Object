var arr=[[1, 'Jean Castro', 'V'], [2, 'Lula Powell', 'V'], [3, 'Brian Howell', 'VI'], [4, 'Lynne Foster', 'VI'], [5, 'Zachary Simon', 'VII']]
var i=0
var obj={}
while(i<arr.length){
    var j=0
    var arr_2=[]
    while(j<arr[i].length){
        if(j==0){
            obj[arr[i][j]]=arr_2
        }else{
            arr_2.push(arr[i][j])
        }        
        j++
    }
    i++
}
console.log(obj)