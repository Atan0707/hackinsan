import React, { useState } from "react";

function Home() {
  const [isMicOn, setIsMicOn] = useState(false);

  return (
    <div>
      <div className="header">
        <h1>This is header</h1>
      </div>
      <i className="mic-icon"></i>
      {isMicOn && (
        <div className="mic">
          <i className="mic-icon"></i>
          <div className="mic-shadow"></div>
        </div>
      )}
      <div className="container">
        <button className="button" onClick={() => setIsMicOn(true)}>
          On
        </button>
        <button className="button" onClick={() => setIsMicOn(false)}>
          Off
        </button>
      </div>
    </div>
  );
}

export default Home;
