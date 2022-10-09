import React, { useState } from "react";
import "./Update.css";
import UpdateInitial from "./UpdateInitial";

const Update = ({ addTask }) => {
  const [update, setUpdate] = useState(false);

  return (
    <div className="update">
      {!update && (
        <button
          type="button"
          onClick={() => setUpdate(true)}
          className="button-update"
        >
          Click here to update...
        </button>
      )}
      {update && <UpdateInitial setUpdate={setUpdate} addTask={addTask} />}
    </div>
  );
};

export default Update;
