# MyInsuranceCalc.com 인수인계 (2026-07-15 업데이트)

## 사이트 기본
- GitHub Pages 정적 HTML, 영어권 글로벌 타겟
- 레포: `canghun13/myinsurancecalc-`
- GA: `G-TB2KNRH23W` / 애드센스: `pub-5592663499707350` (승인 재검토 대기 중)
- **작업 방식**: 사용자가 매 세션 GitHub Personal Access Token을 채팅으로 제공 → Claude가 레포 클론/pull → 직접 커밋+푸시. **더 이상 zip 전달 방식 아님.** 작업 끝나면 사용자가 토큰 revoke.
- 로컬 작업 경로: `/home/claude/work/repo` (컨테이너 리셋되면 새 세션에서 처음부터 클론 필요)

## 콘텐츠 규모 (2026-07-11 기준)
- 블로그 38개 / 툴 23개
- **States 카테고리 7개 × 50페이지 = 350페이지**: car-insurance, health-insurance, home-insurance, life-insurance, workers-comp, **renters-insurance(신규)**, **business-insurance(신규)**
- sitemap.xml 총 425개 URL
- 총 400페이지 이상 (전월 대비 대폭 증가 — renters/business state 100페이지 + 블로그/툴 다수 추가됨)

## 색인 현황 (중요 — 현재 최우선 이슈)
- **7/15 Coverage export 확인 — 데이터 지연 해소, 큰 진전 있음**: Coverage 차트가 이제 **7/10까지 반영**됨 (직전 세션의 6/30 지연 문제 해소). **색인 245 → 396으로 급증** (sitemap 총 425 URL 중 93%). 7/9~7/9경 완료된 renters/business-insurance state 350+ 신규 페이지가 실제로 빠르게 크롤링·색인되고 있음이 확인됨.
- **이슈 항목 5 → 30건으로 증가했지만 대부분 정상 범위**:
  - `크롤링됨 - 현재 색인 생성되지 않음`: 2건 → **5건**으로 증가 (nevada/new-york 기존 2건 + 신규 3건 추정, 이번 export엔 개별 URL 리스트 없어 특정 불가)
  - `발견됨 - 현재 색인이 생성되지 않음`(크롤 대기 중): **22건 신규 발생** — 신규 350+페이지 중 아직 크롤 큐에 있는 페이지들로 추정, 정상적인 신규 사이트 색인 지연 패턴
  - `NOINDEX 태그로 제외됨`: 2건 (contact/privacy, 의도적 설정, 문제 아님, 기존과 동일)
  - `적절한 표준 태그가 포함된 대체 페이지`: 1건 (유효성 검사 "시작되지 않음", 기존과 동일, 통상 canonical 정상 케이스)
- **판단**: 색인 진행 속도 자체는 양호(2주 내 150개 신규 색인). 다만 `크롤링됨-미색인` 5건과 `발견됨-미색인` 22건이 남아있어 완전히 소화됐다고 보기엔 이름. nevada/new-york이 여전히 미색인인지는 이번 export로 특정 불가(URL 리스트 없음) — **다음 export에 개별 URL 리스트가 포함되면 재확인**.
- 가능성 있는 설명: 뉴욕/네바다는 고경쟁 상업 키워드라 구글이 색인 판단에 시간 더 씀 (와이오밍/버몬트 같은 저경쟁 주 대비)
- **확정 방침 유지**: nevada/new-york 2개는 여전히 손대지 않고 대기. 신규 콘텐츠 모라토리엄도 **한 사이클 더 유지** — "발견됨-미색인" 22건이 아직 크롤 대기 중이라, 지금 새 페이지를 더 얹으면 크롤 우선순위가 다시 분산될 수 있음. 다음 GSC 체크에서 이 22건이 대부분 소화됐으면(즉 30건대에서 다시 한 자릿수로 줄면) 모라토리엄 해제 검토.

## ⚠️ 신규 콘텐츠 방침 (7/15 후반 세션에 일부 해제)
- **배경**: 사이트 페이지 수가 100→400+로 급증했던 이후 색인이 245→396(93%)까지 빠르게 회복됨. 사용자가 "색인 거의 다 나왔으니 신규를 조금씩이라도 하자"고 판단 지시 → **전면 모라토리엄 해제, 다만 대량 생성은 여전히 자제하고 소규모 확장 위주로 진행.**
- **7/15 후반 세션에 실행한 신규 콘텐츠**: 조건별 생명보험 시리즈 다음 순번인 고혈압(`life-insurance-with-high-blood-pressure.html`) 1건 작성 — 당뇨병/심장질환과 동일하게 검증된 템플릿 사용, 웹 검색으로 실제 언더라이팅 기준(Stage 1/2 혈압 기준치, table rating) 조사 반영. 경쟁강도는 policygenius/moneygeek 등 대형 사이트가 이미 다수 존재해 만만치 않지만, 기존 당뇨병/심장질환 페이지와 동일한 경쟁 티어이고 검증된 시리즈 패턴이라 진행. 블로그 인덱스/홈페이지 프리뷰/사이트맵/llms.txt/양방향 크로스링크(당뇨병↔심장질환↔고혈압) 전부 반영.
- **적용 범위**: 대량 신규 페이지 생성(예: state 카테고리 51개 일괄)은 여전히 신중 — 색인 여력을 다시 크게 늘리는 작업은 사용자 확인 후 진행. 개별 블로그 1~2건, 니치 툴 1~2건 수준의 소규모 확장은 이제 자유롭게 진행 가능.
- **다음 후보(순서대로)**: 조건별 시리즈 — 수면무호흡증 → 우울증/불안 → 비만. 니치 툴 — 콘도(HO-6)보험, 모바일홈보험, 결혼식보험, 귀중품보험, 최종비용보험, 소상공인 사이버보험, 중대질병보험.

## 운영 방식 변경 (2026-07-11부터)
- **"자주 업데이트" 체제로 전환**: 기존엔 주간 세션(블로그3+툴1) 단위였는데, 이제는 필요할 때마다 자주 짧게 업데이트하는 방식.
- **주간작업과의 차이**: 애널리틱스(GA)는 주간 세션에서만 확인. 평소 업데이트는 GSC 데이터(Performance + Coverage export) 위주로 진행.
- **GSC 데이터 받는 방식**: 사용자가 GSC "내보내기" 기능으로 zip 파일(Performance-on-Search, Coverage) 업로드하거나, 스크린샷(검색어 수 탭)으로 제공. zip은 `unzip`으로 풀면 `차트.csv`, `검색어 수.csv`, `페이지.csv`, `국가.csv`, `기기.csv`, `필터.csv` 등 CSV 다수 포함됨 (한글 컬럼명: 클릭수/노출/게재 순위/인기 검색어/인기 페이지).
- **GSC 프라이버시 필터링 주의**: 쿼리 리포트(검색어 수.csv) 개별 클릭수 합계가 0이어도, 페이지 리포트(페이지.csv) 합계엔 실제 클릭이 잡힐 수 있음 (구글이 저볼륨 쿼리는 익명화). 오류 아니니 당황하지 말 것.

## 확정된 결정 사항 (재검토 완료, 다시 논의할 필요 없음)
- **백링크: 사용자가 별도 채널(다른 사이트 70~90개)로 직접 충분히 확보 중 — Claude/이 세션 작업 범위 아님. 앞으로 백링크 관련 제안·언급 금지.**
- **E-E-A-T 저자/신뢰 신호: "MyInsuranceCalc Team" 조직명으로 통일, 실명·자격증·리뷰어(reviewedBy) 없음 — 없는 자격을 지어내지 않음. (7/15 작업 참고)**
  - **⚠️ 중요 — 오해 방지용 정정 (7/15)**: E-E-A-T author schema는 순위를 끌어올리는 주역이 아니라 "스팸/가짜 사이트가 아니다"를 확인해주는 보조 신호일 뿐. 실제 순위를 결정하는 핵심은 **롱테일/저경쟁 키워드 선택**(예: "car insurance" 같은 범용 키워드 난이도 80-90은 절대 안 건드리고, "life insurance after dui"·"life insurance for pilots"·주별 조합 같은 롱테일만 공략하는 기존 전략). 앞으로 E-E-A-T/스키마 작업을 "이걸 하면 순위가 오른다"는 식으로 제안하지 말 것 — 리스크 관리 차원으로만 언급.
- **PDF 다운로드 기능: 안 함**
- **renters-insurance by state (51페이지): 완료** (7/9경)
- **business-insurance by state (51페이지): 완료** — 소상공인 특화 앵글(주별 workers' comp 고용인원 기준, 독점주 4곳 ND/OH/WA/WY, 텍사스 옵트인 등 실제 규정 차별화)로 진행
- **용어사전(Glossary): 조건부 보류 유지** — thin content 우려, 사이트 신뢰도 더 쌓인 뒤 재검토
- **mywellnesscalc.com(건강/웰니스 계산기 사이트)과 교차 내부링크 작업 진행 중**:
  - mywellnesscalc.com → myinsurancecalc.com: bmi-calculator→life-insurance.html, body-fat-calculator→long-term-care-insurance.html (mywellnesscalc 쪽에서 이미 완료)
  - myinsurancecalc.com → mywellnesscalc.com: **완료** — tools/life-insurance.html, tools/long-term-care-insurance.html 사이드바에 각각 "Health & Wellness" 박스 추가하여 역링크 완료 (양방향 2쌍 완성)
  - 추가 교차링크 요청 오면 동일 패턴(`sidebar-box`, `target="_blank" rel="noopener"`)으로 진행

## 신규 콘텐츠 후보 리스트 (현재 전면 중단 상태 — 재개 시점에 참고용)
### 조건별 생명보험 시리즈 (cancer 시리즈 패턴 복제)
- 완료: 당뇨병(`life-insurance-with-diabetes.html`), 심장질환(`life-insurance-after-heart-disease.html`)
- 남은 순서: 고혈압 → 수면무호흡증 → 우울증/불안 → 비만

### 고위험 운전자 시리즈 (dui 패턴 복제)
- 아직 미착수: 사고 후 자동차보험, 과속딱지 후 자동차보험, 면허정지 후 자동차보험, 신규 10대 운전자
- 원래 계획: 7/20 dui 순위 변화 확인 후 착수 예정이었으나, 지금은 신규 전면 중단 방침에 따라 대기

### 니치 툴 후보
- 완료: GAP보험 계산기(`tools/gap-insurance.html`), 임대인보험 계산기(`tools/landlord-insurance.html`)
- 남은 후보: 콘도(HO-6)보험, 모바일홈보험, 결혼식보험, 귀중품보험, 최종비용보험, 소상공인 사이버보험, 중대질병보험

### state 후보
- 완료: renters-insurance, business-insurance (총 7개 카테고리)
- 추가 후보 딱히 논의된 것 없음 (필요시 재검토)

## 콘텐츠 구조 표준 (2026-07 기준 최신 패턴)
- **FAQ + FAQPage 스키마가 신규 표준**. 새 블로그 글은 반드시 FAQ 3개 이상 + `<script type="application/ld+json">` FAQPage 스키마 포함.
- **오래된 글(FAQ 없음) 리스트 — 7/13 기준 업데이트**: 12개 중 GSC 노출 상위 5개는 **7/13 세션에 전부 완료** (`how-to-lower-car-insurance.html`, `insurance-for-college-students.html`, `freelancer-insurance-guide.html`, `renters-insurance-for-college-students.html`, `umbrella-insurance-explained.html`). 남은 7개는 노출 미미(3~11회)해서 보류 중, GSC에서 노출 늘면 재검토:
  - `disability-insurance-guide.html`(7), `does-car-insurance-cover-ev-battery.html`(11), `ev-insurance-cost.html`(8), `how-much-life-insurance-do-i-need.html`(8), `life-insurance-for-remote-workers.html`(4), `pet-insurance-worth-it.html`(3), `term-vs-whole-life-insurance.html`(5)
- **cancer 시리즈(허브 포함 20개 글)는 전부 FAQ+스키마 완료** (2026-07-11에 일괄 작업). thyroid-cancer는 사이트 최대 쿼리 클러스터라 FAQ 5개로 확장돼있음(비용/구매처 앵글 포함).
- FAQ 섹션 위치 규칙: `<h2>Frequently Asked Questions</h2>` → 3개 이상 `<h3>질문</h3><p>답변</p>` → **disclaimer 문단(있는 경우) 앞에** 배치. (한 번 순서 꼬였던 적 있으니 새로 만들 때 유의)
- 사이드바는 `<aside>` (클래스 없음) 안에 `<div class="sidebar-box">` 여러 개. **`article-sidebar`나 `sidebar-section` 같은 클래스는 CSS에 정의 안 돼있어서 스타일 깨짐 — 절대 쓰지 말 것.** (실제로 brain/mesothelioma/pancreatic-cancer 3개 글에서 이 버그 있었고 수정함)

## 최근 대규모 작업 이력 (참고용, 재작업 불필요)
1. **renters-insurance by state 51페이지**: Python 데이터셋 스크립트로 생성, 주별 실제 리스크 티어(허리케인/토네이도/화재 등) + 크레딧스코어 금지주 등 실제 조사 데이터 반영
2. **당뇨병/심장질환 블로그**: 조건별 시리즈, FAQ+스키마 포함, 실제 언더라이팅 기준(A1C, 테이블 등급, Type1/2 구분 등) 조사 반영
3. **GAP보험/임대인보험 계산기**: 실제 amortization 공식+감가상각 곡선(GAP), DP-3 등급 구조(임대인) 반영, node로 수치 검증 완료
4. **business-insurance by state 51페이지**: 주별 workers' comp 임계값(실제 규정 조사: AL 5명, GA 3명, KS 급여기준, TX 옵트인, ND/OH/WA/WY 독점주 등)
5. **cancer 시리즈 17개 FAQ+스키마 일괄 추가**: 각 암종별 실제 임상 기준(병기/등급/바이오마커) 반영해서 개별 작성. 자동화 스크립트 버그로 FAQ 중복삽입 발생했다가 즉시 발견/수정한 이력 있음 (재발 방지: 대량 삽입 스크립트는 `str.find` 인덱스 기반으로, regex round-trip replace는 지양)
6. **사이트 전체 버그 수정**: 깨진 링크 100개(`/tools/disability-insurance.html`→`disability.html`), 사이드바 CSS 클래스 3개 파일
7. **GSC 데이터 기반 정밀 보강**: thyroid-cancer FAQ 확장, nurses/truck-drivers/teachers FAQ 신규, pilots 헬리콥터/초경량기 문구, term-vs-whole 문구매칭, workers-comp/iowa 문구보강
8. **(7/13) GSC 노출 상위 5개 FAQ-less 페이지 보강**: `how-to-lower-car-insurance.html`(FAQ는 이미 있었음, FAQPage 스키마만 추가), `insurance-for-college-students.html`(FAQ 5개+스키마 신규), `freelancer-insurance-guide.html`(FAQ 5개+스키마 신규 + 기존 div 태그 불균형 버그 수정), `renters-insurance-for-college-students.html`(FAQ 5개+스키마 신규), `umbrella-insurance-explained.html`(FAQ 5개+스키마 신규). 전부 GSC 노출량 순으로 우선순위 선정(1278/738/410/198/126회). 모든 페이지 JSON-LD 파싱 검증 + div 밸런스 확인 완료. 텍스트 추가만 있는 파일들이라 렌더링 확인용 URL 링크는 생략 가능한 수준이지만 아래에 제공함.
9. **(7/15) GSC 노출 상위 페이지 중 FAQ 없는 3개 페이지 보강**: `tools/health-insurance-self-employed.html`(FAQ 5개+스키마 신규, 노출 234회·순위 42.78), `tools/term-vs-whole.html`(FAQ 5개+스키마 신규, 노출 94회·"term vs whole life insurance calculator" 쿼리 순위 15.19로 top10 임박), `states/business-insurance/maine.html`(FAQ 4개+스키마 신규, 노출 100회·순위 27.39). 셋 다 tools/states 카테고리라 FAQ가 표준 패턴이 아니었지만(tools 24개 중 1개, business-insurance state 51개 중 0개), 노출량 기준 상위이면서 FAQ 없는 페이지만 선별 적용. 이미 FAQ+스키마가 있는 thyroid-cancer/dui/truck-drivers/nurses 등은 추가 조치 없음(순위 20~40대 정체는 콘텐츠가 아니라 도메인 권위 문제로 재확인). 모든 페이지 JSON-LD 파싱 검증(`json.loads`) + div 밸런스 확인 완료.
10. **(7/15) E-E-A-T 저자 신호 사이트 전체 일괄 추가**: blog/states 전 페이지(388개) Article schema에 `"author": {"@type":"Organization","name":"MyInsuranceCalc Team","url":"https://myinsurancecalc.com/about.html"}` 필드 삽입 (Python으로 JSON 파싱→author 키 삽입→재직렬화, 454개 ld+json 블록 전수 `json.loads` 검증 통과, 파싱 실패 0건). `about.html`에도 Organization schema 신규 추가. 실명/자격증/리뷰어(reviewedBy)는 넣지 않음 — 없는 자격을 지어내는 건 오히려 리스크라고 판단, 조직명(Organization) 신호로 통일. 시각적 바이라인(페이지에 "By MyInsuranceCalc Team" 텍스트 노출)은 이번엔 스키마만 처리, 필요시 다음 세션에 템플릿 레벨로 검토.
11. **(7/15 후반) 미색인 원인 조사 + 기술적 버그 수정**: 사용자가 "미색인 페이지 이유가 있을 것" 지적 → 조사 결과 두 가지 실제 기술 문제 발견 및 수정.
    - **깨진 내부링크 100개 발견/수정**: `states/health-insurance/*.html`, `states/workers-comp/*.html` 전체(51개씩)에 존재하지 않는 `/blog/health-insurance-for-freelancers.html`로의 링크가 있었음(원래 그런 페이지가 만들어진 적 없음). 실제로 존재하는 `/tools/health-insurance-self-employed.html`로 전체 일괄 치환.
    - **div 태그 불균형 버그 4건 발견/수정**: `blog/pet-insurance-worth-it.html`, `blog/how-much-life-insurance-do-i-need.html`, `tools/ev-insurance.html`에서 `</article>` 또는 다음 섹션 앞에 불필요한 `</div>` 하나가 더 있던 사전 존재 버그(이번 세션 작업과 무관, 이전부터 있던 문제) 3건 발견 수정 + 이번 세션 중 Claude가 직접 실수로 만든 `blog/life-insurance-with-diabetes.html` 중복 `</div>` 1건도 같은 스캔으로 발견 즉시 수정. Python으로 전체 사이트 div open/close 스택 트레이스 스캔 방법 사용(재사용 가능, 아래 작업 규칙 참고).
    - **미색인 의심 페이지(nevada workers-comp, new-york home-insurance) + 고노출·FAQ없음 페이지(utah/iowa workers-comp) 4곳에 FAQ 4개+스키마 추가**: workers-comp 카테고리는 51개 전체가 FAQ 0개였고, state 페이지 간 텍스트 유사도가 약 63%(nevada vs wyoming 비교)로 근접 중복 콘텐츠에 가까웠던 것도 확인 — 색인 지연의 개연성 있는 원인으로 판단, 우선 고노출/미색인 의심 4곳부터 차별화 콘텐츠 보강.
    - **전체 사이트 최종 검증**: ld+json 463개 블록 전수 파싱 통과, div open/close 불일치 0건으로 마무리.
12. **(7/15 후반) 신규 콘텐츠 재개 — 고혈압 생명보험 시리즈 3번째 글 작성**: `blog/life-insurance-with-high-blood-pressure.html` 신규 작성(당뇨병/심장질환과 동일 템플릿, FAQ 5개+스키마 포함). 웹 검색으로 실제 언더라이팅 기준 조사(Stage 1: 130-139/80-89, Stage 2: 140+/90+, table rating 2-4 등). 당뇨병/심장질환 페이지에 양방향 크로스링크 추가(본문+사이드바), `blog/index.html`·`index.html`(홈페이지 최신글 3개 갱신, mesothelioma를 밀어내고 신규 추가)·`sitemap.xml`(XML 유효성 검증 완료)·`llms.txt` 전부 반영.

## 작업 규칙 (변동 없음 + 추가)
- 블로그/툴 추가 시 체크리스트 필수: `blog/index.html` 또는 `tools/index.html` 카드 추가, 메인 `index.html`(최신글/최신툴 섹션 — "New" 배지는 최신 것 하나로 이동) 반영, `sitemap.xml` 추가(XML 유효성 `python3 -c "import xml.dom.minidom as m; m.parse('sitemap.xml')"`로 검증), `llms.txt` 반영
- 시리즈 콘텐츠는 기존 글 사이드바 + 허브 페이지 동시 업데이트 (상호링크)
- 파일 전달: **git commit + push 직접** (zip 아님). 커밋 메시지에 어떤 파일을 왜 수정했는지 남길 것
- 콘텐츠 800단어 이상, 수치는 estimated/typically 표현, 면책 조항 필수
- **품질 최우선 원칙 (사용자 명시)**: "가치없는 콘텐츠 절대 안 됨" — state 페이지 등 대량 생성 시 실제 조사한 차별화 데이터 필수, 단순 템플릿 복붙 금지
- 트래픽 판단 기준: Organic Search만 (Direct 무의미)
- state 페이지처럼 검증된 템플릿 복제 작업은 한 번에 몰아서 진행 가능
- **JSON-LD 스키마 수정/추가할 때마다 반드시 Python으로 파싱 검증**: `re.findall`로 스키마 블록 추출 후 `json.loads`로 유효성 확인
- **대량 자동화 스크립트 작업 후에는 div/script 태그 밸런스 카운트 확인** (`grep -o "<div" | wc -l` vs `</div>`)
- **화면 렌더링 확인은 Claude가 못 함 — 구조 변경(새 섹션, 스키마, CSS 클래스 등) 있는 파일은 반드시 실제 URL(`https://myinsurancecalc.com/...`)을 링크로 제공해서 사용자가 직접 확인하도록 할 것**. 단순 텍스트/문구 추가만 있는 파일은 태그 밸런스 검증으로 충분.

## 다음 확인 시점
- **다음 Coverage export 확인 시**: "발견됨-미색인" 22건이 얼마나 줄었는지, nevada/new-york/utah/iowa 4곳에 추가한 FAQ가 색인·순위에 영향 있었는지 확인. workers-comp 카테고리 전체(51개)의 텍스트 유사도가 높은 편이라(63%대), 색인이 계속 정체되면 workers-comp 카테고리 전반에 FAQ를 더 확대하는 것도 고려.
- **깨진 링크(100개)/div 버그(4개) 수정이 색인·크롤에 영향 있었는지도 다음 체크 때 참고** — 기술적 원인이었다면 이번 수정 이후 개선 신호가 보일 것.
- 신규 콘텐츠는 이제 소규모로 자유롭게 진행 가능(위 "신규 콘텐츠 방침" 참고) — 다음 후보는 수면무호흡증(조건별 시리즈) 또는 니치 툴 중 택1
- GSC 데이터(Performance/Coverage) 받을 때마다 정리→우선순위 매겨서 보강 진행하는 루틴 계속
- 남은 FAQ-less 7개 블로그 페이지는 노출량이 늘면 재검토 (7/15 기준도 대부분 3~18회로 여전히 미미, `does-car-insurance-cover-ev-battery`만 11→18회로 소폭 증가)
- `tools/ev-insurance.html`(순위 10.57, 클릭 3), `tools/sr22-insurance.html`(순위 12.96, 클릭 1), `tools/freelancer-insurance.html`(순위 8.5, 클릭 1) 등은 FAQ 없이도 이미 top-15에서 실클릭 발생 중 — tools 페이지는 계산기 자체의 검색의도 매칭이 FAQ보다 중요한 것으로 보임, 참고만 하고 손대지 않음
- **전체 사이트 div 태그 밸런스 스캔 스크립트를 다음에도 재사용할 것** — 정규식으로 `<div>`/`</div>` 토큰을 순서대로 훑어 depth가 음수가 되거나 파일 끝에 0이 아니면 정확한 라인 번호로 원인 위치를 잡아낼 수 있음(단순 개수 비교보다 정확).

## 이번 세션(7/15) 전달 자료 참고
- GSC Performance export(3개월, 2026 4/15~7/14 누적), Coverage export(색인 상태, **7/10까지 반영**—직전 6/30 지연 해소) 분석 완료.
- **핵심 발견 1 (색인)**: 색인 245→396(93%)로 급증, 신규 350+페이지가 실제로 빠르게 크롤링·색인되고 있음 확인. "발견됨-미색인" 22건, "크롤링됨-미색인" 5건은 남아있음 — 후반 세션에서 실제 기술적 원인(깨진 링크 100개, workers-comp 카테고리 콘텐츠 유사도 63%대) 조사 및 수정 진행.
- **핵심 발견 2 (트래픽)**: 사이트 전체 클릭 10회 / 노출 18,672회 (3개월 누적, 직전 세션 대비 클릭 +1·노출 +1,990) — CTR 여전히 0.05% 수준, 큰 변화 없음. 다만 페이지별로 보면 `tools/ev-insurance.html`(순위 10.57)·`tools/sr22-insurance.html`(순위 12.96)·`blog/life-insurance-after-colon-cancer.html`(순위 13.5) 등 상위 10~15위권 페이지에서는 실제 클릭이 발생 중 — 순위가 15위 안쪽으로 들어오면 클릭 전환이 시작된다는 패턴 재확인.
- **핵심 발견 3 (키워드 갭 스캔)**: 검색어 260개+ 전수 확인, 새로운 토픽 클러스터는 없었음(전부 기존 페이지가 이미 타겟팅). 다만 사용자 지시로 모라토리엄은 해제, 기존 확정 후보(조건별 시리즈 등) 순서대로 재개.
- **이번 세션 실행 작업 총정리**: (1) FAQ+스키마 보강 7개 페이지(self-employed 건강보험 툴, term-vs-whole 툴, maine 사업자보험, nevada/utah/iowa workers-comp, new-york 주택보험), (2) E-E-A-T author 스키마 388개 페이지 일괄 추가 + about.html Organization 스키마, (3) 깨진 링크 100개 수정, (4) div 태그 불균형 버그 4개 수정, (5) 신규 블로그 1건(고혈압 생명보험) 작성 및 전체 연동(사이트맵/llms.txt/블로그인덱스/홈페이지/크로스링크). 사이트 전체 ld+json 463개 블록 파싱 검증 + div 밸런스 검증 완료.
- 원본 CSV는 재사용 안 해도 됨(이미 분석 반영 완료), 다음번엔 새로 받은 데이터로 분석.
