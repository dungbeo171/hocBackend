function findMax(arr) {
    const find_max = arr.reduce(function(max, current){
        return current > max ? current : max;
    },0);
    return find_max;
}
console.log(findMax([10, 20, 30, 5])); 