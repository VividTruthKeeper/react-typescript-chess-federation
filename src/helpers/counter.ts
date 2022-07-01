export const counter = (array: string[], searchItem: string): number => {
  return array.filter(
    (el) => el.toLocaleLowerCase() === searchItem.toLocaleLowerCase()
  ).length;
};

export const countChar = (str: string, searchItem: string): number => {
  return str.split(searchItem).length - 1;
};
