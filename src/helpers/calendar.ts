export interface innerTempType {
  month: string;
  data: string[];
}

interface monthType {
  name: string;
  number: number;
  days: number;
}

export interface dataItem {
  data: string[];
  month: string;
}

export type dateMatrix = [dataItem[], number];

const date = new Date();

const checkLeapYear = (year: number) => {
  return new Date(year, 1, 29).getDate() === 29;
};

const months: monthType[] = [
  {
    name: "January",
    number: 1,
    days: 31,
  },
  {
    name: "February",
    number: 2,
    days: checkLeapYear(date.getFullYear()) ? 29 : 28,
  },
  {
    name: "March",
    number: 3,
    days: 31,
  },
  {
    name: "April",
    number: 4,
    days: 30,
  },
  {
    name: "May",
    number: 5,
    days: 31,
  },
  {
    name: "June",
    number: 6,
    days: 30,
  },
  {
    name: "July",
    number: 7,
    days: 31,
  },
  {
    name: "August",
    number: 8,
    days: 31,
  },
  {
    name: "September",
    number: 9,
    days: 30,
  },
  {
    name: "October",
    number: 10,
    days: 31,
  },
  {
    name: "November",
    number: 11,
    days: 30,
  },
  {
    name: "December",
    number: 12,
    days: 31,
  },
];

export const monthsEng: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthsLocale: string[] = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const matchLocaleLang = (month: number) => {
  return monthsLocale[month];
};

const days: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const daysLocale: string[] = ["Пн", "Вт", "Ср", "Чт", "Пн", "Сб", "Вс"];

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export const generateDateMatrix = (year: number) => {
  let out: Object[] = [];
  months.forEach((month) => {
    let values: string[] = [];
    Array.from({ length: month.days }, (_, i) => i + 1).forEach((el, i) => {
      values.push(
        `${el}-${
          getFirstDayOfMonth(year, month.number - 1) !== 0
            ? days[(getFirstDayOfMonth(year, month.number - 1) - 1 + i) % 7]
            : days[(days.length - 1 + i) % 7]
        }`
      );
    });
    let temp: innerTempType = {
      month: month.name,
      data: values,
    };
    out.push(temp);
  });
  return [out, year] as dateMatrix;
};

export const stringSep = (string: string) => {
  return string.split("-") as string[];
};

export const matchDayNumber = (day: string): number => {
  if (day === days[0]) {
    return 1;
  } else if (day === days[1]) {
    return 2;
  } else if (day === days[2]) {
    return 3;
  } else if (day === days[3]) {
    return 4;
  } else if (day === days[4]) {
    return 5;
  } else if (day === days[5]) {
    return 6;
  } else if (day === days[6]) {
    return 7;
  } else {
    return 0;
  }
};

export const matchDateToDay = (array: string[]) => {
  const placeholder = [0, 0, 0, 0, 0, 0, 0];
  const mondays: number[] = Array.from(placeholder);
  const tuesdays: number[] = Array.from(placeholder);
  const wednesdays: number[] = Array.from(placeholder);
  const thursdays: number[] = Array.from(placeholder);
  const fridays: number[] = Array.from(placeholder);
  const saturdays: number[] = Array.from(placeholder);
  const sundays: number[] = Array.from(placeholder);
  const months: number[][] = [
    mondays,
    tuesdays,
    wednesdays,
    thursdays,
    fridays,
    saturdays,
    sundays,
  ];

  array.forEach((el, i) => {
    const data = stringSep(el);
    console.log(i % 7);
    // console.log(data);
    // console.log(matchDayNumber(data[1]));
    months[matchDayNumber(data[1]) - 1][i % 7] = parseInt(data[0]);
  });

  return months;
};
