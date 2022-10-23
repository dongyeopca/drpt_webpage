import React from "react";
import "../css/page.css";
function Page(props) {
  const { image, title, sub, backgroundcolor } = props;
  const sub_list = sub.split("/");
  return (
    <div
      className="box-container"
      style={{ backgroundColor: `${backgroundcolor}` }}
    >
      <div className="box-content">
        <div className="content-Grid">
          <div className="text-box" data-aos="fade-up">
            <h2>{title}</h2>
            <div>
              {sub_list.map((index, item) => (
                <p key={item}>{index}</p>
              ))}
            </div>
          </div>
          <div className="image-box" data-aos="fade-up">
            <img src={image} alt="서비스예시" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
