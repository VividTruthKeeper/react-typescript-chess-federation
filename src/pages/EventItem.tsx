// Modules

// Components
import EventAside from "../components/event_item/EventAside";
import EventDate from "../components/global/EventDate";

// Images
import chess from "../images/chess.jpg";
import prizes from "../images/prizes.jpg";

// Link: /event

const EventItem = () => {
  return (
    <main className="eventitem">
      <div className="container">
        <div className="eventitem-inner">
          <div className="eventitem-content">
            <div className="eventitem-top">
              <EventDate time={"02:58"} date={"16.12.2021"} />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                pellentesque mattis aliquet semper.
              </h2>
            </div>
            <div className="eventitem-bottom">
              <div className="eventitem-img">
                <img src={chess} alt="" />
              </div>
              <p>
                The chess federations of Turkmenistan and Armenia held the first
                remote session, which was attended by famous chess
                representatives of the two stated, including heads of
                federations, masters of sports, international FIDE judges and
                coaches, grandmasters and long-time friends who once competed
                with each other at different matches.
              </p>
              <p>
                The Turkmen side was headed by Myratdurdy Hashayev, Chairman of
                the National Chess Federation, while the Armenian side was
                headed by the First Vice-President of the Chess Federation of
                Armenia, Director of the Chess Academy Smbat Lputyan.
              </p>
              <p>
                During the meeting that, despite its remote format, was held in
                a very warm and friendly atmosphere, the issues related to the
                educational processes, the training of chess teachers and
                trainers, cooperation between the federations of the two
                countries, as well as methods of online chess teaching were
                discussed.
              </p>
              <p>
                It is worth to note, in Armenia, since 2011, chess has been
                included in the curriculum of the 2-4th grades of general
                education schools as a compulsory subject. And the world’s first
                Center of Chess Educational Research was established on the
                basis of the Armenian State Pedagogical University named after
                Khachatur Abovian (ASPU).
              </p>
              <div className="eventitem-img">
                <img src={prizes} alt="" />
              </div>
              <p>
                According to the research of this center, this wise game serves
                as a locomotive for various psychological processes, contributes
                to the development of combinatorial and strategic thinking in
                children, and sense of responsibility. Srbuhi Gevorgyan, Doctor
                of Psychological Sciences, Professor, Vice-Rector for Academic
                Affairs, ASPU, expressed the readiness to share with their
                Turkmen colleagues the materials, research results, information
                on the introduction of chess in the general educational process.
              </p>
              <p>
                During the video session, the parties agreed to launch a new
                format of cooperation – online exchange of experience in the
                field of teaching chess, holding open tournaments of the two
                countries, etc. In addition, Armenian chess grandmaster Samvel
                Ter-Sahakyan shared some of his secrets.
              </p>
              <p>
                In turn, Turkmen chess players told about the new Chess Academy
                in Ashgabat, which is a gift from the head of state. The Academy
                has two tournament halls for 100 and 200 persons, 10 computer
                and 25 training classes, chess attributes store, library, rooms
                for analyzing games, museum, and the office of the Chess
                Federation of Turkmenistan.
              </p>
              <p>
                At the end of the video bridge, organized with the assistance of
                the Embassy of Turkmenistan in Yerevan, its participants
                expressed their common desire to develop cooperation between the
                chess communities of the two countries, using, among other ways,
                the possibilities of Internet communication.
              </p>
            </div>
          </div>
          <EventAside />
        </div>
      </div>
    </main>
  );
};

export default EventItem;
