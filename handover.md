# MyInsuranceCalc.com 인수인계 (2026-07-13 업데이트)

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
- **7/6 기준**: 245/250 색인 (99.2%), 미색인 2개: `states/workers-comp/nevada.html`, `states/home-insurance/new-york.html`
- **7/13 Coverage export 확인**: 리포트 내부 차트 데이터는 **6/30까지만 반영**(GSC 특유의 리포팅 지연, 보통 2주가량 걸림) — 245 색인, 미색인 2건("크롤링됨 - 현재 색인 생성되지 않음") 그대로 유지. **7/9경 완료된 renters/business-insurance state 100페이지 등 신규 350+페이지의 색인 진행 상황은 이번 리포트에 아직 안 잡힘 — 판단 불가, 다음 확인 때 다시 볼 것.**
- 이번 리포트에서 새로 보인 항목: "적절한 표준 태그가 포함된 대체 페이지" 1건 (유효성 검사 "시작되지 않음") — 어떤 URL인지 이번 export엔 없음(요약 카운트만 제공). 통상 canonical 지정된 중복/변형 URL로 정상 케이스일 가능성 높음. 다음 GSC 데이터 받을 때 개별 URL 리스트도 같이 있으면 확인.
- **여러 차례 재점검 완료** (technical audit): title/canonical/meta robots 정상, 내부링크 정상(고아페이지 아님), 콘텐츠 고유성 확인(thin content 아님, 단어수 오히려 평균 이상), sitemap priority/위치 정상, robots.txt 전체 허용 — **기술적 결함 전혀 없음**
- 가능성 있는 설명: 뉴욕/네바다는 고경쟁 상업 키워드라 구글이 색인 판단에 시간 더 씀 (와이오밍/버몬트 같은 저경쟁 주 대비)
- **확정 방침**: 이 2개는 손대지 않고 대기. **다음 색인 체크 때도 여전히 미색인이면 그때 진짜 보강 작업 들어감.** 그 전까진 절대 먼저 손대지 말 것.
- Coverage 리포트의 "noindex 태그로 제외됨 2건"은 `contact.html`/`privacy.html`이 의도적으로 `noindex, follow` 설정된 것 — **문제 아님, 정상.**

## ⚠️ 현재 최우선 방침: 신규 콘텐츠 전면 중단 (7/13 기준도 유지)
- **이유**: 사이트 페이지 수가 100→400+로 급증. 색인 245/250이었던 게 신규 350+페이지를 다 소화하려면 시간이 걸림. 신규를 계속 얹으면 크롤 우선순위가 분산될 수 있어 기존 페이지들부터 색인 완료시키는 게 우선.
- **7/13 재확인**: Coverage 리포트가 6/30까지만 반영돼 있어 신규 350+페이지의 색인 진행 상황을 아직 확인할 수 없음 → **모라토리엄 자동 연장, 재개 판단 보류.** 이번 세션에도 신규 콘텐츠는 전혀 진행 안 함, GSC 데이터 기반 기존 페이지 보강만 진행함(아래 참고).
- **적용 범위**: 신규 블로그, 신규 툴, 신규 state 카테고리/페이지 **전부 중단**.
- **예외**: 기존 페이지 보강(FAQ 추가, 문구 정밀매칭, 버그 수정)은 계속 진행 — 이건 "신규"가 아니라 "기존 자산 개선"이라 방침에 안 걸림.
- **재개 시점**: 사용자가 다음 Search Console 색인 커버리지 확인 후 "이제 신규 넣어도 된다"고 판단할 때. 먼저 나서서 신규 제안하지 말 것 — 물어보면 후보 리스트 정리는 해주되, 실행은 사용자 확인 후.

## 운영 방식 변경 (2026-07-11부터)
- **"자주 업데이트" 체제로 전환**: 기존엔 주간 세션(블로그3+툴1) 단위였는데, 이제는 필요할 때마다 자주 짧게 업데이트하는 방식.
- **주간작업과의 차이**: 애널리틱스(GA)는 주간 세션에서만 확인. 평소 업데이트는 GSC 데이터(Performance + Coverage export) 위주로 진행.
- **GSC 데이터 받는 방식**: 사용자가 GSC "내보내기" 기능으로 zip 파일(Performance-on-Search, Coverage) 업로드하거나, 스크린샷(검색어 수 탭)으로 제공. zip은 `unzip`으로 풀면 `차트.csv`, `검색어 수.csv`, `페이지.csv`, `국가.csv`, `기기.csv`, `필터.csv` 등 CSV 다수 포함됨 (한글 컬럼명: 클릭수/노출/게재 순위/인기 검색어/인기 페이지).
- **GSC 프라이버시 필터링 주의**: 쿼리 리포트(검색어 수.csv) 개별 클릭수 합계가 0이어도, 페이지 리포트(페이지.csv) 합계엔 실제 클릭이 잡힐 수 있음 (구글이 저볼륨 쿼리는 익명화). 오류 아니니 당황하지 말 것.

## 확정된 결정 사항 (재검토 완료, 다시 논의할 필요 없음)
- **백링크: 당분간 신규 작업 안 함**
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
- **다음 Search Console 색인 커버리지 확인 시**: 350+ 신규 페이지 색인 진행 상황 체크(7/13 기준 아직 데이터 지연으로 확인 불가). nevada/new-york 2개가 여전히 미색인이면 그때 실제 보강 착수(현재는 대기).
- 색인이 충분히 따라잡히면 신규 콘텐츠 재개 판단 (조건별 시리즈 3편 고혈압부터, 또는 니치 툴 후보부터)
- GSC 데이터(Performance/Coverage) 받을 때마다 정리→우선순위 매겨서 보강 진행하는 루틴 계속
- 남은 FAQ-less 7개 페이지는 노출량이 늘면 재검토 (현재 3~11회로 미미)

## 이번 세션(7/13) 전달 자료 참고
- GSC Performance export(3개월, 2026 4/13~7/12 누적), Coverage export(색인 상태, 6/30까지 반영), GA 개요 CSV(활성사용자/채널/국가, 최근 28일) 분석 완료.
- **핵심 발견**: 사이트 전체 클릭수 9회 / 노출 16,682회 (3개월 누적) — CTR 0.05% 수준. 상위 쿼리 게재순위가 대부분 50~90위(구글 5~9페이지)라 노출은 있어도 클릭은 거의 없는 상태. "life-insurance-after-cancer.html" 허브가 노출 5,022회로 압도적 1위지만 순위 63.78이라 클릭 0 — 콘텐츠 문제가 아니라 신생 사이트의 낮은 도메인 권위 문제로 판단(FAQ+스키마는 이미 완료된 페이지).
- 일별 노출 추이는 7월 들어 급증 중(7/6: 275 → 7/10: 998) — 신규 350+페이지가 크롤링되며 노출은 늘고 있는 것으로 보이나 아직 클릭 전환은 없음.
- 웹 검색으로 "car insurance" 계열 키워드 경쟁강도 확인: 범용 자동차보험 키워드는 난이도 80~90(업계 대형사 독점) 수준으로 매우 높음 — how-to-lower-car-insurance 같은 페이지가 순위 84에 머무는 것도 이 경쟁강도로 설명 가능. 장기전 필요, 단기 순위 상승 기대는 낮음.
- 원본 CSV는 재사용 안 해도 됨(이미 분석 반영 완료), 다음번엔 새로 받은 데이터로 분석.
