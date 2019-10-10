export default function selection_sort(items, sleepAnimation) {
  return new Promise(async resolve => {
    let arraySort = [...items];
    for (let j = arraySort.length - 1; j > 0; j--) {
      let largest = { number: 0 };
      let largestIndex = 0;
      for (let i = 0; i <= j; i++) {
        if (arraySort[i].number > largest.number) {
          largest = arraySort[i];
          largestIndex = i;
        }
      }
      arraySort[largestIndex] = arraySort[j];
      arraySort[j] = largest;

      await sleepAnimation(arraySort);
    }
    resolve(arraySort);
  });
}
