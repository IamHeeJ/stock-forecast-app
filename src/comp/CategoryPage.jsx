import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/AnalysisPage.css';
import CategoryChart from './CategoryChart.js'; 
import CompanyChart from './CompanyChart.js'; 

function CategoryPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const chartData = [
    { date: '2024-11-11', AAPL: 224.23, NVDA: 145.26, XOM: 119.49, LIN: 456.44, JNJ: 155.04, AZN: 64.79, GM: 57.66, PEP: 164.26, NFLX: 805.44, COST: 932.88 },
    { date: '2024-11-12', AAPL: 224.23, NVDA: 148.29, XOM: 119.37, LIN: 455.59, JNJ: 152.64, AZN: 65.19, GM: 57.41, PEP: 164.34, NFLX: 819.50, COST: 932.38 },
    { date: '2024-11-13', AAPL: 225.12, NVDA: 146.27, XOM: 120.48, LIN: 456.24, JNJ: 153.24, AZN: 65.29, GM: 57.71, PEP: 164.74, NFLX: 830.47, COST: 933.73 },
    { date: '2024-11-14', AAPL: 228.22, NVDA: 146.76, XOM: 120.56, LIN: 453.49, JNJ: 151.87, AZN: 65.04, GM: 57.62, PEP: 165.15, NFLX: 837.26, COST: 923.89 },
    { date: '2024-11-15', AAPL: 225.00, NVDA: 141.98, XOM: 119.31, LIN: 449.10, JNJ: 154.00, AZN: 63.23, GM: 57.04, PEP: 158.62, NFLX: 823.96, COST: 907.07 },
    { date: '2024-11-18', AAPL: 233.06, NVDA: 139.30, XOM: 122.66, LIN: 483.98, JNJ: 161.78, AZN: 75.05, GM: 52.43, PEP: 174.92, NFLX: 719.06, COST: 887.06 },
    { date: '2024-11-19', AAPL: 233.69, NVDA: 133.08, XOM: 120.19, LIN: 485.75, JNJ: 164.01, AZN: 75.05, GM: 52.46, PEP: 174.48, NFLX: 715.81, COST: 889.51 },
    { date: '2024-11-20', AAPL: 235.61, NVDA: 137.01, XOM: 120.17, LIN: 480.35, JNJ: 162.83, AZN: 72.99, GM: 52.68, PEP: 174.48, NFLX: 699.36, COST: 887.20 },
    { date: '2024-11-21', AAPL: 232.34, NVDA: 138.12, XOM: 120.01, LIN: 476.07, JNJ: 162.83, AZN: 71.14, GM: 52.58, PEP: 174.58, NFLX: 687.94, COST: 890.32 },
    { date: '2024-11-22', AAPL: 235.67, NVDA: 135.93, XOM: 119.92, LIN: 473.76, JNJ: 163.41, AZN: 71.15, GM: 52.43, PEP: 174.53, NFLX: 766.04, COST: 898.17 },
    { date: '2024-11-23', AAPL: 231.03, NVDA: 137.88, XOM: 120.02, LIN: 473.76, JNJ: 162.83, AZN: 71.15, GM: 52.37, PEP: 174.19, NFLX: 766.95, COST: 893.49 },
    { date: '2024-11-24', AAPL: 230.57, NVDA: 139.97, XOM: 119.98, LIN: 473.76, JNJ: 162.69, AZN: 66.51, GM: 51.80, PEP: 173.37, NFLX: 762.29, COST: 898.10 }
    ];

  const companies = [
    { symbol: 'AAPL', name: '애플', industry: 'IT', description: '애플은 미국 캘리포니아주에 있는 회사로 1976년 4월 1일에 창립되었습니다. 아메리카, 유럽, 아시아 태평양 지역과 같이 수많은 나라에서 회사를 운영 중입니다. 주요 사업으로는 스마트폰, 개인용 컴퓨터, 태블릿, 웨어러블 등의 설계, 제조 및 판매에 참여하고 있습니다.' },
    { symbol: 'NVDA', name: '엔비디아', industry: 'IT', description: '엔비디아는 1993년 1월에 창립한 회사입니다. 컴퓨터 그래픽 프로세서, 칩셋 및 관련 멀티미디어 소프트웨어 디자인 및 매뉴팩처에 관여하며 운영 세그먼트로는 GPU, 테그라 프로세서(TEGRA) 등이 있습니다. 외장 Pc GPU 리테일 시장에 점유율 1위를 달리고 있으며 인공지능 칩 분야 및 자율주행 자동차 플랫폼 시장에서도 업계 선두를 유지하고 있습니다.' },
    { symbol: 'XOM', name: '엑슨모빌', industry: '에너지', description: '엑슨모빌은 1882년 텍사스에 창립한 하루 총 470만 배럴의 석유를 정제할 수 있는 세계 최대의 정유 회사이며, 세계 최대의 상품 및 특수 화학 제품 제조 업체 중 하나로, 업스트림, 다운스트림 및 화학 분야로 나뉘어 운영됩니다. 원유, 석유 제품 및 기타 특수 제품을 제조하며 올레핀, 폴리올레핀, 방향제 및 기타 다양한 석유화학 제품을 제공하고 있습니다.' },
    { symbol: 'LIN', name: '린데', industry: '화학', description: '린데는 1879년 독일에서 창립된 세계적인 산업용 가스 및 엔지니어링 회사로, 세계 최대의 산업 가스 회사입니다. 린데는 화학 및 에너지, 식품 및 음료, 전자, 헬스케어, 제조, 금속 및 광물 등 다양한 산업에 서비스를 제공합니다. 린데의 산업용 가스는 병원에서 사용되는 산소부터 특수가스, 그리고 청정연료로 사용되는 수소 등 수많은 응용분야에서 사용됩니다.' },
    { symbol: 'JNJ', name: '존슨앤존슨', industry: '제약/위생', description: '존슨앤존스은 1887년 뉴저지에 설립된 의료 회사로 유아용 제품과 뷰티제품, 의약품, 의료용 기기 등 수많은 제품들을 제공합니다. 존슨앤존슨은 약물 부문에서는 면역학, 종양학, 신경학, 폐, 심장학 및 대사 질환과 같은 치료 영역에 중점을 두며, 의료 기기 분야에서는 정형 외과, 수술 도구, 시력 관리 및 몇 가지 작은 영역에 중점을 둡니다.' },
    { symbol: 'AZN', name: '아스트라제네카', industry: '제약', description: '스웨덴의 아스트라AB와 영국의 제네카의 합병을 통해 1999년도에 설립된 다국적 제약회사입니다. 종양학, 심혈관, 신장 및 신진대사, 호흡기 등 다양한 분야에서 처방약을 상용화하는 제약회사입니다. 주력 제품은 콜레스테롤 감속기, 심혈관 약물 등이며, 코로나 바이러스 시절 아스트라제네카 백신(AZD1222)를 개발하며 많은 사람들에게도 알려졌습니다. ' },
    { symbol: 'GM', name: '제너럴모터스', industry: '자동차', description: '미국의 다국적 자동차 제조사로 포드 모터 컴퍼니, 크라이슬러와 함께 미국의 3대 자동차 회사로 불리고 있습니다. 산하에는 쉐보레, 뷰익, 케딜락, GMC 등의 브랜드들이 있습니다. 자동변속기를 세계 최초로 양산차에 적용한 회사이며 현재도 꾸준히 개발을 진행하며 현재까지도 기술특허는 전세계 최고로 평가 받고 있습니다.' },
    { symbol: 'PEP', name: '펩시코', industry: '식음료', description: '1898년 뉴욕에 설립된 회사로 전 세계에서 가장 큰 규모의 식품 및 음료 회사입니다. 펩시, 마운틴듀, 게토레이, 도리토스 등 전 세계에서 유명한 음료 및 스낵 브랜드를 가지고 이를 제조 및 판매합니다. 2020년도 이후에는 펩시 제로 슈거 라임을 출시하며 세계의 제로 제품의 선봉장 역할을 했습니다.' },
    { symbol: 'NFLX', name: '넷플릭스', industry: 'OTT', description: '1997년 온라인 DVD 대여점으로 설립된 회사로 현재는 미국의 글로벌 1위 멀티미디어 엔터테인먼트 OTT 기업으로 성장했다. 190개 이상의 국가에서 1억 9천 9백만 명 이상의 유료 회원들로 구성되어 있으며, 다양한 장르와 언어로 TV 시리즈, 다큐멘터리 및 장편 영화를 디지털 기기를 통하여 즐길 수 있는 플랫폼입니다.' },
    { symbol: 'COST', name: '코스트코', industry: '대형마트', description: '코스트코 홀세일은 한정으로 선별 된 제품을 저렴한 가격으로 쇼핑하고 구매할 수 있는 멤버쉽을 판매하는 창고형 매장입니다. 주로 식품, 음료, 주류, 전자 및 가전 제품, 건강 및 미용 제품, 의류 등 광범위한 제품을 판매하며, 다양한 국가에서 비즈니스 배달, 여행, 그리고 기타 서비스 또한 온라인으로 제공하고 있습니다.' }
  ];

  const showModal = (company) => {
    setSelectedCompany(company);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setSelectedCompany(null);
  };

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
            {/* <div className="graph-placeholder"></div> */}
            <CategoryChart/>
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
                  <p className="industry">{company.industry}</p> 
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

export default CategoryPage;

