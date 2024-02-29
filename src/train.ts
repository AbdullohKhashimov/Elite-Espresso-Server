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
