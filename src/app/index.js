import { useState } from "react";

export default function Home() {
  const images = [
    "/1.GIF",
    "/2.GIF",
    "/3.GIF",
    "/4.GIF",
    "/5.GIF",
    "/6.GIF",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.GIF",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: `url(${images[currentIndex]}) no-repeat center`,
        backgroundSize: "contain",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {/* Display boxes only on the last image */}
      {currentIndex === images.length - 1 && (
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="box">Where you want to go</div>
          <div className="box">Hardware</div>
          <div className="box">Easy Way</div>
        </div>
      )}
    </div>
  );
}
