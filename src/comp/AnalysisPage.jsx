import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/AnalysisPage.css';
import NasdaqChart from './NasdaqChart.js';
import CompanyChart from './CompanyChart.js';

function AnalysisPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const chartData = [
    { date: '2024-11-11', AAPL: 224.23, MSFT: 418.01, AMZN: 206.84, NVDA: 145.26, META: 583.17, TSLA: 350.0, GOOGL: 180.35, AVGO: 178.91, COST: 932.88, GOOG: 181.97 },
    { date: '2024-11-12', AAPL: 224.23, MSFT: 423.03, AMZN: 208.91, NVDA: 148.29, META: 584.82, TSLA: 328.49, GOOGL: 181.62, AVGO: 176.22, COST: 932.38, GOOG: 183.32 },
    { date: '2024-11-13', AAPL: 225.12, MSFT: 425.2, AMZN: 214.1, NVDA: 146.27, META: 580.0, TSLA: 330.24, GOOGL: 178.88, AVGO: 173.58, COST: 933.73, GOOG: 180.49 },
    { date: '2024-11-14', AAPL: 228.22, MSFT: 426.89, AMZN: 211.48, NVDA: 146.76, META: 577.16, TSLA: 311.18, GOOGL: 175.58, AVGO: 170.38, COST: 923.89, GOOG: 177.35 },
    { date: '2024-11-15', AAPL: 225.0, MSFT: 415.0, AMZN: 202.61, NVDA: 141.98, META: 554.08, TSLA: 320.72, GOOGL: 172.49, AVGO: 164.84, COST: 907.07, GOOG: 173.89 },
    { date: '2024-11-18', AAPL: 233.06, MSFT: 421.0, AMZN: 187.26, NVDA: 139.3, META: 585.57, TSLA: 265.43, GOOGL: 163.53, AVGO: 171.66, COST: 887.06, GOOG: 165.32 },
    { date: '2024-11-19', AAPL: 233.69, MSFT: 427.07, AMZN: 188.0, NVDA: 133.08, META: 587.01, TSLA: 262.51, GOOGL: 164.8, AVGO: 174.98, COST: 889.51, GOOG: 167.02 },
    { date: '2024-11-20', AAPL: 235.61, MSFT: 426.07, AMZN: 188.15, NVDA: 137.01, META: 588.97, TSLA: 255.69, GOOGL: 165.69, AVGO: 176.41, COST: 887.2, GOOG: 167.71 },
    { date: '2024-11-21', AAPL: 232.34, MSFT: 420.19, AMZN: 188.07, NVDA: 138.12, META: 576.46, TSLA: 244.64, GOOGL: 164.49, AVGO: 171.73, COST: 890.32, GOOG: 166.82 },
    { date: '2024-11-22', AAPL: 235.67, MSFT: 421.25, AMZN: 187.71, NVDA: 135.93, META: 577.34, TSLA: 243.18, GOOGL: 164.25, AVGO: 169.79, COST: 898.17, GOOG: 165.75 },
    { date: '2024-11-23', AAPL: 231.03, MSFT: 426.59, AMZN: 189.11, NVDA: 137.88, META: 573.62, TSLA: 250.58, GOOGL: 165.32, AVGO: 170.04, COST: 893.49, GOOG: 166.81 },
    { date: '2024-11-24', AAPL: 230.57, MSFT: 424.09, AMZN: 195.26, NVDA: 139.97, META: 567.62, TSLA: 264.98, GOOGL: 165.64, AVGO: 174.06, COST: 898.1, GOOG: 167.55 }
  ];

  const companies = [
    { rank: 1, symbol: 'AAPL', name: '애플', description: '애플은 혁신적인 기술 기업으로, 아이폰, 아이패드, 맥북 등의 제품을 출시한 세계적인 브랜드입니다. 최신 기술과 디자인을 접목한 제품들로 사용자 경험을 혁신하고 있습니다. 또한, 자사의 운영 체제와 소프트웨어 생태계도 강력합니다.' },
    { rank: 2, symbol: 'MSFT', name: '마이크로소프트', description: '마이크로소프트는 소프트웨어 개발 및 클라우드 서비스를 제공하는 글로벌 기술 기업입니다. Windows 운영 체제와 Office 프로그램으로 널리 알려져 있으며, Azure 클라우드 서비스는 업계에서 중요한 위치를 차지하고 있습니다.' },
    { rank: 3, symbol: 'AMZN', name: '아마존', description: '아마존은 전자상거래 및 클라우드 컴퓨팅 분야의 선두주자입니다. 세계 최대의 온라인 쇼핑몰을 운영하며, AWS(아마존 웹 서비스)는 클라우드 컴퓨팅 시장에서 주요한 역할을 하고 있습니다. 빠른 배송과 다양한 제품군으로 고객을 만족시킵니다.' },
    { rank: 4, symbol: 'NVDA', name: '엔비디아', description: '엔비디아는 그래픽 카드와 AI 하드웨어를 제조하는 기술 회사입니다. GPU 분야에서 시장을 지배하고 있으며, 게임 산업뿐만 아니라 인공지능, 자율주행차, 데이터 센터 등 다양한 분야에 기술을 제공합니다.' },
    { rank: 5, symbol: 'META', name: '메타', description: '메타(구 페이스북)는 소셜 미디어와 가상 현실 기술을 개발하는 글로벌 기업입니다. 페이스북, 인스타그램, 왓츠앱 등의 플랫폼을 통해 세계 최대의 온라인 커뮤니티를 형성하고 있으며, VR 기술을 활용한 메타버스 개발에 주력하고 있습니다.' },
    { rank: 6, symbol: 'TSLA', name: '테슬라', description: '테슬라는 전기차 제조업체로, 지속 가능한 에너지 솔루션을 제공하는 혁신적인 기업입니다. 자율주행 기능을 갖춘 전기차를 생산하며, 솔라 패널 및 에너지 저장 장치 등 청정 에너지 기술에도 투자하고 있습니다.' },
    { rank: 7, symbol: 'GOOGL', name: '구글', description: '구글의 모회사인 알파벳의 우선주로, 주주에게 투표권이 부여됩니다. 주로 회사의 중요한 의사결정에 참여할 수 있는 주식입니다. 광고 및 클라우드 서비스 분야에서 중요한 위치를 차지하며, Android 운영 체제를 통해 모바일 시장에서도 큰 영향을 미치고 있습니다.' },
    { rank: 8, symbol: 'AVGO', name: '브로드컴', description: '브로드컴은 반도체 및 인프라 소프트웨어 솔루션을 제공하는 글로벌 기업입니다. 고성능 반도체와 네트워크 장비를 제조하며, 데이터 센터 및 통신 산업에서 중요한 역할을 하고 있습니다. 다양한 기술 분야에서 중요한 인프라를 제공합니다.' },
    { rank: 9, symbol: 'COST', name: '코스트코', description: '코스트코는 대형 창고형 할인 매장을 운영하는 세계적인 소매업체입니다. 저렴한 가격과 대량 구매로 유명하며, 회원제로 운영되는 매장 모델로 소비자들에게 높은 가치를 제공합니다. 품질 높은 제품과 서비스로 충성도 높은 고객을 보유하고 있습니다.' },
    { rank: 10, symbol: 'GOOG', name: '알파벳', description: '구글의 모회사인 알파벳의 보통주로, 투표권이 없습니다. 주로 회사의 지분을 보유한 주식으로, 의사결정에서의 권한은 없는 대신 주주가 받을 수 있는 이익은 동일합니다. 검색 엔진과 다양한 IT 서비스를 제공하며 구글 외에도 YouTube, Google Cloud 등 여러 자회사를 통해 다양한 기술 분야에서 활동하고 있습니다. ' }
];


  //모달 안의 주가변화율 계산하는 함수 
  const calculatePriceChange = (symbol) => {
    // 11/18일과 11/15일의 데이터 찾기
    const predictionDate = chartData.find(item => item.date === '2024-11-18');
    const previousDate = chartData.find(item => item.date === '2024-11-15');

    if (predictionDate && previousDate) {
      const currentPrice = predictionDate[symbol];
      const previousPrice = previousDate[symbol];

      // 변화량 계산
      const priceChange = currentPrice - previousPrice;
      const percentageChange = ((priceChange / previousPrice) * 100).toFixed(2);

      return {
        predictedPrice: currentPrice.toFixed(2),
        priceChange: priceChange.toFixed(2),
        percentageChange: percentageChange,
        isPositive: priceChange >= 0
      };
    }

    return null;
  };

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
                {/* <div className="graph-placeholder"></div> */}
                <CompanyChart
                  symbol={selectedCompany.symbol}
                  data={chartData}
                />
                {/* <p>내일의 예측 주가는 <strong>233.96 USD</strong> 입니다.</p>
                <p>전날 대비 <span className="price-change">+2.55 (1.10%) ↑</span></p> */}
                {(() => {
                  const priceInfo = calculatePriceChange(selectedCompany.symbol);
                  if (priceInfo) {
                    return (
                      <>
                        <p>내일의 예측 주가는 <strong>{priceInfo.predictedPrice} USD</strong> 입니다.</p>
                        <p>
                          전날 대비&nbsp;
                          <span className={`price-change ${priceInfo.isPositive ? 'positive' : 'negative'}`}>
                            {priceInfo.isPositive ? '+' : ''}{priceInfo.priceChange} ({priceInfo.percentageChange}%)
                            {priceInfo.isPositive ? '↑' : '↓'}
                          </span>
                        </p>
                      </>
                    );
                  }
                  return null;
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalysisPage;
