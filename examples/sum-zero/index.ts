/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0
 * Return an array that includes both values that sum to zero or undefined
 * if a pair does not exist
 *
 * Examples:
 * sumZero([-3,-2, -1, 0,1,2,3]) // [-3, 3]
 * sumZero([-2, 0, 1, 3]) // undefined
 * sumZero([1, 2, 3]) // undefined
 */

const sumZero = (numbers: number[]) => {
  if (numbers && numbers.length === 0) return undefined;

  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] +  numbers[j];
    if (sum === 0){
        return [numbers[i], numbers[j]];
    }else if (sum < 0){
        i++;
    }else j--;
  }
  return undefined;
};

console.log(sumZero([1, 2, 3]));
