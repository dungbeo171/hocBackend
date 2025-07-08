function mergeAndRemoveDuplicates(arr1, arr2) {
    const a = new Set([...arr1, ...arr2]);
    return [...a];
}
console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); 