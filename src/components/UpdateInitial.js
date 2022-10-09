import React, { useState } from "react";
import "./UpdateInitial.css";

const UpdateInitial = ({ setUpdate, addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add update");
      return;
    }
    addTask(text);
    setText("");
  };
  return (
    <div className="updateInitial">
      <input
        type="text"
        placeholder="Update..."
        value={text}
        spellCheck="false"
        contentEditable="true"
        className="update-text"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="button-section">
        <button
          type="button"
          className="submit-button"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
        <button
          type="button"
          className="submit-button close-button"
          onClick={() => setUpdate(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UpdateInitial;
