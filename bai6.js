function removeDuplicates(arr) {
    const a =  new Set(arr);
    return [...a];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 