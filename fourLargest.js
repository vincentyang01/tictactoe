function sort(arr){
    arr.sort(function(a, b){
        return a - b
    })
    return [arr[arr.length-1], arr[arr.length-2], arr[arr.length-3], arr[arr.length-4]]
}

sort([4,20,6,28,50,22,13,31,5,1,25])