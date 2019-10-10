export default function bubble_sort(items, sleepAnimation) {
  return new Promise(async resolve => {
    let arraySort = [...items];
    for (let i = arraySort.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arraySort[j].number > arraySort[j + 1].number) {
          let temp = arraySort[j];
          arraySort[j] = arraySort[j + 1];
          arraySort[j + 1] = temp;
          await sleepAnimation(arraySort);
        }
      }
    }
    resolve(arraySort);
  });
}
