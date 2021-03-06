// Modules
import ReactPlayer from "react-player/lazy";
import { hosting } from "../../links";

// Components
import PlayIcon from "./PlayIcon";

// Types
import { playerInterface } from "../../types/playerType";

const VideoPlayer = ({ videoUrl }: playerInterface) => {
  return (
    <div className="player">
      <ReactPlayer
        url={hosting + videoUrl}
        light
        controls
        playIcon={videoUrl.length > 0 ? <PlayIcon /> : undefined}
        volume={1}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
};

export default VideoPlayer;
