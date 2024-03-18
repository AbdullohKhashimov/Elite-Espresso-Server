/**N-TASK: 

Shunday function yozing, u string qabul qilsin
 va string palindrom yani togri oqilganda ham, 
 orqasidan oqilganda ham bir hil oqiladigan 
 soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

@MITASK
 * 
 */

function palindromCheck(str: string) {
  // find the length of a string
  const len = str.length;

  // looping through half of the string
  for (let i = 0; i < len / 2; i++) {
    // a logic to check if the first and last string are same
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
    return true;
  }
}
const result = palindromCheck("dad");
console.log(result);

/* M-TASK
Shunday function yozing, 
u raqamlardan tashkil topgan array 
qabul qilsin va array ichidagi har bir raqam
 uchun raqamni ozi va hamda osha raqamni kvadratidan 
 tashkil topgan object hosil qilib, hosil bolgan 
 objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return 
[{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
@MITASK

*/

/*
const getSquareNumbers = (ele: any[]) => {
  let result_store = [];

  for (let i = 0; i < ele.length; i++) {
    result_store.push({ number: ele[i], square: ele[i] * ele[i] });
  }
  return result_store;
};
const result = getSquareNumbers([1, 2, 3]);
console.log(result);*/

/* L-TASK: 

Shunday function yozing, u string qabul qilsin va 
string ichidagi hamma sozlarni chappasiga yozib 
va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
*/

/*
function reverseSentence(str: string) {
  const split_str = str.split(" ");
  let reversed_str = [];

  for (const word of split_str) {
    reversed_str.push(word.split("").reverse().join(""));
  }

  return reversed_str.join(" ");
}
const result = reverseSentence("we like coding!");
console.log(result); 
*/

/** K-TASK: 

Shunday function yozing, u string qabul qilsin 
va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;
*/

/*
// defining a function to count the vowels in a string
const countVowel = (str: string) => {
  // find the count of vowels
  const matches = str.match(/[aeiou]/gi);

  // Ternary operator to handle the case when matches is null
  const count: number = matches ? matches.length : 0;
  // return number of vowels
  return count;
};
const result = countVowel("string");
console.log("result:", result); 
* /

/* J-TASK: 

Shunday function yozing, 
u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

@MITASK
*/

/* function findLongestWord(str: any) {
  // Split the string into array
  let strSplit = str.split(" ");

  // Return the first sorted item of the Array
  return strSplit.sort((a: any, b: any) => b.length - a.length)[0];
}
const result = findLongestWord("I come from Uzbekistan");
console.log("result:", result); */

/* I-TASK: 

Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

@MITASK */

/* function getDigits(str: string) {
  let num_str = str.replace(/[^0-9]/g, "");
  return parseInt(num_str);
}

const result = getDigits("m14i1t");
console.log(result); */

/**
 * Project Standards:
 * - Logging standards
 * - Naming standards
 *    function, method, variable => CAMEL case  goHome/getLogin
 *    class => Pascal case                      MemberService
 *    folder, file => KEBAB case
 *    css Class => SNAKE case                   button_style
 * - Error handling
 *
 */

/** Cookie ni hislatlari
 * 1)
 * **/

/** Kop ishlatiladigon APIs
 *  Traditional API
 * Rest API
 * GraphQL API
 * **/

/* H-TASK: 

shunday function tuzing, u integerlardan iborat 
arrayni argument sifatida qabul qilib, 
faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

@MITASK */
/*
function getPositive(arr: number[]) {
  return arr.reduce((result: string, num: number) => {
    if (num > 0) {
      result += num.toString();
    }
    return result;
  }, "");
}
const result = getPositive([1, -4, 2]);
console.log(result); */

/*TASK: 

Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
MASALAN: gerReverse("hello") return qiladi "olleh"

@MITASK
*/
/*
function string_reverse(str: string) {
  // empty string
  let new_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    new_str += str[i];
  }
  return new_str;
}
const result = string_reverse("hello");
console.log("result:", result);
*/
/*G-TASK: 

Shunday function tuzingki unga integerlardan iborat
 array pass bolsin va function bizga osha arrayning 
 eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

@MITASK
*/
// type: array[]

// function getHighestIndex(arr: number[]): number {
//   let greatest: number | undefined;
//   let greatestIndex: number | undefined;
//   for (let i = 0; i < arr.length; i++) {
//     if (!greatest || arr[i] > greatest) {
//       greatest = arr[i];
//       greatestIndex = i;
//     }
//   }
//   return greatestIndex!;
// }

// const result: number = getHighestIndex([5, 21, 12, 21, 8]);
// console.log("result:", result);
