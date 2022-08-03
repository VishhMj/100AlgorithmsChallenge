export function allLongestStrings(inputArray: string[]): string[] {
    inputArray.sort((str1: string, str2:string) => {
        return str1.length < str2.length ? 1 : -1
    })
    let res: string[] = []
    let largestLen: number = inputArray[0].length;
    let i = 0;
    while(inputArray[i].length === largestLen) {
        res.push(inputArray[i]);
        i++;
    }
    return res;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));