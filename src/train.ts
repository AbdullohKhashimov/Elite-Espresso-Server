console.log("hello world!");
/*G-TASK: 

Shunday function tuzingki unga integerlardan iborat
 array pass bolsin va function bizga osha arrayning 
 eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

@MITASK
*/
// type: array[]

function getHighestIndex(arr: number[]): number {
  let greatest: number | undefined;
  let greatestIndex: number | undefined;
  for (let i = 0; i < arr.length; i++) {
    if (!greatest || arr[i] > greatest) {
      greatest = arr[i];
      greatestIndex = i;
    }
  }
  return greatestIndex!;
}

const result: number = getHighestIndex([5, 21, 12, 21, 8]);
console.log("result:", result);
