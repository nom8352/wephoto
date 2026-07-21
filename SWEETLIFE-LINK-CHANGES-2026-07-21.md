# Sweetlife 링크 및 외부 출처 변경 기록

- 기록일: 2026-07-21
- 프로젝트: WePhoto (`wephoto.com.au`)
- 상태: 코드와 문서 반영 및 `main` 브랜치 푸시 완료

## Sweetlife 링크

| 위치 | 앵커 텍스트 | 목적지 | 구분 |
| --- | --- | --- | --- |
| 홈페이지 | `Brisbane newborn photographer` | `https://sweetlifephotography.com.au/` | 전문 스튜디오가 필요한 경우를 설명하는 스튜디오 자료 카드 |
| 홈페이지 | `Newborn photography North Lakes` | `https://sweetlifephotography.com.au/` | 전문 스튜디오가 필요한 경우를 설명하는 지역 스튜디오 자료 카드 |
| 가족 포즈 서브페이지 | `Visit Sweetlife Photography` | `https://sweetlifephotography.com.au/` | 리다이렉트되는 `/services` 페이지에서 이전 |
| 가족 포즈 서브페이지 | `View newborn session details` | `https://sweetlifephotography.com.au/newborn-photography-brisbane-north-lakes/` | 자연스러운 세션 상세 안내 |

현재 공개되는 Sweetlife 링크는 총 4개다. 홈페이지에 2개, 가족 포즈 서브페이지에 2개가 있으며, `/services`에서 노출되지 않던 기존 링크는 가족 포즈 서브페이지로 이전했다.

## 공신력 있는 외부 출처

6개 가이드에 총 10개의 참고 링크를 추가했다.

- eSafety Commissioner: 사진 공유 안전, 동의
- Copyright Agency: 이용 허가, 저작권 소유권
- Cancer Council Australia: 야외 촬영 시 자외선 보호
- Australian Photographic Society: 사진 관련 전문 자료
- LinkedIn Help 및 Adobe: 프로필·헤드샷 안내
- Instagram Help Centre: Insights 및 이미지 해상도 안내

출처는 각 가이드 본문 아래 `Sources and further reading` 영역에서 문맥에 맞게 표시된다.

## 주요 변경 파일

- `src/pages/Home.jsx`, `src/pages/Home.css`
- `src/data/newPoseBooks.js`
- `src/pages/VisualPoseBook.jsx`, `src/pages/CouplePoseBook.css`
- `src/pages/Services.jsx`
- `src/data/guideArticles.js`
- `src/pages/GuideArticle.jsx`, `src/pages/GuideArticle.css`

## 검증

- `npm run lint` 통과
- `npm run build` 통과
- 35개 인덱싱 경로와 `404.html` 프리렌더 완료
- 데스크톱·모바일에서 링크 영역 표시 및 가로 넘침 없음 확인
