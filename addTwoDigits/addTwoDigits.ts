export function addTwoDigits(n: any): number {
    let nums: any = n.toString().split('');
    
    // return nums.reduce((a: string, b:string) => {
    //     return parseInt(a) + parseInt(b);
    // })

    return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29));