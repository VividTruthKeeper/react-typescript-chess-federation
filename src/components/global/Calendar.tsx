// Modules

// Import helpers
import {
  generateDateMatrix,
  matchLocaleLang,
  daysLocale,
  stringSep,
  matchDayNumber,
  matchDateToDay,
} from "../../helpers/calendar";

// Types
import { dateMatrix, dataItem } from "../../helpers/calendar";

const Calendar = () => {
  const date = new Date();
  const data = generateDateMatrix(date.getFullYear());
  const currentMonth = date.getMonth();
  //   console.log(data);

  const dataDays: Array<dataItem> = data[0];
  const dataYear: dateMatrix[1] = data[1];
  const sorted = matchDateToDay(dataDays[currentMonth].data);
  console.log(sorted);
  return (
    <div className="calendar">
      <div className="calendar-top">
        <h4>{`${matchLocaleLang(currentMonth)} ${data[1] as number}`}</h4>
      </div>
      <div className="calendar-bottom">
        <table className="calendar-table">
          <tbody>
            <tr className="calendar-table-header">
              <th>{daysLocale[0]}</th>
              <th>{daysLocale[1]}</th>
              <th>{daysLocale[2]}</th>
              <th>{daysLocale[3]}</th>
              <th>{daysLocale[4]}</th>
              <th>{daysLocale[5]}</th>
              <th>{daysLocale[6]}</th>
            </tr>
            {/* {sorted.map(arr => {
            })
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
