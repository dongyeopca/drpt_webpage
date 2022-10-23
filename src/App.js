import Footer from "./components/Footer";
import Page from "./components/Page";
import Title from "./components/Title";
import Second from "./components/Second";
import Exercise from "./media/Exercise.png";
import Total from "./media/Total.png";
import Teacher from "./media/Teacher.png";
import BodySize from "./media/BodySize.png";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();
  return (
    <div className="App">
      <Title />
      <Second />
      <Page
        title="신체 데이터 기반 온라인 PT"
        sub="스마트웨어 이용 근활성도 측정/수강생의 근활성도 그래픽화 제공/트레이너의 운동 데이터와 비교, 자세 교정 및 최적 운동 솔루션 제공"
        backgroundcolor="white"
        image={Exercise}
      />
      <Page
        title="맞춤 강의 추천"
        sub="키,몸무게 등의 기본 정보는 물론/운동 목적, 약점 근육 등의 세부 정보에 따른 맞춤 강의 추천"
        backgroundcolor="rgba(220, 220, 220, 0.4)"
        image={BodySize}
      />
      <Page
        title="믿을 수 있는 트레이너"
        sub="정식 트레이너 자격증 및 커리큘럼 선 공개"
        backgroundcolor="white"
        image={Teacher}
      />
      <Page
        title="운동 관련 모든 작업을 하나의 플랫폼에서!"
        sub="강의부터 제품 구매까지"
        backgroundcolor="rgba(220, 220, 220, 0.4)"
        image={Total}
      />
      <Footer />
    </div>
  );
}

export default App;
