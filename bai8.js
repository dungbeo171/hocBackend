function findMostFrequent(arr) {
    const fre = {};
    let max_c = 0;
    let max_fre;

    for(let i of arr){
        fre[i] = (fre[i] || 0) + 1;
        if(fre[i] > max_c) {
            max_c = fre[i];
            max_fre = i;
        }
    }
    return max_fre
}
console.log(findMostFrequent([1, 2, 3, 2, 1, 2]));