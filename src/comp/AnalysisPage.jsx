import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/AnalysisPage.css';
import NasdaqChart from './NasdaqChart.js'; 

function AnalysisPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    { rank: 1, symbol: 'AAPL', name: '애플', description: '애플은 혁신적인 기술 기업으로, 아이폰, 아이패드, 맥북 등의 제품을 출시한 세계적인 브랜드입니다.' },
    { rank: 2, symbol: 'MSFT', name: '마이크로소프트', description: '마이크로소프트는 소프트웨어 개발 및 클라우드 서비스를 제공하는 글로벌 기술 기업입니다.' },
    { rank: 3, symbol: 'AMZN', name: '아마존', description: '아마존은 전자상거래 및 클라우드 컴퓨팅 분야의 선두주자입니다.' },
    { rank: 4, symbol: 'NVDA', name: '엔비디아', description: '엔비디아는 그래픽 카드와 AI 하드웨어를 제조하는 기술 회사입니다.' },
    { rank: 5, symbol: 'META', name: '메타', description: '메타(구 페이스북)는 소셜 미디어와 가상 현실 기술을 개발하는 글로벌 기업입니다.' },
    { rank: 6, symbol: 'TSLA', name: '테슬라', description: '테슬라는 전기차 제조업체로, 지속 가능한 에너지 솔루션을 제공하는 혁신적인 기업입니다.' },
    { rank: 7, symbol: 'GOOGL', name: '구글', description: '구글은 검색 엔진을 제공하는 회사로, 광고 및 클라우드 서비스 분야에서도 큰 영향을 미칩니다.' },
    { rank: 8, symbol: 'AVGO', name: '브로드컴', description: '브로드컴은 반도체 및 인프라 소프트웨어 솔루션을 제공하는 글로벌 기업입니다.' },
    { rank: 9, symbol: 'COST', name: '코스트코', description: '코스트코는 대형 창고형 할인 매장을 운영하는 세계적인 소매업체입니다.' },
    { rank: 10, symbol: 'GOOG', name: '알파벳', description: '알파벳은 구글의 모회사로, 검색 엔진과 다양한 IT 서비스를 제공합니다.' }
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
            <p className="nasdaq-section-title">NASDAQ TOP 10 기업 주가 예측 비교</p>
            {/* <div className="graph-placeholder"></div> */}
              <NasdaqChart />
            
          </div>

          <div className="nasdaq-info">
            <p className="nasdaq-section-title">NASDAQ TOP 10 기업 정보</p>
            <div className="company-info">
              {companies.map((company) => (
                <div
                  key={company.symbol}
                  className="company-card"
                  onClick={() => showModal(company)}
                >
                  <p className="rank">{company.rank}위</p> {/* 순위 추가 */}
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

export default AnalysisPage;


