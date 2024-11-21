import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/AnalysisPage.css';
import NasdaqChart from './NasdaqChart.js';
import CompanyChart from './CompanyChart.js';

function AnalysisPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  

  const chartData = [
    { date: '2024-10-31', AAPL: 225.66, MSFT: 406.35, AMZN: 186.40, NVDA: 132.76, META: 567.58, TSLA: 249.85, GOOGL: 171.11, AVGO: 169.77, COST: 873.02, GOOG: 172.69 },
    { date: '2024-11-01', AAPL: 222.67, MSFT: 410.37, AMZN: 197.93, NVDA: 135.40, META: 567.16, TSLA: 248.98, GOOGL: 171.29, AVGO: 168.92, COST: 877.31, GOOG: 172.65 },
    { date: '2024-11-04', AAPL: 221.77, MSFT: 408.46, AMZN: 195.78, NVDA: 136.05, META: 560.68, TSLA: 242.84, GOOGL: 169.24, AVGO: 168.55, COST: 886.07, GOOG: 170.68 },
    { date: '2024-11-05', AAPL: 223.20, MSFT: 411.46, AMZN: 199.50, NVDA: 139.91, META: 572.43, TSLA: 251.44, GOOGL: 169.74, AVGO: 173.90, COST: 890.17, GOOG: 171.41 },
    { date: '2024-11-06', AAPL: 222.48, MSFT: 420.18, AMZN: 207.09, NVDA: 145.61, META: 572.05, TSLA: 288.53, GOOGL: 176.51, AVGO: 179.55, COST: 899.25, GOOG: 178.33 },
    { date: '2024-11-07', AAPL: 227.23, MSFT: 425.43, AMZN: 210.05, NVDA: 148.88, META: 591.70, TSLA: 296.91, GOOGL: 180.75, AVGO: 183.81, COST: 913.93, GOOG: 182.28 },
    { date: '2024-11-08', AAPL: 226.96, MSFT: 422.54, AMZN: 208.18, NVDA: 147.63, META: 589.34, TSLA: 321.22, GOOGL: 178.35, AVGO: 183.64, COST: 943.80, GOOG: 179.86 },
    { date: '2024-11-11', AAPL: 224.23, MSFT: 418.01, AMZN: 206.84, NVDA: 145.26, META: 583.17, TSLA: 350.00, GOOGL: 180.35, AVGO: 178.91, COST: 932.88, GOOG: 181.97 },
    { date: '2024-11-12', AAPL: 224.23, MSFT: 423.03, AMZN: 208.91, NVDA: 148.29, META: 584.82, TSLA: 328.49, GOOGL: 181.62, AVGO: 176.22, COST: 932.38, GOOG: 183.32 },
    { date: '2024-11-13', AAPL: 225.12, MSFT: 425.20, AMZN: 214.10, NVDA: 146.27, META: 580.00, TSLA: 330.24, GOOGL: 178.88, AVGO: 173.58, COST: 933.73, GOOG: 180.49 },
    { date: '2024-11-14', AAPL: 228.22, MSFT: 426.89, AMZN: 211.48, NVDA: 146.76, META: 577.16, TSLA: 311.18, GOOGL: 175.58, AVGO: 170.38, COST: 923.89, GOOG: 177.35 },
    { date: '2024-11-15', AAPL: 225.00, MSFT: 415.00, AMZN: 202.61, NVDA: 141.98, META: 554.08, TSLA: 320.72, GOOGL: 172.49, AVGO: 164.84, COST: 907.07, GOOG: 173.89 },
    { date: '2024-11-18', AAPL: 228.02, MSFT: 415.76, AMZN: 201.70, NVDA: 140.15, META: 554.40, TSLA: 338.74, GOOGL: 175.30, AVGO: 165.67, COST: 919.51, GOOG: 176.80 },
    { date: '2024-11-19', AAPL: 228.28, MSFT: 417.79, AMZN: 204.61, NVDA: 147.01, META: 561.09, TSLA: 346.00, GOOGL: 178.12, AVGO: 165.35, COST: 930.15, GOOG: 179.58 },
    { date: '2024-11-20', AAPL: 229.00, MSFT: 415.49, AMZN: 202.88, NVDA: 145.89, META: 565.52, TSLA: 342.03, GOOGL: 175.98, AVGO: 163.25, COST: 928.08, GOOG: 177.33 },
    { date: '2024-11-21', AAPL: 229.00, MSFT: 415.49, AMZN: 202.88, NVDA: 145.89, META: 565.52, TSLA: 342.03, GOOGL: 175.98, AVGO: 163.25, COST: 928.08, GOOG: 177.33 },
    { date: '2024-11-22', AAPL: 230.29, MSFT: 425.18, AMZN: 189.10, NVDA: 139.97, META: 577.20, TSLA: 231.39, GOOGL: 169.88, AVGO: 171.62, COST: 887.10, GOOG: 171.17 },
    { date: '2024-11-23', AAPL: 227.84, MSFT: 429.29, AMZN: 192.13, NVDA: 137.87, META: 581.81, TSLA: 227.71, GOOGL: 169.31, AVGO: 170.62, COST: 886.10, GOOG: 171.19 },
    { date: '2024-11-24', AAPL: 230.46, MSFT: 421.53, AMZN: 190.78, NVDA: 135.63, META: 570.05, TSLA: 231.18, GOOGL: 169.67, AVGO: 173.11, COST: 892.67, GOOG: 172.70 },
    { date: '2024-11-25', AAPL: 228.20, MSFT: 409.99, AMZN: 194.73, NVDA: 136.56, META: 564.95, TSLA: 244.88, GOOGL: 169.74, AVGO: 174.16, COST: 889.61, GOOG: 172.87 },
    { date: '2024-11-26', AAPL: 230.04, MSFT: 423.02, AMZN: 201.36, NVDA: 136.29, META: 574.25, TSLA: 259.99, GOOGL: 171.90, AVGO: 173.68, COST: 887.96, GOOG: 173.68 },
    { date: '2024-11-27', AAPL: 229.48, MSFT: 419.64, AMZN: 201.53, NVDA: 141.58, META: 581.50, TSLA: 258.00, GOOGL: 177.10, AVGO: 178.03, COST: 895.18, GOOG: 176.47 },
    { date: '2024-11-28', AAPL: 227.74, MSFT: 420.50, AMZN: 205.70, NVDA: 146.54, META: 581.92, TSLA: 272.86, GOOGL: 177.60, AVGO: 175.73, COST: 892.41, GOOG: 179.03 }
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
