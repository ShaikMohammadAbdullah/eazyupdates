import React, { useState, useEffect } from "react";
import "./Timeline.css";
import { ReactComponent as UpdatesLogo } from "../images/UpdatesLogo.svg";
import axios from "axios";
import Error from "./Error";
import LoadingScreen from "react-loading-screen";

const Timeline = () => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        setDatas(res.data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => setError(true));
  }, []);

  return (
    <div className="timeline">
      <div className="timeline-text">
        {loading ? (
          <LoadingScreen
            loading={true}
            bgColor="rgba(255,255,255,0.8)"
            spinnerColor="#9ee5f8"
            textColor="#676767"
            logoSrc=""
            text=""
          ></LoadingScreen>
        ) : error ? (
          <Error />
        ) : (
          <>
            <div className="timeline-heading">Timeline</div>
            {datas?.map((data) => {
              return (
                <div className="timeline-info">
                  <div className="timeline-date">{}</div>
                  <div className="timeline-data">{data?.title}</div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <UpdatesLogo className="timeline-image" />
    </div>
  );
};

export default Timeline;
