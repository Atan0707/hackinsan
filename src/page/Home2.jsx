import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home2() {
  const [isMicOn, setIsMicOn] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="table">
        <div className="header">
          <h1>Home 2</h1>
          {!buttonClicked && <div className="mic-icon"></div>}
        </div>
        {/* if button is pressed */}
        {buttonClicked &&
          (isMicOn ? (
            <div className="mic">
              <i className="mic-icon"></i>
              <div className="mic-shadow"></div>
            </div>
          ) : (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ))}

        <div className="container">
          {!buttonClicked && (
            <button
              className="button"
              onClick={() => {
                setIsMicOn(true);
                setButtonClicked(true);
              }}
            >
              Start
            </button>
          )}
          {buttonClicked && (
            <button
              className="button"
              onClick={() => {
                setIsMicOn(false);
                setTimeout(() => navigate("/ai"), 3000);
              }}
            >
              Stop
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home2;
