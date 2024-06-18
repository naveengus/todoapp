export const findIndexById = (array, id) => {
  for (var i = 0; i < array.length; i++) {
    if (id === array[i].id) {
      return i;
    }
  }
  return -1;
};
