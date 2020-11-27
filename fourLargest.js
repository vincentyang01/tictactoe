function fourLargest(arr){
    // arr.sort(function(a, b){
    //     return a - b
    // })
    // return [arr[arr.length-1], arr[arr.length-2], arr[arr.length-3], arr[arr.length-4]]

    // let one = Math.max(...arr)
    // arr.splice(arr.indexOf(one), 1)
    // let two = Math.max(...arr)
    // arr.splice(arr.indexOf(two), 1)
    // let three = Math.max(...arr)
    // arr.splice(arr.indexOf(three), 1)
    // let four = Math.max(...arr)
    // arr.splice(arr.indexOf(four), 1)
    // return [one, two, three, four]

    let one = 0; let two = 0; let three = 0; let four = 0
    for(let i = 0; i < arr.length; i++){
    if(arr[i] > one){
        four = three
        three = two
        two = one
        one = arr[i]
    } else if( arr[i] > two ){
        four = three
        three = two
        two = arr[i]
    } else if( arr[i] > three ){
        four = three
        three = arr[i]
    } else if( arr[i] > four ){
        four = arr[i]
    }
}
return [one, two, three, four]

}

fourLargest([4,20,6,28,50,22,13,31,5,1,25])