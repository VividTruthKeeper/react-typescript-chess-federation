import { counter, countChar } from "./counter";

export const assembleData = (array: Object[]): string[][] => {
  const out: string[][] = [];
  array.forEach((el) => {
    const pushed = Object.keys(el).map((method) => {
      return (el as any)[method];
    });

    out.push(pushed);
  });
  return out;
};

export const exactSearch = (
  assembled: string[][],
  searchItem: string
): number[] => {
  const priority: number[] = [];

  assembled.forEach((arr) => {
    let count = 0;
    const result = counter(arr, searchItem);
    count = count - result;
    priority.push(count);
  });

  return priority;
};

export const charSearch = (assembled: string[][], searchItem: string) => {
  const priority: number[] = [];

  assembled.forEach((arr) => {
    let count = 0;
    const conCat: string = arr.join("").toLocaleLowerCase();
    const result = countChar(conCat, searchItem);
    count = count - result;
    priority.push(count);
  });

  return priority;
};

export const searchFull = (assembled: string[][], searchItem: string) => {
  const exact = exactSearch(assembled, searchItem);
  const char = charSearch(assembled, searchItem);
  const temp: number[] = [];

  exact.forEach((el, i) => {
    temp.push(el + char[i]);
  });

  return temp;
};
