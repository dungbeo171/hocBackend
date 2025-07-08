function countOccurrences(arr, value) {
    const a = arr.reduce((total, current) => current == value ? total+=1 : total, 0);
    return a;
}
console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2));