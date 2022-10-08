import React, { useState, useEffect } from "react";
import "./Timeline.css";
import { ReactComponent as UpdatesLogo } from "../images/UpdatesLogo.svg";
import axios from "axios";

const Timeline = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const select = res.data.slice(0, 8);
        console.log(select);
        setDatas(select);
      })
      .catch((error) => console.error(error));
  }, []);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  return (
    <div className="timeline">
      <div className="timeline-text">
        <div className="timeline-heading">Timeline</div>
        {datas?.map((data) => {
          return (
            <div className="timeline-info">
              <div className="timeline-date">{currentDate}</div>
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
