export default function shuffle(items, sleepAnimation) {
  return new Promise(async resolve => {
    let randomItems = [...items];

    for (let i = 0; i < items.length; i++) {
      let randomIndex = Math.floor(Math.random() * items.length);
      let auxItem = randomItems[i];
      randomItems[i] = randomItems[randomIndex];
      randomItems[randomIndex] = auxItem;
      // randomItems.splice(randomIndex, 0);

      await sleepAnimation(randomItems);
    }

    resolve(randomItems);
  });
}
