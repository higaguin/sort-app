export default function insertion_sort(items, sleepAnimation) {
  return new Promise(async resolve => {
    let arraySort = [...items];

    for (let i = 1; i < arraySort.length; i++) {
      let j = i;
      let auxIndex = i;

      while (j >= 0) {
        if (arraySort[j].number > arraySort[auxIndex].number) {
          arraySort = arraySort
            .slice(0, j)
            .concat([arraySort[auxIndex]])
            .concat([arraySort[j]].concat(arraySort.slice(j + 2)));
          await sleepAnimation(arraySort);
          auxIndex--;
        } else {
          j--;
        }
      }
    }

    resolve(arraySort);
  });
}
