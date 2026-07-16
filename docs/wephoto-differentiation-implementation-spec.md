# WePhoto Differentiation — Implementation Spec

Last updated: 2026-07-16

이 문서는 `docs/wephoto-differentiation-strategy.md`의 3가지 차별점을 실제 코드로
옮기기 위한 상세 구현 명세다. 이 문서는 "무엇을, 어디에, 어떻게" 만들지만 적는다.
아직 구현하지 않은 상태이며, 이 문서 자체는 코드 변경을 포함하지 않는다.

작업 순서는 개발량이 적고 효과가 큰 순서로 배치했다.

- Task 1 — Pose ↔ Tool 흐름 연결 (차별점 B)
- Task 2 — 실행 지시문 강화: Common mistake → Fix (차별점 A)
- Task 3 — 무마찰·프라이버시 배지 통일 (차별점 C)
- Task 4 — 시트 번호 클릭 → 지시문 포커스 (차별점 A 보조)

각 Task는 독립적으로 배포 가능하도록 설계했다.

---

## 사전 파악: 현재 코드 구조 (변경 대상)

| 파일 | 역할 | 관련 차별점 |
|---|---|---|
| `src/pages/VisualPoseBook.jsx` | 7개 포즈북 공통 렌더러 (`book` prop) | A, B |
| `src/pages/CouplePoseBook.jsx` | 커플 포즈북 (poses 로컬 배열) | A, B |
| `src/pages/SocialMediaPoseBook.jsx` | 소셜 포즈북 (poses 로컬 배열) | A, B |
| `src/data/newPoseBooks.js` | 7개 `book` 객체 데이터 | A |
| `src/pages/PoseBook.jsx` | 포즈북 라이브러리 인덱스 | B |
| `src/pages/Tools.jsx` | 툴 허브 | B, C |
| `src/pages/EngagementCalculator.jsx` | 참여율 계산기 | B, C |
| `src/pages/ImageSizeCalculator.jsx` | 이미지 사이즈 계산기 | B, C |
| `src/pages/CouplePoseBook.css` | 포즈북 공통 스타일 (Visual/Couple/Social 공유) | A, B |
| `src/pages/Tools.css` | 툴 공통 스타일 | B, C |

### 현재 포즈 데이터 스키마 (기준선)

`src/data/newPoseBooks.js`의 각 pose 객체:

```js
{
  slug: 'doorway-lean',
  title: 'Doorway Lean',
  mood: 'Start easy',
  cues: ['...', '...'],
  note: 'Stay tall through the chest instead of sinking into the wall.',
}
```

`CouplePoseBook.jsx`의 pose 객체는 필드명이 다르다:

```js
{
  number: '01',
  slug: '...',
  title: '...',
  mood: '...',
  steps: ['...'],      // cues 대신 steps
  camera: '...',       // 카메라 노트
  avoid: '...',        // note 대신 avoid
}
```

`SocialMediaPoseBook.jsx`의 pose 객체:

```js
{
  number: '01',
  slug: 'natural-smile',
  title: 'Natural Smile',
  mood: 'Relax the shoulders',
  cues: ['...', '...'],
  note: '...',
}
```

> 주의: 세 파일이 필드명이 통일되어 있지 않다. Task 2에서 이 차이를 반드시 고려한다.

---

## Task 1 — Pose ↔ Tool 흐름 연결 (차별점 B)

### 1.1 목표

포즈북을 다 본 사용자를 툴로, 툴을 다 쓴 사용자를 포즈북으로 자연스럽게 이동시킨다.
현재 두 영역은 서로 링크가 거의 없다.

### 1.2 신규 공용 컴포넌트 생성

**파일:** `src/components/NextStep.jsx` (신규)

용도: "다음 단계" 카드 1~2개를 렌더링하는 재사용 블록.

```jsx
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './NextStep.css';

// items: [{ to, eyebrow, title, text, icon: LucideIcon }]
const NextStep = ({ heading, items }) => {
  return (
    <section className="next-step site-shell" aria-label="Next steps">
      {heading && (
        <header className="next-step-heading" data-reveal>
          <span className="eyebrow">Keep going</span>
          <h2>{heading}</h2>
        </header>
      )}
      <div className="next-step-grid">
        {items.map(({ to, eyebrow, title, text, icon: Icon }, index) => (
          <Link
            key={to}
            to={to}
            className="next-step-card card"
            data-reveal
            style={{ '--delay': `${0.06 + index * 0.06}s` }}
          >
            {Icon && <Icon size={22} strokeWidth={1.8} />}
            <span className="eyebrow">{eyebrow}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <strong>Open <ArrowRight size={16} /></strong>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NextStep;
```

**파일:** `src/components/NextStep.css` (신규)

- `.next-step` : 상하 패딩 `clamp(3rem, 6vw, 5rem)` 0.
- `.next-step-grid` : `display:grid; gap:1rem; grid-template-columns:repeat(auto-fit,minmax(240px,1fr));`
- `.next-step-card` : 기존 `.card` 스타일 재사용 + `padding:1.5rem; display:flex; flex-direction:column; gap:.5rem;`
- `.next-step-card strong` : coral(`#FF3F74`) 컬러, `display:inline-flex; align-items:center; gap:.35rem;`
- hover 시 `transform: translateY(-2px)` 정도의 기존 카드 모션과 일치시킨다.

> 기존 `data-reveal` 스크롤 애니메이션 훅을 그대로 쓰므로 별도 JS 불필요.

### 1.3 각 포즈북 하단에 삽입

**대상:** `src/pages/VisualPoseBook.jsx`, `src/pages/CouplePoseBook.jsx`,
`src/pages/SocialMediaPoseBook.jsx`

현재 각 파일 하단에는 `pose-book-cta` 섹션이 있다. 그 **바로 위**에 `NextStep`을 삽입한다.

VisualPoseBook.jsx 예시 (import 추가 후):

```jsx
import NextStep from '../components/NextStep';
import { Crop, BarChart3 } from 'lucide-react';
```

```jsx
      {/* pose-guide 섹션 닫힌 직후, pose-book-cta 섹션 앞에 삽입 */}
      <NextStep
        heading="You have the pose. Now prepare the post."
        items={[
          {
            to: '/tools/image-size-calculator',
            eyebrow: 'Before you post',
            title: 'Size it for the platform',
            text: 'Resize and crop your shot for Instagram, Pinterest, or LinkedIn without stretching it.',
            icon: Crop,
          },
          {
            to: '/tools/engagement-rate-calculator',
            eyebrow: 'After you post',
            title: 'Check if it worked',
            text: 'Measure engagement by followers or reach, privately in your browser.',
            icon: BarChart3,
          },
        ]}
      />
```

- `CouplePoseBook.jsx`, `SocialMediaPoseBook.jsx`도 동일하게 `pose-book-cta` 앞에 삽입.
- 세 파일 모두 같은 `items`를 사용해도 무방하다.

### 1.4 툴 하단에 포즈북으로 되돌아가는 블록

**대상:** `src/pages/EngagementCalculator.jsx`, `src/pages/ImageSizeCalculator.jsx`

각 파일의 마지막 섹션(`tool-reference` 등) **뒤**에 `NextStep`을 삽입한다.

```jsx
import NextStep from '../components/NextStep';
import { Camera, Users } from 'lucide-react';
```

```jsx
      <NextStep
        heading="Need better photos to post in the first place?"
        items={[
          {
            to: '/pose-book',
            eyebrow: 'Pose library',
            title: 'Browse 108 pose ideas',
            text: 'Nine visual pose sheets with step-by-step direction for every shot.',
            icon: Camera,
          },
          {
            to: '/pose-book/selfie-mirror',
            eyebrow: 'Most popular',
            title: 'Selfie & mirror poses',
            text: 'Flattering phone angles and mirror-photo prompts you can try today.',
            icon: Users,
          },
        ]}
      />
```

### 1.5 툴 허브에도 포즈 라이브러리 링크

**대상:** `src/pages/Tools.jsx`

`tools-next` 섹션 뒤에 `NextStep` 1개 카드(`/pose-book`)를 추가하거나, 기존
`tools-hero` 안에 pose-book 링크 텍스트를 한 줄 추가한다. 최소 구현은 후자.

### 1.6 완료 기준 (Task 1)

- [ ] 7개 VisualPoseBook 라우트 + couples + social 하단에 툴 카드 2개가 보인다.
- [ ] 두 계산기 하단에 포즈북 카드 2개가 보인다.
- [ ] 카드 클릭 시 정확한 경로로 이동한다.
- [ ] `npm run lint` 통과, `npm run build` 통과 (27개 라우트 유지).
- [ ] 1440px·390px에서 가로 스크롤·콘솔 경고 없음.

---

## Task 2 — 실행 지시문 강화: Common mistake → Fix (차별점 A)

### 2.1 목표

각 포즈에 "흔한 실수 → 교정" 한 줄을 표준 필드로 추가해, Pinterest 이미지가 줄 수
없는 실행 정보를 강화한다. 현재 `note`/`avoid` 필드가 부분적으로 이 역할을 하지만
필드명·표현이 통일돼 있지 않다.

### 2.2 데이터 스키마 확장

세 데이터 소스 모두에 `fix` 필드를 추가한다. 기존 `note`/`avoid`는 "무엇을 피하라"
(mistake) 역할로 유지하고, `fix`는 "대신 이렇게 하라"를 담는다.

`src/data/newPoseBooks.js`의 각 pose:

```js
{
  slug: 'doorway-lean',
  title: 'Doorway Lean',
  mood: 'Start easy',
  cues: ['...', '...'],
  note: 'Stay tall through the chest instead of sinking into the wall.',
  mistake: 'Leaning your full weight into the frame so the shoulder collapses.',
  fix: 'Use light contact and keep your spine long, as if the wall is optional.',
}
```

- `mistake` : 흔한 실수 (짧게, 1문장)
- `fix` : 교정 방법 (짧게, 1문장)
- 기존 `note`는 유지(추가 팁). 중복되면 `note`를 `fix`로 흡수하고 제거해도 된다.

`CouplePoseBook.jsx`(로컬 poses)와 `SocialMediaPoseBook.jsx`(로컬 poses)에도 동일하게
`mistake`, `fix` 추가. Couple은 기존 `avoid` → `mistake`로 이름 통일 권장.

> 총 작성량: 9개 시트 × 12포즈 = **108쌍의 mistake/fix 문장**. 카테고리별로 나눠
> 작성한다. 콘텐츠 작업이 크므로, 먼저 강한 3개 시트(Social / Selfie / Couples)만
> 채우고 배포한 뒤 나머지를 채우는 단계적 접근을 권장한다.

### 2.3 렌더링 변경

**대상:** `VisualPoseBook.jsx` (poses 카드 렌더 부분, 현재 105줄 부근)

현재:

```jsx
<p className="pose-natural-note">{pose.note}</p>
```

변경(추가):

```jsx
{pose.note && <p className="pose-natural-note">{pose.note}</p>}
{(pose.mistake || pose.fix) && (
  <div className="pose-fix">
    {pose.mistake && (
      <p className="pose-fix-mistake"><span>Common mistake</span>{pose.mistake}</p>
    )}
    {pose.fix && (
      <p className="pose-fix-solution"><span>Fix</span>{pose.fix}</p>
    )}
  </div>
)}
```

- `CouplePoseBook.jsx`, `SocialMediaPoseBook.jsx`의 카드 렌더에도 동일 블록 추가.
- 필드가 없으면 렌더하지 않으므로, 단계적으로 채워도 레이아웃이 깨지지 않는다.

### 2.4 스타일 추가

**대상:** `src/pages/CouplePoseBook.css` (세 포즈북이 공유)

```css
.pose-fix {
  margin-top: 0.75rem;
  display: grid;
  gap: 0.4rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 0.75rem;
}
.pose-fix p { margin: 0; font-size: 0.9rem; line-height: 1.45; }
.pose-fix span {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}
.pose-fix-mistake span { color: #FF8A3D; }   /* Tangerine: 주의 */
.pose-fix-solution span { color: #2F4BE8; }  /* Cobalt: 해결 */
```

### 2.5 구조화 데이터(선택, 권장)

`VisualPoseBook.jsx`의 JSON-LD `ItemList` 각 항목에 `description`을 추가해 검색엔진에
실행 정보를 노출한다.

```js
itemListElement: book.poses.map((pose, index) => ({
  '@type': 'ListItem',
  position: index + 1,
  name: pose.title,
  description: [pose.cues?.join(' '), pose.fix].filter(Boolean).join(' '),
})),
```

### 2.6 완료 기준 (Task 2)

- [ ] 최소 3개 시트(Social / Selfie / Couples)의 12포즈 전부에 `mistake`+`fix` 존재.
- [ ] 나머지 6개 시트는 필드 없이도 정상 렌더(점진 배포 가능).
- [ ] mistake는 Tangerine, fix는 Cobalt 라벨로 시각 구분된다.
- [ ] `npm run lint`, `npm run build` 통과, JSON-LD 유효.

---

## Task 3 — 무마찰·프라이버시 배지 통일 (차별점 C)

### 3.1 목표

"No signup / private / in-browser" 메시지를 툴 전반에서 일관된 컴포넌트로 노출한다.
현재는 EngagementCalculator에만 `ShieldCheck` 문구가 부분적으로 있다.

### 3.2 신규 컴포넌트

**파일:** `src/components/PrivacyBadge.jsx` (신규)

```jsx
import { ShieldCheck } from 'lucide-react';
import './PrivacyBadge.css';

const PrivacyBadge = ({ text = 'Private. No signup. Runs in your browser.' }) => (
  <p className="privacy-badge">
    <ShieldCheck size={16} strokeWidth={2} />
    <span>{text}</span>
  </p>
);

export default PrivacyBadge;
```

**파일:** `src/components/PrivacyBadge.css` (신규)

```css
.privacy-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #2F4BE8;
  background: rgba(47, 75, 232, 0.08);
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  margin: 0;
}
```

### 3.3 삽입 위치

- `Tools.jsx` : `tools-hero-badge` 아래 또는 `tools-hero` 안에 1개.
- `EngagementCalculator.jsx` : hero/헤더 영역에 1개 (기존 result 내 문구는 유지).
- `ImageSizeCalculator.jsx` : hero/헤더 영역에 1개.

### 3.4 완료 기준 (Task 3)

- [ ] 두 계산기와 툴 허브 상단에 동일한 배지가 보인다.
- [ ] 문구가 한 컴포넌트에서 관리된다(중복 하드코딩 제거).
- [ ] `npm run lint`, `npm run build` 통과.

---

## Task 4 — 시트 번호 클릭 → 지시문 포커스 (차별점 A 보조)

### 4.1 현재 동작

`VisualPoseBook.jsx`의 `pose-sheet-legend`는 이미 `href={#slug}`로 앵커 이동한다.
즉 기본 스크롤은 이미 된다. 개선 포인트는 "어디로 갔는지" 시각 피드백이다.

### 4.2 개선 사항

1. 대상 카드에 스크롤 시 하이라이트 효과(`:target`)를 준다.

**대상:** `src/pages/CouplePoseBook.css`

```css
.pose-guide-card:target {
  outline: 2px solid #FF3F74;
  outline-offset: 4px;
  animation: pose-target-flash 1.2s ease-out 1;
}
@keyframes pose-target-flash {
  0% { background: rgba(255, 63, 116, 0.12); }
  100% { background: transparent; }
}
```

2. 앵커 점프가 헤더에 가리지 않도록 스크롤 오프셋을 준다.

```css
.pose-guide-card { scroll-margin-top: 90px; } /* 고정 헤더 높이에 맞춰 조정 */
```

3. (선택) `prefers-reduced-motion` 사용자에겐 애니메이션을 끈다.

```css
@media (prefers-reduced-motion: reduce) {
  .pose-guide-card:target { animation: none; }
}
```

### 4.3 완료 기준 (Task 4)

- [ ] 시트 번호 클릭 시 해당 포즈 카드로 이동하고 잠시 하이라이트된다.
- [ ] 고정 헤더에 카드 상단이 가리지 않는다.
- [ ] reduced-motion에서 깜빡임이 없다.

---

## 배포 순서 및 검증

| 순서 | Task | 예상 규모 | 배포 가능 단위 |
|---|---|---|---|
| 1 | Task 1 흐름 연결 | 소 (컴포넌트 1개 + 삽입) | 단독 배포 |
| 2 | Task 3 프라이버시 배지 | 소 | 단독 배포 |
| 3 | Task 4 앵커 포커스 | 소 (CSS 위주) | 단독 배포 |
| 4 | Task 2 mistake/fix | 대 (문장 108쌍) | 3개 시트씩 점진 배포 |

### 공통 검증 절차 (모든 Task 공통)

1. `npm run lint` 통과.
2. `npm run build` 통과 및 27개 인덱싱 라우트 + `404.html` 생성 확인.
3. 1440px 데스크톱 / 390px 모바일에서:
   - 가로 스크롤 없음
   - 콘솔 에러·경고 없음
   - 새 링크·앵커 정상 동작
4. 변경 후 `docs/current-status.md`의 관련 섹션을 갱신한다.

---

## 측정 (차별화가 작동하는지 확인)

`docs/wephoto-promotion-plan.md`의 Website KPIs와 연결한다.

- 포즈 가이드 → 툴 내부 클릭률 (Task 1의 효과)
- 툴 → 포즈 라이브러리 내부 클릭률 (Task 1의 효과)
- 포즈 상세(`mistake`/`fix`) 영역 스크롤 깊이 (Task 2의 효과)
- 재방문율 및 세션당 페이지뷰
- "how to pose" 계열 검색어 노출·클릭 (Task 2 + 구조화 데이터 효과)

이벤트 이름 제안(GA4): `next_step_click`, `pose_to_tool_click`, `tool_to_pose_click`,
`pose_fix_view`.
