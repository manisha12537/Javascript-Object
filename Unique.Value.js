var a=[
    {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
    ]
let list=[]
for(var i in a){
    for(var j in a[i]){
        if(!list.includes(a[i][j])){
            list.push(a[i][j])
        }
    }
}
console.log(list)