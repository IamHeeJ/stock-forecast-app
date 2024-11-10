import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../style/CategoryPage.css';
import '../style/AnalysisPage.css';

function CategoryPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    { symbol: 'AAPL', name: '애플', industry: 'IT', description: '애플은 혁신적인 기술 기업으로, 아이폰, 아이패드, 맥북 등의 제품을 출시한 세계적인 브랜드입니다.' },
    { symbol: 'NVDA', name: '엔비디아', industry: 'IT', description: '엔비디아는 그래픽 카드와 AI 하드웨어를 제조하는 기술 회사입니다.' },
    { symbol: 'XOM', name: '엑슨모빌', industry: '에너지', description: '엑슨모빌은 세계 최대의 석유 및 가스 회사 중 하나로, 석유 정제 및 유통과 관련된 사업을 합니다.' },
    { symbol: 'LIN', name: '린데', industry: '화학', description: '린데는 산업용 가스를 생산하는 세계적인 화학 기업입니다.' },
    { symbol: 'JNJ', name: '존슨앤존슨', industry: '제약 위생', description: '존슨앤존슨은 의료 및 위생 제품을 제조하는 글로벌 제약 회사입니다.' },
    { symbol: 'AZN', name: '아스트라\n제네카', industry: '제약', description: '아스트라제네카는 의약품 개발 및 제조를 전문으로 하는 글로벌 제약 기업입니다.' },
    { symbol: 'GM', name: '제너럴모터스', industry: '자동차', description: '제너럴모터스는 세계적인 자동차 제조업체로, 다양한 브랜드의 자동차를 생산합니다.' },
    { symbol: 'PEP', name: '펩시코', industry: '식음료 제조', description: '펩시코는 음료 및 스낵 제품을 제조하는 글로벌 기업입니다.' },
    { symbol: 'NFLX', name: '넷플릭스', industry: 'OTT', description: '넷플릭스는 스트리밍 서비스 분야에서 글로벌 리더로, 다양한 영화와 드라마 콘텐츠를 제공합니다.' },
    { symbol: 'COST', name: '코스트코', industry: '대형마트', description: '코스트코는 대형마트 체인으로, 다양한 소비재 제품을 대량으로 유통하는 미국의 대기업입니다.' }
  ];

  const showModal = (company) => {
    setSelectedCompany(company);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setSelectedCompany(null);
  };

  return (
    <div>
      <header className="header">
        <h1 className="headerh1">주가 일기 예보</h1>
      </header>

      <Link to="/" className="back-link">
        <div className="go-back">&lt; 메인 화면으로</div>
      </Link>

      <div className="analysis-page">
        <div className="forecast">
          <img src="../img/sun.png" alt="sun icon" className="sun-icon" />
          <div className="forecast-text">
            <span>내일의 주식 시장은 <br /></span>
            <span className="highlighted">맑을 예정</span>
            <span>입니다.</span>
          </div>
        </div>

        <div className="nasdaq-section">
          <div className="nasdaq-graph">
            <p className="nasdaq-section-title">산업 분야별 10개 기업 주가 예측 비교</p>
            <div className="graph-placeholder"></div>
          </div>

          <div className="nasdaq-info">
            <p className="nasdaq-section-title">산업 분야별 10개 기업 정보</p>
            <div className="company-info">
              {companies.map((company) => (
                <div
                  key={company.symbol}
                  className="company-card"
                  onClick={() => showModal(company)}
                >
                  <p className="industry">{company.industry}</p> {/* 산업 분야 추가 */}
                  <h3>{company.symbol}</h3>
                  <p>{company.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {modalVisible && selectedCompany && (
          <div className="modal-overlay" onClick={hideModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={hideModal}>&times;</button>
              <div className="modal-header">
                <h2 className="modalh2">
                  학습 모델로 예측된 <span className="company-name">{selectedCompany.name}({selectedCompany.symbol})</span> 의 예측 주가
                </h2>
              </div>

              <div className="modal-body">
                <div className="info-inline-block">
                  <img src="/img/info.png" alt="info icon" className="info-icon" />
                  <p>기업 정보</p>
                </div>
                <p className="modal-description">{selectedCompany.description}</p>
                <div className="graph-placeholder"></div>
                <p>내일의 예측 주가는 <strong>233.96 USD</strong> 입니다.</p>
                <p>전날 대비 <span className="price-change">+2.55 (1.10%) ↑</span></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import '../style/CategoryPage.css';
// import '../style/AnalysisPage.css';

// function CategoryPage() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   const companies = [
//     { symbol: 'XOM', name: '엑슨모빌', description: '엑슨모빌은 세계 최대의 석유 및 가스 회사 중 하나로, 석유 정제 및 유통과 관련된 사업을 합니다.' },
//     { symbol: 'CVX', name: '쉐브론', description: '쉐브론은 석유 및 가스 채굴 및 정제 사업을 운영하는 글로벌 에너지 기업입니다.' },
//     { symbol: 'BP', name: 'BP', description: 'BP는 국제적인 에너지 기업으로, 석유 및 가스를 포함한 다양한 에너지 관련 사업을 펼치고 있습니다.' },
//     { symbol: 'RDS-A', name: '로얄 더치 셸', description: '로얄 더치 셸은 글로벌 석유 및 가스 기업으로, 재생 가능 에너지와 탄소 배출 감소에도 집중하고 있습니다.' },
//     { symbol: 'TOT', name: '토탈', description: '토탈은 석유, 가스, 그리고 다양한 에너지 사업을 운영하는 글로벌 에너지 기업입니다.' },
//     { symbol: 'VLO', name: '발로리', description: '발로리는 석유 제품을 정제하고 유통하는 미국의 에너지 회사입니다.' },
//     { symbol: 'COP', name: '콘코필립스', description: '콘코필립스는 석유와 천연가스를 탐사하고 개발하는 글로벌 에너지 기업입니다.' },
//     { symbol: 'SLB', name: '슬럼버지', description: '슬럼버지는 석유 및 가스 산업에 필요한 기술과 서비스를 제공하는 글로벌 기업입니다.' },
//     { symbol: 'HAL', name: '할리버튼', description: '할리버튼은 석유 및 가스 산업에 필요한 제품과 서비스를 제공하는 기업입니다.' },
//     { symbol: 'BKR', name: '브래드포드', description: '브래드포드는 석유 및 가스 관련 기술과 장비를 제조하는 글로벌 기업입니다.' }
//   ];

//   const showModal = (company) => {
//     setSelectedCompany(company);
//     setModalVisible(true);
//   };

//   const hideModal = () => {
//     setModalVisible(false);
//     setSelectedCompany(null);
//   };

//   return (
//     <div>
//       <header className="header">

//         <h1 className="headerh1">주가 일기 예보</h1>
//       </header>

//       <Link to="/" className="back-link">
//         <div className="go-back">&lt; 메인 화면으로</div>
//       </Link>

//       <div className="analysis-page">
//         <div className="forecast">
//           <img src="../img/sun.png" alt="sun icon" className="sun-icon" />
//           <div className="forecast-text">
//             <span>내일의 주식 시장은 <br /></span>
//             <span className="highlighted">맑을 예정</span>
//             <span>입니다.</span>
//           </div>
//         </div>

//         <div className="nasdaq-section">
//           <div className="nasdaq-graph">
//             <p className="nasdaq-section-title">산업 분야별 10개 기업 주가 예측 비교</p>
//             <div className="graph-placeholder"></div>
//           </div>

//           <div className="nasdaq-info">
//             <p className="nasdaq-section-title">산업 분야별 10개 기업 정보</p>
//             <div className="company-info">
//               {companies.map((company) => (
//                 <div
//                   key={company.symbol}
//                   className="company-card"
//                   onClick={() => showModal(company)}
//                 >
//                   <h3>{company.symbol}</h3>
//                   <p>{company.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {modalVisible && selectedCompany && (
//           <div className="modal-overlay" onClick={hideModal}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <button className="modal-close" onClick={hideModal}>&times;</button>
//               <div className="modal-header">
//                 {/* <img src="/img/sun.png" alt="sun icon" className="sun-icon" /> */}
//                 <h2 className="modalh2">
//                   학습 모델로 예측된 <span className="company-name">{selectedCompany.name}({selectedCompany.symbol})</span> 의 예측 주가
//                 </h2>
//               </div>

//               <div className="modal-body">
//                 <div className="info-inline-block">
//                   <img src="/img/info.png" alt="info icon" className="info-icon" />
//                   <p>기업 정보</p>
//                 </div>
//                 <p className="modal-description">{selectedCompany.description}</p> {/* 기업 설명 추가 */}
//                 <div className="graph-placeholder"></div>
//                 <p>내일의 예측 주가는 <strong>233.96 USD</strong> 입니다.</p>
//                 <p>전날 대비 <span className="price-change">+2.55 (1.10%) ↑</span></p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;
