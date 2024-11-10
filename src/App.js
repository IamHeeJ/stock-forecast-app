// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import './App.css';
// import AnalysisPage from './comp/AnalysisPage';
// import CategoryPage from "./comp/CategoryPage";


// const MainPage = () => {
//   return (
//     <div className="main-container">
//       <div className="background-image-left"></div> {/* 왼쪽 배경 이미지 */}
//       <div className="background-image-right"></div> {/* 오른쪽 배경 이미지 */}
      
//       <h1 className="main">주가 일기 예보</h1>
//       <h2 className="main">
//         내일의 주식은 <span className="sunny">맑을까</span> <span className="cloudy">흐릴까?</span>
//       </h2>
//       <div id="description">
//         <p>'주가 일기 예보'는 초보자도 쉽게 이해할 수 있도록</p>
//         <p>직관적인 UI를 통해 핵심 정보와 맞춤형 투자 팁을 제공합니다.</p>
//         <p>NASDAQ 시가총액 TOP 10 기업들의 주가 예측 정보를 확인하세요.</p>
//       </div>
//       <div className="btncontainer">
//         <Link to="/analysis" className="button-link">
//           NASDAQ 상위 10개 기업<br/>주가 예측 정보 보러가기
//         </Link>
//         <Link to="/category" className="button-link">
//           산업 분야별 10개 기업<br/>주가 예측 정보 보러가기
//         </Link>
//       </div>
//     </div>
//   );
// };


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/analysis" element={<AnalysisPage />} />
//         <Route path="/category" element={<CategoryPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import AnalysisPage from './comp/AnalysisPage';
import CategoryPage from "./comp/CategoryPage";

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="background-image-left">
        <img src="/img/sun.png" alt="sun" className="background-image" />
      </div>
      <div className="background-image-right">
        <img src="/img/rain.png" alt="rain" className="background-image" />
      </div>
      
      <h1 className="main">주가 일기 예보</h1>
      <h2 className="main">
        내일의 주식은 <span className="sunny">맑을까</span> <span className="cloudy">흐릴까?</span>
      </h2>
      <div id="description">
        <p>'주가 일기 예보'는 초보자도 쉽게 이해할 수 있도록</p>
        <p>직관적인 UI를 통해 핵심 정보와 맞춤형 투자 팁을 제공합니다.</p>
        <p>NASDAQ 시가총액 TOP 10 기업들의 주가 예측 정보를 확인하세요.</p>
      </div>
      <div className="btncontainer">
        <Link to="/analysis" className="button-link">
          NASDAQ 상위 10개 기업<br/>주가 예측 정보 보러가기
        </Link>
        <Link to="/category" className="button-link">
          산업 분야별 10개 기업<br/>주가 예측 정보 보러가기
        </Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
