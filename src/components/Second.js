import React from "react";
import First from "../media/First.svg";
import Chat from "../media/Chat.png";
import "../css/second.css";
function Second() {
  return (
    <div className="second-box-container">
      <h2 className="second-title" data-aos="fade-up">
        전문적인 운동 용어
      </h2>
      <img
        src={First}
        style={{ width: "100%", height: "500px" }}
        alt="어려움"
      />
      <h2 className="second-title" data-aos="fade-up">
        왜 굳이 어렵게 설명할까요?
      </h2>
      <div className="second-box-content">
        <div className="second-grid">
          <div className="second-image-box" data-aos="fade-up">
            <img src={Chat} alt="채팅예시" />
          </div>
          <div className="second-text-box">
            <div data-aos="fade-left" id="problemtitle">
              PT 시장의 구조적 문제
            </div>
            <div data-aos="fade-left">비싼 가격</div>
            <div data-aos="fade-left">피드백의 부재</div>
            <div data-aos="fade-left">비직관적 설명</div>
          </div>
        </div>
      </div>

      <div className="solution" data-aos="fade-up">
        <span style={{ color: "green" }}>닥터</span>피티는 이렇게 해결합니다
      </div>
    </div>
  );
}

export default Second;
