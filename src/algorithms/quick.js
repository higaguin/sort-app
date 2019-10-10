export default async function quick_sort(items, sleepAnimation) {
  return new Promise(async resolve => {
    let arraySort = [...items];

    const swap = (items, leftIndex, rightIndex) => {
      var temp = items[leftIndex];
      items[leftIndex] = items[rightIndex];
      items[rightIndex] = temp;
    };

    const _quick_sort = async (items, left, right) => {
      var index;
      if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
          await _quick_sort(items, left, index - 1);
        }
        if (index < right) {
          await _quick_sort(items, index, right);
        }
      }
      await sleepAnimation(items);
      return items;
    };

    const partition = (items, left, right) => {
      var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
      while (i <= j) {
        while (items[i].number < pivot.number) {
          i++;
        }
        while (items[j].number > pivot.number) {
          j--;
        }
        if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
        }
      }
      return i;
    };

    resolve(await _quick_sort(arraySort, 0, arraySort.length - 1));
  });
}
