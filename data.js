const PORTAL_ITEMS = [
  // ── 수업 도구 ─────────────────────────────────────────────
  {
    id: "problem-solving-lab",
    icon: "🔬",
    name: "장평 문제해결 연구소",
    description: "학생 문제해결력을 기르는 탐구 활동 플랫폼",
    category: "수업",
    status: "active",
    url: "https://jp-problem-solving-lab.vercel.app/"
  },
  {
    id: "hanoi-tower",
    icon: "🗼",
    name: "하노이탑 게임",
    description: "재귀·알고리즘 원리를 익히는 하노이탑 퍼즐 게임",
    category: "수업",
    status: "active",
    url: "https://hanoi-tower-game-rosy.vercel.app/"
  },
  {
    id: "url-highlighter",
    icon: "🖍️",
    name: "URL 하이라이터",
    description: "웹 페이지 내용을 형광펜으로 강조해 공유하는 도구",
    category: "수업",
    status: "active",
    url: "https://url-highlighter.replit.app"
  },
  {
    id: "unplugged-together",
    icon: "🤝",
    name: "뭉쳐야 산다 언플러그드",
    description: "(제대로) 뭉쳐야 산다 언플러그드 활동",
    category: "수업",
    status: "active",
    url: "https://phycom-sim-buddy.lovable.app"
  },
  {
    id: "alpha-stars",
    icon: "⭐",
    name: "Alpha Stars",
    description: "알파스타즈 수업 활동 앱",
    category: "수업",
    status: "active",
    url: "https://sparkle-alpha-friend.lovable.app"
  },
  {
    id: "yut-game",
    icon: "🎲",
    name: "한-인니 국제 윷놀이",
    description: "인도네시아와 함께하는 온라인 국제 윷놀이 게임",
    category: "수업",
    status: "active",
    url: "https://yut-game-2026.vercel.app/"
  },
  {
    id: "url-shortener",
    icon: "🔗",
    name: "단축 주소 서비스",
    description: "수업용 링크를 한글 단축주소로 관리",
    category: "수업",
    status: "active",
    url: "https://your-link-service.vercel.app"
  },
  {
    id: "performance-assessment",
    icon: "📝",
    name: "수행평가 도우미",
    description: "그래프 이론·알고리즘 수행평가 워크시트",
    category: "수업",
    status: "planned",
    url: null
  },
  {
    id: "card-news",
    icon: "🃏",
    name: "카드뉴스 생성기",
    description: "AI 기반 학생 메시지 카드뉴스 제작",
    category: "수업",
    status: "planned",
    url: null
  },
  {
    id: "microbit-portfolio",
    icon: "💻",
    name: "micro:bit 포트폴리오",
    description: "micro:bit Python 과제 제출 및 루브릭 관리",
    category: "수업",
    status: "planned",
    url: null
  },
  {
    id: "algorithm-simulator",
    icon: "🎮",
    name: "알고리즘 시뮬레이터",
    description: "MST·크루스칼·스도쿠 시각화 도구",
    category: "수업",
    status: "planned",
    url: null
  },

  // ── 업무 도구 ─────────────────────────────────────────────
  {
    id: "school-calendar",
    icon: "📅",
    name: "학사 일정 뷰어",
    description: "장평중 학사 일정 캘린더 연동",
    category: "업무",
    status: "planned",
    url: null
  },
  {
    id: "survey-hub",
    icon: "📋",
    name: "설문 모음함",
    description: "구글 폼 설문 링크 모음 및 QR 코드 출력",
    category: "업무",
    status: "planned",
    url: null
  },
  {
    id: "license-manager",
    icon: "🔑",
    name: "에듀테크 라이선스 관리",
    description: "학교 소프트웨어 라이선스 현황 조회",
    category: "업무",
    status: "planned",
    url: null
  },
  {
    id: "class-stats",
    icon: "📊",
    name: "수업 통계 대시보드",
    description: "수업 도구 사용 현황 시각화",
    category: "업무",
    status: "planned",
    url: null
  },

  // ── AI 도구 ───────────────────────────────────────────────
  {
    id: "vibe-coding",
    icon: "✨",
    name: "바이브 코딩 플레이그라운드",
    description: "Gemini Canvas 기반 AI 코딩 체험",
    category: "AI",
    status: "planned",
    url: null
  },
  {
    id: "ai-opinion",
    icon: "🧠",
    name: "AI 자문의견서 도우미",
    description: "AI 중점학교 자문의견서 작성 보조",
    category: "AI",
    status: "planned",
    url: null
  },
  {
    id: "sel-diary",
    icon: "📖",
    name: "SEL 감성 일기",
    description: "사회정서교육 연계 AI 일기 앱",
    category: "AI",
    status: "planned",
    url: null
  }
];

const CATEGORIES = [
  { id: "all",  label: "전체 보기" },
  { id: "수업", label: "📚 수업 도구" },
  { id: "업무", label: "🏫 업무 도구" },
  { id: "AI",   label: "🤖 AI 도구" }
];
