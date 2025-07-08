function isSymmetricArray(arr) {
    let b = true;
    let c = arr.length;
    for(let i = 0; i<c/2;i++){
        if(arr[i] != arr[c-1-i]){
            b = false;
        }
    }
    return b;
}
console.log(isSymmetricArray([1, 2, 3, 2, 1])); 
console.log(isSymmetricArray([1, 2, 3, 4, 5])); 