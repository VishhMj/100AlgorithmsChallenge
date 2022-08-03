export function adjacentElementsProduct(inputArray: number[]): number {
    let maxxProduct = -9999999;
    for (let i = 0; i < inputArray.length - 1; i++) {
        let currProduct = inputArray[i] * inputArray[i + 1];
        // maxxProduct = Math.max(maxxProduct, currProduct);
        maxxProduct = maxxProduct < currProduct ? currProduct : maxxProduct;
    }
    return maxxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));