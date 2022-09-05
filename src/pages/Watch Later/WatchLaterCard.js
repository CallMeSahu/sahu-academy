import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
import { removeFromWatchLater } from "../../services";

export function WatchLaterCard({ video }) {
  const [showList, setShowList] = useState(false);
  const { _id, title, creator, uploaded } = video;
  const { dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const clickToVideoHandler = () => {
    navigate(`/video/${_id}`);
    token && !isInHistory && addToHistory(dispatch, video, token);
  };

  return (
    <div className="card">
      <img className="card-image" onClick={() => clickToVideoHandler()} src={`https://i.ytimg.com/vi/${_id}/0.jpg`} />
      <div className="card-info" title={title}>
        <div className="card-title">
          <h3 className="card-title-header" onClick={() => clickToVideoHandler()} >{title}</h3>
          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div className={`option-list ${showList ? "display-flex" : "display-none"}`}>
              <div>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
                Add to Playlist
              </div>
              <div className="btn-trash" onClick={() => removeFromWatchLater(dispatch, _id, token)}>
                <i className="fa fa-trash" aria-hidden="true"></i>
                Remove from Watch Later
              </div>
            </div>
          </div>
        </div>

        <div className="card-description" onClick={() => clickToVideoHandler()}>
          <h3>{creator}</h3>
          <p>{uploaded}</p>
        </div>
      </div>
    </div>
  );
}
