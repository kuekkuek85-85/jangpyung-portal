# 장평 포털 (Jangpyeong Portal)

> 장평중학교 수업·업무 관련 도구를 한 곳에서 바로 접근하는 **교사용 웹 포털**

---

## 소개

수업과 업무에 필요한 에듀테크 도구들이 여기저기 흩어져 있는 불편함을 해소하기 위해 제작한 정적 웹 포털입니다.  
아이콘 카드 클릭 한 번으로 도구에 접근하고, 카테고리 탭으로 빠르게 필터링할 수 있습니다.

| 항목 | 내용 |
|------|------|
| 대상 | 장평중학교 교사 (전 교과 활용 가능) |
| 교과 연계 | 정보 교과 중심, 전 교과 업무 도구 포함 |
| DB | 없음 (완전 정적 웹사이트) |
| 라이선스 | MIT License |
| 제작자 | 이승엽 (장평중학교 정보 교사, 연구지원부) |

---

## 주요 기능

- **카테고리별 카드 대시보드** — 수업 도구 / 업무 도구 / AI 도구
- **탭 필터링** — 카테고리 탭 클릭 시 해당 카드만 표시
- **운영 중 / 추후 지원 예정 뱃지** — 활성 기능은 바로 이동, 예정 기능은 비활성화
- **반응형 레이아웃** — 모바일(360px)부터 데스크탑까지 대응
- **data.js 단일 파일 관리** — 카드 데이터를 한 파일에서 추가·수정 가능

---

## 파일 구조

```
jangpyeong-portal/
├── index.html   ← 메인 포털 페이지
├── data.js      ← 카드 데이터 (기능 목록) — 여기만 수정하면 카드 추가/변경 가능
├── app.js       ← 카드 렌더링 + 탭 필터링 로직
├── style.css    ← 커스텀 스타일 (호버 애니메이션, 뱃지 등)
└── README.md    ← 이 파일
```

---

## 로컬 미리보기

### 방법 1 — VS Code Live Server (권장)
1. VS Code에서 `index.html` 열기
2. 우하단 **Go Live** 버튼 클릭 → 브라우저 자동 열림

### 방법 2 — Python 내장 서버
```bash
# Python 3
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

### 방법 3 — Node.js npx serve
```bash
npx serve .
```

> ⚠️ `file://` 프로토콜로 직접 열면 일부 브라우저에서 스크립트 로딩이 차단될 수 있습니다. 반드시 로컬 서버를 통해 미리보기하세요.

---

## 배포 (GitHub Pages)

```bash
# 1. GitHub 저장소 생성 후 파일 업로드
git init
git add .
git commit -m "feat: 장평 포털 초기 배포"
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main

# 2. GitHub 저장소 Settings → Pages → Branch: main / root 선택 → Save
# 3. https://<username>.github.io/<repo>/ 로 접속 확인
```

---

## 카드 추가 방법

`data.js` 파일의 `PORTAL_ITEMS` 배열에 항목을 추가합니다.

```javascript
{
  id: "my-tool",           // 고유 ID (영문, 하이픈 허용)
  icon: "🛠️",              // 이모지 아이콘
  name: "도구 이름",        // 카드에 표시될 이름
  description: "한 줄 설명", // 카드 하단 설명
  category: "수업",         // "수업" | "업무" | "AI"
  status: "active",         // "active" (운영 중) | "planned" (예정)
  url: "https://..."        // status가 "planned"이면 null
}
```

---

## 스크린샷 안내 (에듀집 등록용)

에듀집 플랫폼 등록 시 **1280×720** 해상도 스크린샷을 권장합니다.

- 브라우저 창을 1280px 너비로 조정 후 캡처
- 전체 보기(탭) 상태로 캡처하면 모든 카드가 노출됩니다
- Windows: `Win + Shift + S` → 영역 캡처

---

## 에듀집 등록 정보

| 항목 | 내용 |
|------|------|
| 서비스 유형 | 웹 포털 / 에듀테크 허브 |
| 사용 대상 | 교사용 |
| 교과 | 정보, 전 교과 |
| 학교급 | 중학교 |
| 제작자 | 이승엽 (장평중학교) |
| 연락처 | — |
| 라이선스 | MIT (수정·재배포 자유) |

---

*© 2026 이승엽 · 장평중학교 · MIT License*
