/* 
V-TASK:

Shunday function yozing, uni string parametri bolsin 
va stringdagi harf va u harf necha marta takrorlangani sonidan
 tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

@MITASK
*/

const countChars = (str: any) => {
  const charCount: any = {};

  // loop through each character in the string
  for (let idx of str) {
    // if the character already exists in the charCount object,increment its count
    if (charCount[idx]) {
      charCount[idx]++;
    } else {
      // otherwise, intialize its count to 1
      charCount[idx] = 1;
    }
  }
  return charCount;
};
const result = countChars("hello");
console.log("result:", result);

/** 
 U-TASK:

Shunday function yozing, uni number parametri bolsin
 va 0 dan berilgan parametrgacha bolgan oraliqdagi 
 faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

**/

/*
const sumOdds = (arr: any) => {
  let count = 0;
  for (let i = 0; i < arr; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }

  return count;
};

const result = sumOdds(9);
console.log("result:", result);
*/

/* T-TASK:
Shunday function yozing, u sonlardan tashkil topgan 
2 ta array qabul qilsin va ikkala arraydagi sonlarni 
tartiblab bir arrayda qaytarsin
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]
@MITASK
*/

/* const mergeSortedArrays = (arr1: any, arr2: any) => {
  let new_arr = [];

  // inserting all elements from arr1 to new_arr
  for (let i = 0; i < arr1.length; i++) {
    new_arr.push(arr1[i]);
  }

  // inserting all elements from arr2 to new_arr
  for (let i = 0; i < arr2.length; i++) {
    new_arr.push(arr2[i]);
  }

  // Sort the merged array in ascending order
  new_arr.sort((a, b) => a - b);
  return new_arr;
};

let result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log("result:", result);
*/

// if string output is wanted
/**  console.log("result:", result.join(" ")); **/

/*
       S-TASK:
Shunday function yozing, u numberlardan tashkil topgan
array qabul qilsin va osha numberlar orasidagi tushib
qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
 */

/*

const missingNumber = (arr: number[]) => {
  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
};
const result = missingNumber([3, 0, 1]);
console.log("result:", result);

*/
// 2nd solution
/*
function missingNumber(arr: number[]) {
  const max = Math.max(...arr); // Will find the highest number
  const min = Math.min(...arr); // will find the lowest number
  const missing = [];

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      // Checking whether i(current value) present in num(argument)
      missing.push(i); //Adding numbers which are not in num(argument) array
    }
  }
  return missing;
}
*/

/*
R-TASK:

Shunday function yozing, u string parametrga ega bolsin. 
String "1+2" holatda pass qilinganda string ichidagi 
sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;

@MITASK

*/

/* const calculate_string = (str: any) => {
  let new_arr = str.split("").map(Number);
  let num_arr = [];

  for (let i = 0; i < new_arr.length; i++) {
    if (!isNaN(new_arr[i])) {
      num_arr.push(new_arr[i]);
    }
  }

  return num_arr.reduce((a: any, b: any) => a + b);
};

const result = calculate_string("1+2+3");
console.log("result:", result);
*/
// Q-TASK:

/* Shunday function yozing, u 2 ta parametrgga ega bolib
 birinchisi object, ikkinchisi string. Agar string parametr
 objectni propertysi bolsa true bolmasa false qaytarsin.
 MASALAN: hasProperty({name: "BMW", model: "M3"}, "model")
 return true; hasProperty({name: "BMW", model: "M3"}, "year") return false
*/

/* const hasProperty = (obj: any, str: any) => {
  let new_arr = [];
  let new_arr1 = [];
  for (const key of Object.keys(obj)) {
    if (key === str) {
      new_arr.push(key);
    } else {
      new_arr1.push(key);
    }
  }
  return new_arr.length === 0 ? false : true;
};
const result = hasProperty({ name: "BMW", model: "M3" }, "model");
console.log("result:", result);
*/

/*
P - TASK:

Shunday function yozing, u object qabul
 qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

@MITASK
*/

// Solution 1
/* function objectToArray(val: any) {
  const result = [];
  for (let key in val) {
    if (val.hasOwnProperty(key)) {
      result.push([key, val[key]]);
    }
  }
  return result;
}
// solution 2 shortest
/*  function objectToArray(obj: {}) {
  return Object.entries(obj);
}


const obj = { a: 10, b: 20 };
const result = objectToArray(obj);
console.log("result:", result); */

/**O-TASK:

Shunday function yozing, u har xil valuelardan iborat array
 qabul qilsin va array ichidagi sonlar yigindisini hisoblab 
 chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

@MITASK */

/* function calculateSumOfNumbers(arr: any) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === "number") sum += arr[i];
  }

  return sum;
}
const result = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
console.log("result:", result);
*/

/**N-TASK: 

Shunday function yozing, u string qabul qilsin
 va string palindrom yani togri oqilganda ham, 
 orqasidan oqilganda ham bir hil oqiladigan 
 soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

@MITASK
 * 
 */

/* function palindromCheck(str: string) {
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
*/
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
