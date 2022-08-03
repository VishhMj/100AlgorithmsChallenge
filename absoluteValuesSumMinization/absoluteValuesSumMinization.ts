export function absoluteValuesSumMinimization(a: number[]): number {
    let isEven: boolean = a.length%2 === 0;
    
    return isEven ? a[a.length/2 - 1] : a[Math.floor(a.length / 2)]
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6])); 
// 4 + 2 + 1 + 0 => 7, 5 + 3 + 1 + 1 = 10
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));