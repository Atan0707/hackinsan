import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AIVideo = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Attempt to play the video as soon as the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);

  const handleClick = () => {
    setTimeout(() => navigate("/Home2"), 10);
  };

  return (
    <div className="background-ai">
      <div className="container-ai">
        <video
          className="video-ai"
          ref={videoRef}
          autoPlay // Attempt to autoplay the video
          // Removed the muted attribute to enable sound
        >
          <source src="../src/assets/ajol.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="button-ai">
          <button className="button-ai" onClick={handleClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIVideo;
