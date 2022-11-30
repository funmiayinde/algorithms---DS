/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the
 * array has it's corresponding value squared in the second
 * array. The frequency of the values must be the same.
 * Examples:
 *  same([1,2,3], [4, 1, 9]) // true
 *  same([1,2,3], [1, 9]) // false
 *  same([1,2,1], [4,4,1]) // false (must be same frequency)
 * */

/**
 * @params {Array} arr1 The first array
 * @params {Array} arr2 The second array
 */
const same = (arr1: number[], arr2: number[]) => {
    if (arr1.length !== arr2.length) return false;
    let obj1 = {};
    let obj2 = {};

    for (const key of arr1){
        obj1[key] = ++obj1[key] || 1;
    }
    for (const key of arr2){
        obj2[key] = ++obj2[key] || 1;
    }
    for (let key in obj1){
        //@ts-ignore
       if (!(key ** 2 in obj2)) {
        return false;
       }
       //@ts-ignore
       if (obj2[key ** 2] !== obj1[key]){
        return false;
       }
    }
    return true;
}

console.log(same([1,2,3], [4, 1, 9]) )
export default same;