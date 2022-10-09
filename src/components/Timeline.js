import React from "react";
import "./Timeline.css";
import { ReactComponent as UpdatesLogo } from "../images/UpdatesLogo.svg";

const Timeline = ({ datas }) => {
  return (
    <div className="timeline">
      <div className="timeline-text">
        <div className="timeline-heading">Timeline</div>
        {datas?.map((data) => {
          return (
            <div className="timeline-info">
              <div className="timeline-data">{data?.title}</div>
            </div>
          );
        })}
      </div>
      <UpdatesLogo className="timeline-image" />
    </div>
  );
};

export default Timeline;
