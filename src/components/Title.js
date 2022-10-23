import React from "react";
import "../css/title.css";
import Main from "../media/Main.png";
function Title() {
  return (
    <div
      className="title-container"
      style={{
        backgroundImage: `url(${Main})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ width: "100%" }}>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "40px",
            margin: "0",
            padding: "30px 0 0 50px",
          }}
        >
          <span style={{ color: "green" }}>Dr.</span>PT
        </h1>
      </div>
      <div className="title-content">
        <p>말로만 하는 설명은 이제 그만</p>
        <span id="titlesub">직관적 운동의 시작</span>
        <h2>
          이제 데이터로 운동하자 <br />
          마이 데이터 기반 나만의 트레이너
          <br />
        </h2>
        <p id="brand-name">
          <span style={{ color: "green" }}>닥터</span> 피티
        </p>
      </div>
    </div>
  );
}

export default Title;
