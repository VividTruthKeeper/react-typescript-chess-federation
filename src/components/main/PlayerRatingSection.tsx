// Modules

// Components
import SectionTitle from "../global/SectionTitle";
import SearchTable from "../global/SearchTable";

const PlayerRating = () => {
  return (
    <section className="rating">
      <div className="container">
        <div className="rating-inner">
          <SectionTitle title={"Рейтинг игроков"} />
          <div className="rating-content">
            <SearchTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerRating;
