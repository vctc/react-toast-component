import React from "react";
import PropTypes from "prop-types";
import "./toast.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Toast = ({ type, position, text }) => {
  const [toastConfig, setToastConfig] = React.useState([]);
  React.useEffect(() => {
    setToastConfig([
      {
        type,
        position,
        text
      }
    ]);
    let myInterval = setInterval(() => {
      setToastConfig([]);
    }, 5000);
    return () => {
      clearInterval(myInterval);
    };
  }, [type, position, text]);

  return (
    <div className={`toast-container ${position}`}>
      {toastConfig.length ? (
        <div className={`toast-content ${toastConfig[0].type} `}>
          <span className="toast-child">{toastConfig[0].text}</span>
          <button onClick={() => setToastConfig([])}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export { Toast };

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
