import React from "react";
import { Toast } from "./component/Toast";
import "./styles.css";
import { useState } from "react";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [toastConfig, setToastConfig] = useState({
    type: "error",
    text: "Default Text",
    position: "bottom-right"
  });
  const handleToast = () => {
    setShowToast(true);
  };

  const handleDropdown = (keyname, e) => {
    setShowToast(false);
    setToastConfig({ ...toastConfig, [keyname]: e.target.value });
  };

  return (
    <>
      <h1>React Toast Component </h1>
      <div className="row">
        <label>Select Toast Type:</label>
        <select
          value={toastConfig.type}
          onChange={(e) => handleDropdown("type", e)}
        >
          <option value="info">Info</option>
          <option value="error">Error</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
        </select>
      </div>

      <div className="row">
        <label> Select Toast Position:</label>
        <select
          value={toastConfig.position}
          onChange={(e) => handleDropdown("position", e)}
        >
          <option value="top-right">Top-Right</option>
          <option value="bottom-right">Bottom-Right</option>
          <option value="top-left">Top-Left</option>
          <option value="bottom-left">Bottom-Left</option>
        </select>
      </div>

      <div className="row">
        <label> Message Text:</label>
        <input
          value={toastConfig.text}
          onChange={(e) => {
            setShowToast(false);
            setToastConfig({ ...toastConfig, text: e.target.value });
          }}
        />
      </div>

      <div className="row">
        <button disabled={showToast} onClick={handleToast}>
          Show Toast
        </button>
        <p>(Change config again to enable button) </p>
      </div>

      {showToast && (
        <Toast
          type={toastConfig.type}
          text={toastConfig.text}
          position={toastConfig.position}
        />
      )}
    </>
  );
}

export default App;
