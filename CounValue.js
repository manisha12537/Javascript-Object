var dict = {

    'Alex': ['subj1', 'subj2', 'subj3'],
    
    'David': ['subj1', 'subj2']
    
    }
var value_count=0   
for(var i in dict){
    for(var j in dict[i]){
        value_count+=1
    }
}    console.log(value_count)