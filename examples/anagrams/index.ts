/***
 * Given two strings, write a function to determine if the second string is an anagram
 * of the first. An anagram is a word, phrase, or name formed by rearranging the 
 * letters of another, such as cinema, formed from iceman.
 */


const validAnagram = (str1: string, str2: string) => {
    if (str1.length !== str2.length) return false;

    let lookup = {};
    for (let i = 0; i < str1.length; i++){
        const letter = str1[i].toLowerCase();
        lookup[letter] = (lookup[letter] || 0) + 1;
    }
    for(let i = 0; i < str2.length; i++){
        const letter = str2[i].toLowerCase();
        if (!lookup[letter]){
            return false;
        }
        lookup[letter] -= 1;
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram'));