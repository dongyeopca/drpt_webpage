import React from "react";

function Footer() {
  return (
    <div>
      <div
        style={{
          fontSize: "40px",
          backgroundColor: "rgba(220, 220, 220, 0.4)",
          textAlign: "center",
          padding: " 0 0 40px 0",
          lineHeight: "1.5",
          color: "white",
          textShadow: "2px 2px 2px gray",
        }}
      >
        To be No.1 Sports Life Platform
        <br />
        <span style={{ color: "green" }}>Dr.</span>
        <span style={{ color: "black" }}>PT</span>
      </div>
      <div
        style={{
          backgroundColor: "rgba(243, 243, 243, 0.4)",
          display: "flex",
          padding: "0 0 0 40px",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1480px",
          boxSizing: "border-box",
        }}
      >
        <h1>
          <span style={{ color: "green" }}>Dr.</span>PT 닥터피티
        </h1>
        <div
          className="footer_info"
          style={{
            fontFamily: "NanumSqaureR",
            lineHeight: "2em",
            color: "#333333",
          }}
        >
          PlayGround | 대표: 김성현
          <br />
          부산광역시 남구 신선로 365 4층 413호
          <br />
          대표 전화: 010-2297-3543
          <br />
          이메일: sugnghyuni7@naver.com
          <br />
          &copy; 2022 PlayGround. All right reserved
          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
