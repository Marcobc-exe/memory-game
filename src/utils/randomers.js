const getRandomInt = (num) => {
  return Math.floor(Math.random() * (num + 1));
}

function shuffleArray(list) {
  for (let animal = list.length - 1; animal > 0; animal--) {
    const positon = getRandomInt(animal);
    [list[animal], list[positon]] = [list[positon], list[animal]];
  }

  return list;
}

export {
  getRandomInt,
  shuffleArray
}