import React from "react";
import "./Error.css";
import error from "../../assets/error.svg"

export function Error() {
  
  return (
    <div className="video-list-container error-container">
      <img src={error} className="responsive-image" />
    </div>
  );
}
