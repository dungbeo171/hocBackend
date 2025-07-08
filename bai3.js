function filterEvenNumbers(arr) {
    const a = arr.filter(x => x%2 == 0);
    return a;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 