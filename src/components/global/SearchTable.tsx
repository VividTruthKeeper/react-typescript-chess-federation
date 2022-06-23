// Modules
import { v4 as uuidv4 } from "uuid";

// Icons
import search from "../../icons/search.svg";

// Types
import { PlayersData } from "../../types/playersData";

const playersData: PlayersData[] = [
  {
    id: "204308",
    title: "Гроссмейстер",
    surname: "Аманов",
    name: "Аман",
    birth: "1990",
    classical: "2847",
    rapid: "2846",
    blitz: "2847",
  },
  {
    id: "204308",
    title: "Мастер",
    surname: "Какаджанов",
    name: "Керим",
    birth: "2000",
    classical: "2847",
    rapid: "2846",
    blitz: "2847",
  },
  {
    id: "204308",
    title: "Гроссмейстер",
    surname: "Аманов",
    name: "Аман",
    birth: "1990",
    classical: "2847",
    rapid: "2846",
    blitz: "2847",
  },
  {
    id: "204308",
    title: "Мастер",
    surname: "Какаджанов",
    name: "Керим",
    birth: "2000",
    classical: "2847",
    rapid: "2846",
    blitz: "2847",
  },
];

const SearchTable = () => {
  return (
    <div className="search-table">
      <form className="search-field" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Type name or player ID" />
        <button type="button" className="search-button">
          Search
        </button>
        <div className="loop">
          <img src={search} alt="" />
        </div>
      </form>
      <div className="search-table-wrapper">
        <table className="search">
          <tbody>
            <tr className="table-header">
              <th>№</th>
              <th>ID</th>
              <th>Титул игрока</th>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Год рождения</th>
              <th>Классика</th>
              <th>Рапид</th>
              <th>Блиц</th>
            </tr>
            {playersData.map((player, i) => {
              return (
                <tr key={uuidv4()}>
                  {/* N_o */}
                  <td>{i + 1}</td>
                  <td>{player.id}</td>
                  <td>{player.title}</td>
                  <td>{player.surname}</td>
                  <td>{player.name}</td>
                  <td>{player.birth}</td>
                  <td>{player.classical}</td>
                  <td>{player.rapid}</td>
                  <td>{player.blitz}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchTable;
