// Modules
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import PersonInfo from "../components/structure/PersonInfo";
import SectionTitle from "../components/global/SectionTitle";

// Images
import arkady from "../images/arkady.jpg";
import sasha from "../images/sasha.jpg";

// Types
import { personProps } from "../types/personProps";

const personData: personProps[] = [
  {
    img: arkady,
    position: "Assistant to the FIDE President",
    name: "Kiselev, Konstantin",
    email: "fidepresident@fide.com",
    tel: "+993 65 65-65-65",
    facebook: "@fidepresident",
  },
  {
    img: sasha,
    position: "FIDE President",
    name: "Dvorkovich, Arkady",
    email: "fidepresident@fide.com",
    tel: "+993 65 65-65-65",
    facebook: "@fidepresident",
  },
  {
    img: arkady,
    position: "Assistant to the FIDE President",
    name: "Kiselev, Konstantin",
    email: "fidepresident@fide.com",
    tel: "+993 65 65-65-65",
    facebook: "@fidepresident",
  },
  {
    img: sasha,
    position: "FIDE President",
    name: "Dvorkovich, Arkady",
    email: "fidepresident@fide.com",
    tel: "+993 65 65-65-65",
    facebook: "@fidepresident",
  },
];

// Link: /structure

const Structure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="structure">
      <div className="container">
        <div className="structure-inner">
          <SectionTitle title={"Структура федерации"} />
          <div className="structure-content">
            {personData.map((person) => {
              return (
                <PersonInfo
                  key={uuidv4()}
                  img={person.img}
                  email={person.email}
                  name={person.name}
                  position={person.position}
                  tel={person.tel}
                  facebook={person.facebook}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Structure;
