export default async function merge_sort(items, sleepAnimation) {
  return new Promise(async resolve => {
    let arraySort = [...items];

    const merge = (left, right) => {
      let leftIndex = 0;
      let rightIndex = 0;
      let resultArray = [];

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].number < right[rightIndex].number) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
    };

    const rec_merge_sort = async arrayItems => {
      if (arrayItems.length <= 1) {
        return arrayItems;
      }

      let middle = Math.ceil(arrayItems.length / 2);
      let firstDiv = arrayItems.slice(0, middle);
      let secondDiv = arrayItems.slice(middle);

      let _merge = merge(
        await rec_merge_sort(firstDiv),
        await rec_merge_sort(secondDiv)
      );
      await sleepAnimation(_merge);
      return _merge;
    };

    let _merge_sort = rec_merge_sort(arraySort);
    resolve(_merge_sort);
  });
}
