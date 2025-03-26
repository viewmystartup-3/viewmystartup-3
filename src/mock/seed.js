const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.company.createMany({
    data: [
      {
        name: "두나무",
        description:
          "두나무는 금융서비스를 쉽고 투명하게 전달하고자 노력하고 있는 핀테크 회사입니다. 대한민국 최다 암호화폐 거래소 '업비트'와 대한민국 1등 주식앱 '카카오스탁' 서비스를 중심에 두고, 자산관리 등으로 서비스 영역을 확장해나가고 있습니다. 금융과 IT를 결합해 이용자에게 가치있는 서비스를 함께 만들어나갈 분을 찾고 있습니다.",
        category: "가상화폐, 투자",
        totalInvestment: 1000,
        revenue: 9862,
        employees: 633,
        teamInvestment: 1,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-01%2F2d2f17bd-097c-4011-931f-6c73c7b7b694.png&w=48&q=75",
      },
      {
        name: "성림첨단산업",
        description:
          "'성림첨단산업㈜'은 혁신적인 사고와 지속적인 기술 개발을 통하여 고객에게는 최고의 품질과 기술로 언제나 신뢰할 수 있는 파트너가, 회사 구성원에게는 자아실현을 이루는 행복한 일터가 될 것입니다. 희토류 영구 자석 응용 분야의 미래를 창조해나가는 세계적인 기업으로 나아가겠습니다.",
        category: "제조",
        totalInvestment: 450,
        revenue: 1425.3,
        employees: 194,
        teamInvestment: 2,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2024-11%2Fd17fa967-71f5-4a0c-a578-d0ec1f579c00.png&w=64&q=75",
      },
      {
        name: "빗썸",
        description:
          "빗썸코리아는 2014년에 설립된 블록체인 화폐거래소 분야의 서울특별시에 위치한 한국 스타트업입니다. 빗썸은 글로벌시장에서 검증된 암호화폐만을 엄선해 상장하고, 고객신뢰를 바탕으로 글로벌 암호화폐 거래소로 자리 잡았습니다. 이와 더불어, 암호화폐 결제 서비스인 빗썸캐시, 미래형 키오스크 서비스 터치비 등 블록체인과 핀테크 기술을 접목한 신규 서비스를 통해 성장동력의 다각화를 진행하고 있습니다.",
        category: "가상화폐, 투자",
        totalInvestment: 48,
        revenue: 1358,
        employees: 524,
        teamInvestment: 3,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F341650.png&w=64&q=75",
      },
      {
        name: "에스엠랩",
        description:
          "에스엠랩(Singular Materials Laboratory)은 전기차용 리튬이온 배터리의 핵심 원료인 양극재를 만드는 스타트업입니다.",
        category: "배터리, 제조",
        totalInvestment: 2106,
        revenue: 5,
        employees: 29,
        teamInvestment: 4,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fcompany%2F2768.png&w=64&q=75",
      },
      {
        name: "케이뱅크",
        description:
          "주식회사 케이뱅크는 2016년 1월에 설립된 한국계 은행으로 금융 송금/결제 분야의 케이뱅크가 주요 제품/ 서비스입니다. 본사는 한국 서울 특별시에 위치해 있으며 현재 대표자는 최우형입니다. ",
        category: "은행",
        totalInvestment: 10000,
        revenue: 9465,
        employees: 586,
        teamInvestment: 5,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F279570.png&w=64&q=75",
      },
      {
        name: "야놀자",
        description:
          "야놀자는 한국의 여행 관련 기업들 중 최초로 '유니콘' 지위를 획득하며 빠르게 성장하고 있는 국내 1위 여가 플랫폼이자 트래블 테크 기업입니다. 온라인에서는 슈퍼앱으로서 국내외 숙박 레저 교통 등 여가를 위한 모든 서비스를 제공하고, 오프라인에서는 동남아시아 최대 호텔 프랜차이즈 기업으로서 1만개 이상의 객실을 운영 중입니다.(Singular Materials Laboratory)은 전기차용 리튬이온 배터리의 핵심 원료인 양극재를 만드는 스타트업입니다.",
        category: "숙박,여가",
        totalInvestment: 43640,
        revenue: 3753,
        employees: 211,
        teamInvestment: 6,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F350920.png&w=64&q=75",
      },
      {
        name: "무신사",
        description:
          "에스엠랩(무신사는 온라인 패션 플랫폼으로 스트릿,글로벌 명품, 디자이너 등 5천여 개 브랜드가 입점한 무신사 스토어를 운영합니다. 2019년 유니콘 기업으로 선정되었으며 2021년 홍대를 시작으로 성수, 대구 등 지역에 자체 브랜드 '무신사 스탠다드' 매장과 150여 개의 브랜드가 입점된 오프라인 편집숍을 오픈하여 남성 의류와 여성 의류, 잡화 등을 판매하며 오프라인 영역으로 사업을 확장하였습니다. Materials Laboratory)은 전기차용 리튬이온 배터리의 핵심 원료인 양극재를 만드는 스타트업입니다.",
        category: "의류,판매",
        totalInvestment: 3200,
        revenue: 8829,
        employees: 1702,
        teamInvestment: 7,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-12%2F694577d0-9b8c-40f3-94fa-8ae34891c1e4.png&w=64&q=75",
      },
      {
        name: "지엔티파마",
        description:
          "지엔티파마는 인류 최고의 난제인 뇌졸중과 알츠하이머 치매와 같은 뇌신경질환의 혁신적인 치료 신약과 기술 개발을 목표로 1998년 4월에 설립된 벤처기업입니다. 지엔티파마는 다중 경로 뇌신경세포 사멸의 개념을 정립하여 질환 선택적인 맞춤형 다중 표적 뇌신경세포 보호 신약 개발을 선도하고 있습니다.",
        category: "신약개발",
        totalInvestment: 10,
        revenue: 7,
        employees: 43,
        teamInvestment: 112,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-11%2F73d37fa5-cb6a-4ad9-b984-ef79bc79e7a8.png&w=64&q=75",
      },
      {
        name: "당근마켓",
        description:
          "당근마켓은 2015년 7월에 출시된 지역 기반 중고거래 플랫폼으로 사용자들이 자신의 동네에서 직접 만나 물품을 거래할 수 있도록 지원합니다. 이를 통해 지역 사회 내에서 신뢰할 수 있는 거래 환경을 조성하며 이웃 간의 소통과 교류를 촉진하고 있습니다. 또한 중고거래뿐만 아니라 동네 생활 정보 공유 지역 업체 홍보, 부동산 직거래, 동네 알바  등 다양한 지역 밀착형 서비스를 제공하여 사용자들의 편의를 높이고 있습니다.",
        category: "판매",
        totalInvestment: 2270,
        revenue: 1274,
        employees: 536,
        teamInvestment: 21,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-09%2Fa1a896d7-32ce-490f-aaf7-49204766ed3d.png&w=64&q=75",
      },
      {
        name: "한국피엠지제약",
        description:
          "류마티스내과 분야에 특화되어 있는 제약사, 주요 제품으로는 생약제제인 '레일라정'을 비롯하여, 항류마티스제인 '류마킨' 소염진통제 '신플렉스 세이프' 국내 최초 콜레칼시페롤 단일제 '애드민포르테(비타민 D)' 등이 있습니다.",
        category: "신약개발",
        totalInvestment: 400,
        revenue: 505,
        employees: 105,
        teamInvestment: 12,
        imageUrl: "http://www.pmgpharm.co.kr/img/contents/sub0104_5.png",
      },
      {
        name: "지씨지놈",
        description:
          "유전체 분석을 통한 질병 예측 전문 업체로 암, 유전희귀질환, 건강검진 등 진단키트 및 시약 개발 및 생산을 담당하고 있습니다.",
        category: "신약개발",
        totalInvestment: 181,
        revenue: 428,
        employees: 134,
        teamInvestment: 8675,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F340450.png&w=64&q=75",
      },
      {
        name: "아이지에이웍스",
        description:
          "아이지에이웍스는 모바일 마케팅에서 필수적으로 사용되는 모바일 어트리뷰션을 비롯해 모바일 데이터분석 마케팅자동화 DMP, 머신러닝, AI, 트레이드데스크, 마켓인텔리전스 등 모바일 데이터와 플랫폼을 서비스 하는 국내 유일의 종합 데이터 테크 SaaS 서비스형 소프트웨어 기업입니다. 모바일 데이터 분야에 대한 오랜 연구와 투자로 업계 최초로 10억대가 넘는 모바일 데이터 분석 시대를 열어 보인 아이지에이웍스는 압도적인 데이터를 기반으로 AI 머신러닝 기술을 고도화 하며, 명실상부 국내 B2B 모바일 데이터 산업을 대표하는 데이터 플랫폼 전문기업으로 자리매김 하였습니다.",
        category: "SW개발",
        totalInvestment: 535,
        revenue: 981,
        employees: 152,
        teamInvestment: 872,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fcompany%2F1054.png&w=64&q=75",
      },
      {
        name: "플랜택",
        description:
          "포스코계열의 플랜텍은 포항제철소 3고로 3차 개수 프로젝트 등 철강플랜트를 기반으로 발전 환경 분야로 그 영역을 넓혀 나가고 있는 플랜텍의 엔지니어링 기술로 고객의 가치를 높여 나가겠습니다.",
        category: "토목, 건설",
        totalInvestment: 600,
        revenue: 6793,
        employees: 609,
        teamInvestment: 90,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-02%2F937f9e69-5d3a-4e89-9138-32445c61e7ba.png&w=64&q=75",
      },
      {
        name: "에스아이플렉스",
        description:
          "에스아이플렉스는 1988년 설립이래 고객만족 최고품질을 경영이념으로 다변화하는 주변환경에 다양한 고객의 요구를 적극적으로 만족시키며 노력한 결과 연성인쇄회로 기판 제조 분야를 선도하는 업체가 되었습니다. ",
        category: "PCB,제조",
        totalInvestment: 700,
        revenue: 3178.3,
        employees: 254,
        teamInvestment: 332,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-02%2F8a477df1-6352-4347-8d88-30eb900a0e4f.png&w=64&q=75",
      },
      {
        name: "컬리",
        description:
          "마켓컬리는 2015년 서비스 런칭 이후, 국내에서 가장 빠른 배송 서비스, 미식가와 주부들을 사로잡은 큐레이션, 막강한 컨텐츠와 브랜드 파워로 최고의 공급사들이 함께하고 싶은 서비스로 성장하였습니다. 좋은 제품을 제공하기 위해 해외 직구, 백화점, 동네 마트, 재래 시장. 전국 산지를 탐색하였습니다. 나와 내 가족이 사고 싶은 상품을 판매하고 있으며, 물류 혁신을 통한 새벽 배송, 같은 품질 내 가장 저렴한 가격을 제공하기 위해 노력하고 있습니다.",
        category: "음식,판매",
        totalInvestment: 8832,
        revenue: 20727,
        employees: 2746,
        teamInvestment: 312,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F408480.png&w=64&q=75",
      },
      {
        name: "덕산넵코어스",
        description:
          "2012년 설립된 넵코어스는 방위산업 우주항공 항법인프라 분야 사업을 영위하며 특히 항법 분야에서 높은 경쟁력을 보유하고 있습니다. 2018년 누리호 시험 발사체에 GNSS 항법장치 탑재, 2021년 3월 반도체 디스플레이 소재 기업 덕산그룹이 넵코어스를 인수 완료했습니다.",
        category: "항공,제조",
        totalInvestment: 300,
        revenue: 314,
        employees: 170,
        teamInvestment: 399,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-02%2F25286deb-ff39-4153-b084-eb5319a6f780.png&w=64&q=75",
      },
      {
        name: "로킷헬스케어",
        description:
          "로킷헬스케어는 세계 최고 수준의 장기재생 플랫폼, 진단 및 치료, 노화방지 솔루션을 제공하여 세계 인류의 삶을 향상시키는 글로벌 헬스케어 기업입니다. 2012년에 설립되었고, 현재는 당뇨발 재생치료 플랫폼과 연골재생 등 4D 바이오프린팅과 자가세포를 사용한 치료법, 인체 기반 바이오 잉크 기술, 항노화 재생, 단일세포 RNA시퀀스 유전자 분석 서비스로 세계인에게 최고 수준의 장기재생 플랫폼과 노화방지 솔루션을 제공하여 인류의 삶의 질과 건강을 향상시킵니다.",
        category: "의료,제조",
        totalInvestment: 469,
        revenue: 63,
        employees: 58,
        teamInvestment: 6423,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fcompany%2F67920.png&w=64&q=75",
      },
      {
        name: "제이비케이랩",
        description:
          "아로니아의 Cyanidine을 비롯한 식물영양소에서 유효성분을 나노추출, 고순도정제, 분리하여 화학합성이 아닌 천연물 기반의 부작용 없는 원료의약품, 건강기능식품, 천연비타민, 헬스케어 제품 및 반려동물용 의약품 등을 생산합니다.",
        category: "의료, 제조",
        totalInvestment: 1000,
        revenue: 460,
        employees: 165,
        teamInvestment: 199,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-01%2F06aac63c-465d-433f-bc74-8ce6e484d613.png&w=64&q=75",
      },
      {
        name: "인투셀",
        description:
          "인투셀은 저분자 위주의 신약개발 방식에서 탈피하여 독창적 아이디어 창출 및 기술적 검증에 기반한 신개념 기반기술의 연구개발 및 사업화를 목표로 탄생하였습니다",
        category: "신약개발",
        totalInvestment: 502,
        revenue: 16,
        employees: 41,
        teamInvestment: 3219,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fcompany%2F208.png&w=64&q=75",
      },
      {
        name: "에이치디현대삼호",
        description:
          "현대중공업 그룹의 계열사인 조선업체로 전남 영암군 삼호읍 일대 300만 부지에 세계 4위 규모의 선박 생산능력을 보유하고 초대형 컨테이너선, 탱커, LNG선, LPG선, 자동차 운반선, 벌커 등 거의 모든 상선에 대해 건조 실적을 확보하고 있습니다",
        category: "강선건조",
        totalInvestment: 99,
        revenue: 70031.4,
        employees: 3905,
        teamInvestment: 3676,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-01%2Fd9602423-0b56-419f-8737-8d30c015e379.png&w=64&q=75",
      },
      {
        name: "비바리퍼블리카",
        description:
          "간편송금 모바일 서비스 토스를 운영하며 LG유플러스 전자결제사업부문을 인수해 PG사업을 신규 진행 중입니다. ",
        category: "은행",
        totalInvestment: 10000,
        revenue: 13706.5,
        employees: 1073,
        teamInvestment: 366,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2022-09%2F2075df61-33e0-4ecc-ba42-b95ebf15705a.png&w=64&q=75",
      },     
    ],
    

  });
}
main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
