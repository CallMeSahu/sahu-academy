import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
import { removeFromLike } from "../../services";
import { watchLaterHandler } from "../../utils";

export function LikedCard({ video }) {
  const [showList, setShowList] = useState(false);
  const { _id, title, creator, isInWatchLater, isInLiked, uploaded } = video;
  const { dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

   const clickToVideoHandler = () => {
    navigate(`/video/${_id}`);
    token && !isInHistory && addToHistory(dispatch, video, token);
  };

  return (
    <div className="card">
      <img class="card-image" src={`https://i.ytimg.com/vi/${_id}/0.jpg`} 
      onClick={() => clickToVideoHandler()}
      /> 
      <div className="card-info" title={title}>
        <div className="card-title">
          <h3 className="card-title-header" onClick={() => clickToVideoHandler()}>
            {title}
          </h3>
          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div className={`option-list ${showList ? "display-flex" : "display-none"}`}>
              <div>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
                Add to Playlist
              </div>
              <div
                className={`${isInWatchLater && "btn-trash"}`}
                onClick={() => watchLaterHandler(dispatch, video, token)}
              >
                <i
                  className={`fa ${isInWatchLater ? "fa-trash" : "fa-clock-o"}`}
                  aria-hidden="true"
                ></i>
                {isInWatchLater ? "Remove from Watch Later" : "Add to Watch Later"}
              </div>
              <div
                className={`${isInLiked && "btn-trash"}`}
                onClick={() => removeFromLike(dispatch, _id, token)}
              >
                <i className={`fa ${isInLiked ? "fa-trash" : "fa-clock-o"}`} aria-hidden="true"></i>
                Remove From Liked Video
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
