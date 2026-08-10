# MyInsuranceCalc.com 인수인계 (2026-08-10 업데이트, 10회차 — 주간 정기작업)

## 🔗 확인 필요 (8/10)
- [ ] https://myinsurancecalc.com/states/business-insurance/maine.html (GL 비용 비교표 신규 — 표 렌더링/반응형 확인)
- [ ] https://myinsurancecalc.com/states/business-insurance/vermont.html (동일 비교표)
- [ ] https://myinsurancecalc.com/blog/life-insurance-after-dui.html (DUI 비용 추정표 신규 — 8행 표 모바일 확인)
- [ ] https://myinsurancecalc.com/states/health-insurance/virginia.html (전 state 350페이지에 들어간 "All Virginia Insurance Guides" 블록 샘플)
- [ ] https://myinsurancecalc.com/blog/life-insurance-for-nurses.html (텍스트 추가만, 낮은 우선순위)

## ✅ 이번 세션(8/10) GSC/GA 분석 요약

**P0(noindex↔sitemap 충돌) 완료 확인**: privacy/contact의 noindex 메타 제거됨(레포 전체 noindex 0건). 8/3 지시사항 해소 완료.

**트래픽**: 3개월 노출 29,665 → **31,946**(+7.7%), 클릭 12 → **13**. 기기별 데스크톱 7 / 모바일 6 / 태블릿 0.
- **주간 노출 추세(중요, 8/3 플래그 후속)**: 5,824(7/13주, 피크) → 3,448 → 2,208 → **2,023(8/3~8/9)**. 하락은 멈추고 **주 2,000선에서 안정화**. 다만 6월 베이스라인(주 1,200~2,200)과 같은 수준으로 되돌아온 것 — 즉 7월 초의 급등은 신생 사이트 디스커버리 부스트였고 소멸이 확정됐다고 봐야 한다. 평균 순위도 60→68~72로 악화 상태 유지. **"회복"은 오지 않았다. 다음 export에서도 2,000선이면 이게 새 기준선이니 그렇게 놓고 판단할 것.**

**색인(⚠️ 퇴행)**: 8/3에 0건이던 "발견됨-현재 색인 생성되지 않음"이 **21건으로 재발**. 21건은 7/25경부터 21로 고정(차트 평탄) — 신규 발생이 아니라 한 배치가 계속 대기 중인 상태.
- **원인 규명(이번 세션 핵심 발견)**: 21개 URL의 공통점은 콘텐츠 품질이 아니라 **내부 인바운드 링크 수가 사이트 최저군(2~4개)**이라는 것. 특히 `tools/long-term-care-insurance.html`은 인바운드 **1개**(tools/index뿐)로 사실상 고아 페이지였다. 사이트 전체 링크그래프를 만들어 확인한 결과 미색인 21건이 정확히 하위군에 몰려 있었음.
- **조치**: states 350페이지 전체에 "All {State} Insurance Guides"(동일 주의 나머지 6개 카테고리 링크) 블록 삽입 → 미색인 state 20곳 인바운드 **2~4 → 7**. long-term-care는 사이드바 링크 3건 추가.
- **다음 export 필수 확인**: 21건이 실제로 줄었는지. 줄었다면 "미색인 = 내부링크 부족" 가설이 검증되는 것이고, 앞으로 신규 페이지는 만들 때부터 인바운드 5개 이상을 기본으로 깔아야 한다는 규칙이 확정된다.

**GA4(7/13~8/9, 28일)**: 활성사용자 **123**(전기간 116), 신규 123, 이벤트 891, 참여시간 37.5초(50초→37.5초로 악화). 홈페이지 이탈률 **79.2%**(81%→79%, 여전히 구조적 이탈 지점 — 4세션 연속 확인).
- **유입 구조 변화(주목)**: direct 85명(비중 69%로 하락, 이전 85~87%) / **bing 13 + yahoo 7 + duckduckgo 3 + google 3 + search.google.com referral 12 = 실질 검색 38세션**. 즉 **오가닉 비중이 실제로 오르고 있다.** 그리고 **Bing+Yahoo(20)가 Google(15)보다 많다** — 우리 순위대(60~70위)에서는 빙 계열이 더 관대하다는 뜻. 콘텐츠 기획 시 참고.
- **AI 어시스턴트 경유 8세션**(copilot 6, perplexity 2) — 전체의 약 6%. llms.txt 유지할 가치 있음.

**카테고리별 효율(노출/페이지)**:
| 카테고리 | 노출 | 페이지 | 페이지당 | 클릭 |
|---|---|---|---|---|
| blog | 14,455 | 50 | 289 | 4 |
| **tools** | **6,638** | 31 | **214** | **7** |
| states/workers-comp | 4,511 | 44 | 103 | 1 |
| states/business-insurance | 3,725 | 49 | 76 | 1 |
| states/renters-insurance | 1,676 | 51 | 33 | 0 |
| states/car·health·home | 1,138 | 85 | 13 | 0 |
| states/life-insurance | 58 | 22 | 3 | 0 |
→ **tools가 노출 +32%로 최고 성장, 그리고 클릭 전환율이 blog의 약 4배**(tools CTR 0.105% vs blog 0.028%). **계산기 포맷이 실제로 클릭을 만든다**는 게 이번 데이터로 확인됨. 신규 콘텐츠 판단 시 "블로그 vs 계산기" 갈림길에서는 계산기 쪽에 가중치를 둘 것.

**8/3 신규분 색인/성과 확인**:
- `tools/table-rating-calculator.html` → 노출 13, 순위 **38.9**. 7일 만에 색인+노출, 정상 출발.
- `blog/life-insurance-for-helicopter-pilots.html` → 노출 6, 순위 **22.2**. 신규 페이지치고 순위 매우 양호.
- `blog/life-insurance-for-private-pilots.html` → **노출 0, 미색인 21건에 포함**. 파일럿 분화 3분의 1이 아직 안 잡힘. 다음 export에서 재확인.
- `blog/life-insurance-after-thyroid-cancer.html`(8/3 확장) → 페이지 노출 486, 순위 **27.1**. 단 쿼리별 수치는 8/3과 거의 동일(3개월 평균이라 7일치가 희석됨) — **확장 효과 판정은 다음 export로 미룰 것. 이번 데이터로 성공/실패 결론 내리지 말 것.**

## 🎯 이번 세션 실행 내역 (커밋 `0dffc93`)
1. **내부링크 구조 개선** — states 350페이지 동일주 상호링크 블록 + long-term-care 고아 해소. (위 색인 항목 참고)
2. **`blog/life-insurance-after-dui.html` 확장** — 235노출@24.8로 **사이트 최대 striking distance 클러스터**. 경쟁자 재확인(PinnacleQuote/DiversifiedQuotes/BestLifeQuote/TermInsuranceBrokers + 로펌블로그 — NerdWallet·Forbes급 없음, thyroid와 동일한 저~중경쟁 구조). 경쟁자에게 없는 것 = **실제 달러 금액**. 우리는 8/3에 만든 table-rating-calculator가 있으므로 그 공식과 수치를 일치시킨 월납 추정표(경과연수별 Table등급 + flat extra)를 넣었다. + "어느 보험사가 관대한가"(구매처 인텐트) 섹션. FAQ 5→7.
3. **`blog/life-insurance-for-nurses.html` 확장**(1,106→2,053단어) — 86노출@27. 웹서치로 확보한 차별화 소재: 트래블너스 에이전시 단체보험($10~50K, 계약종료 시 실효), CRNA/AANA 협회플랜, 플라이트너스 항공노출 언더라이팅, 니들스틱은 사실상 무영향, 퇴사 시 conversion/portability 31일 창구.
4. **`states/business-insurance/{maine,vermont}.html` 확장**(467노출@25~31, 각 881→1,497/1,249단어) — GL 실제 비용 비교표(ME $112 / VT $122 / NH $135 / MA $169 / 전국 $123, 2026 기준), 계약상 요구한도·추가피보험자 설명, Maine 2026 워커스컴프 -9.6% 인하 vs 겨울폭풍·연안홍수發 재물보험 경화, Vermont 시즈널 사업중단 특약.
5. **검증**: 447파일 / ld+json 644블록 파싱 실패 0, div 밸런스 0, 깨진 내부링크 0, sitemap 446 URL 유효.

## 📊 이번 세션 키워드 리서치 결과 (다음 세션에서 재활용할 것)

**striking distance(8~32위) 전체 풀 = 31쿼리 / 1,031노출.** 이게 현재 우리가 현실적으로 클릭으로 바꿀 수 있는 전부다. 규모가 작다는 걸 직시할 것.
| 클러스터 | 노출 | 순위 | 이번 세션 처리 |
|---|---|---|---|
| DUI 생명보험 | 235 | 24.8 | ✅ 확장 |
| Maine 소상공인보험 | 237 | 25.4 | ✅ 확장 |
| Vermont 소상공인보험 | 230 | 30.6 | ✅ 확장 |
| 파일럿(term/airline) | 89 | 31.2 | 8/3 분화 완료, 대기 |
| 간호사 생명보험 | 86 | 27.6 | ✅ 확장 |
| 갑상선암 | 773 | 27~45 | 8/3 확장, 판정 대기 |
| EMR/사우스캐롤라이나 | 38 | **14.2** | 사이트 최고 순위 — 무보강 |
| term vs whole 계산기 | 44 | 17.8~21.8 | 미착수(다음 후보) |
| 방광암/신장암 생명보험 | 41 | 20~24 | 미착수 |

**❌ 이번에 경쟁강도 조사 후 기각한 것**:
- **General Liability 계산기 신규 제작 → 기각.** 우리 GSC에 GL 계산기 인텐트 쿼리가 166노출(순위 85~92) 있어서 후보로 검토했으나, 웹서치 결과 **MoneyGeek(전국+50개주 각각 별도 계산기 페이지 보유), NEXT Insurance(보험사 직영), TechInsurance, Insureon, ConstructionCoverage, blakeinsurancegroup**까지 전부 계산기를 이미 갖고 있음. 우리가 본 계산기 니치 중 **가장 포화된 시장**. 다시 검토하지 말 것.
- 자체 계산기가 있는 head 계산기 키워드(dwelling coverage 265노출@68.8, homeowners how-much 231@88.9, motorcycle 클러스터 ~673@55~93, flood ~384@57~93, condo 118@68, umbrella 117@75.7)는 전부 노출은 크나 순위 60~90. **콘텐츠 부재가 아니라 도메인 권위 문제**이므로 신규 페이지로 대응할 수 없음. 착각하지 말 것.

**🔍 다음 세션 신규 후보(미조사 — 경쟁강도 확인부터 할 것)**:
- **"general liability insurance [state]" 클러스터** — 12개 주에서 총 ~330노출(vermont 53@71, maine 39@57, delaware 37@79, montana 26@88.5, mississippi 23@60, kansas 22@85, rhode-island 20@66, alaska 17@82, indiana 12@61, north-dakota 10@77 등) + "kentucky minimum general liability" 단일 쿼리 **101노출@75.7**. 이번에 Maine/Vermont에만 GL 섹션을 넣었으니, **효과 확인 후 나머지 주로 확대할지 결정**. 확대한다면 신규 페이지가 아니라 기존 business-insurance state 페이지 보강 방식(이번과 동일).
- **미용실 업종 니치** — "kentucky hair salon insurance" 17@39.1, "south dakota hair salon insurance" 9@42.3. 볼륨 26으로 여전히 전용 페이지 정당화 안 됨. 계속 모니터링만.
- **STD/LTD 분화** — "short term disability premium calculator" 15@58.7, "long term disability insurance cost calculator" 20@56.2 등. tools/disability.html 단일 페이지가 250노출을 얇게 받고 있음(순위 50대). 파일럿 분화와 같은 패턴 적용 가능성 있으나 볼륨이 작아 우선순위 낮음.

## 💰 수익화 판단 (8/10 갱신)
8/3의 결론(**제휴 > 애드센스**)은 그대로 유효. 추가된 근거와 수정사항:
- **tools가 blog 대비 클릭 전환 4배**라는 게 이번에 확인됐다. 제휴 CTA를 붙일 때 **블로그 본문보다 계산기 결과 카드 하단**이 우선이라는 8/3 원칙이 데이터로 뒷받침됨.
- 다만 **클릭 13회/3개월**이라는 절대량은 여전히 병목. 제휴 가입(Hiscox/CJ, Lemonade/Impact)은 지금 넣어도 손해는 없지만 수익은 0에 수렴한다. **P1~P3(순위 밀어올리기)이 여전히 선행조건**이라는 판단 유지.
- **트래픽 성장이 멈췄다는 점은 솔직히 인지할 것.** 주간 노출이 6월 수준으로 회귀했고 신규 페이지 투입이 총량을 밀어올리지 못하고 있다. 1년 수익화 데드라인 관점에서, **다음 2~3세션 안에 클릭이 13→30 수준으로 못 올라가면 "콘텐츠를 더 만든다" 전략 자체를 재검토해야 한다**(도메인 권위가 병목이면 콘텐츠 추가는 한계수익 체감).

## 🎯 다음 작업 우선순위 (8/10 확정)
**P0. 다음 Coverage export에서 "발견됨-미색인 21건"이 줄었는지 확인.** 이게 이번 세션 최대 가설의 검증 지점. 줄었으면 → 신규 페이지 제작 시 인바운드 링크 5개 이상 확보를 표준 절차로 확정. 안 줄었으면 → 색인 문제는 내부링크가 아니라 도메인 크롤 예산 문제이므로 다른 접근 필요.

**P1. 이번 확장 4페이지(DUI/nurses/maine/vermont) 순위 변화 확인.** 특히 DUI(24.8)와 Maine(25.4)이 20위 안쪽으로 들어오는지. thyroid(8/3 확장분) 판정도 이때 함께.

**P2. GL 섹션 나머지 주 확대 여부 결정** — 위 "다음 세션 신규 후보" 참고. Maine/Vermont 효과 확인 후.

**P3. 신규 계산기 1건** — tools 카테고리가 클릭 전환 4배라는 근거로 신규는 계산기 쪽에 배분. 단 **니치 선정 기준 2개(①실제 검색 수요 있음 ②웹서치로 계산기 보유 경쟁자 3곳 이하)를 반드시 둘 다 통과**시킬 것. GL 계산기는 ②에서 탈락했다.

**❌ 하지 말 것(유지)**: state FAQ 잔여분 완결(renters 9, workers-comp 20), states/life-insurance 보강(3개월 노출 58, 페이지당 3), 검색 수요 미확인 니치 툴, **GL 계산기 신규 제작**, Ezoic 재검토.

# MyInsuranceCalc.com 인수인계 (2026-08-03 업데이트, 9회차 — 주간 정기작업 / Opus 분석세션)

## 🔴 수익화 정책 (사용자 지시, 2026-08-03 — 이후 모든 세션에 항구 적용)
1. **우리는 구글 애드센스에 의존하지 않는다.** 애드센스는 여러 수익화 옵션 중 하나일 뿐이다.
2. **돈이 되는 제휴/광고면 무엇이든 병행한다.** 제휴 마케팅, 리드젠, CPA, 대체 광고 네트워크 — 전략적으로 구분하거나 배제하지 않는다.
3. **애드센스 게시 탈락(반려) 시 재심사 여부는 Opus가 데이터를 보고 판단한다.** 다른 제휴사·광고사 가입/탈락도 동일하게 Opus가 판단한다. 사용자에게 매번 확인받지 않는다.
4. **애드센스보다 다른 제휴/광고가 이득이라고 판단되면, 그 방향을 사용자에게 명시적으로 추천할 것.** 판단 근거(트래픽 구조, 인텐트, 예상 RPM/리드단가)를 함께 제시한다.

## 💰 수익화 판단 (2026-08-03, Opus 결론) — **제휴 > 애드센스**
**결론: 현재 이 사이트에서 애드센스는 수익 기여도가 사실상 0이며, 리드젠 제휴가 최소 100배 이상 유리하다. 애드센스 재심사는 "비용 0"이라 병행하되, 리소스는 제휴 쪽에 배분할 것을 추천한다.**

근거:
- 3개월 총 클릭 12회. 보험 버티컬 애드센스 RPM을 넉넉히 $15로 잡아도 **3개월 수익 ≈ $0.05**. 애드센스 승인 여부는 현재 수익에 유의미한 영향이 없다.
- 반면 보험 리드젠 제휴는 **리드 1건당 $10~$150** (완료 견적/신청 기준). 우리 트래픽은 극도로 고인텐트(암 생존자 생명보험, SR-22/DUI, 워커스컴프, 소상공인 배상책임)라 방문자 1명의 기대가치가 디스플레이 광고 대비 압도적으로 높다. **월 3~5리드만 나와도 애드센스 1년치를 넘는다.**
- **⚠️ Ezoic은 완전히 제외됨(handover 6회차 기록 정정)**: 2026년 2월 19일부로 신규 가입 요건이 월 활성사용자 **250,000명**으로 상향됨. 우리(월 116명)와 자릿수가 다르다. 기존 가입자만 grandfathered. 이 옵션은 다시 검토하지 말 것.
- Mediavine 50k 세션 / Raptive 100k PV / Monumetric 10k PV — 전부 미달. 저트래픽 수용 네트워크(Newor Media 5k MAU, Adsterra 무제한)는 CPM이 낮고 UX를 훼손해 지금 단계에서 득보다 실.
- **애드센스 재심사는 지금 넣어도 된다고 판단** — 사유는 아래 "애드센스 재심사 판단" 참고. 단, 승인돼도 수익 기대치는 0에 가깝다는 점을 사용자가 알고 있어야 한다.

**클러스터별 제휴 매칭 (조사 결과, 아직 미실행 — 다음 세션 실행 후보)**
| 우리 콘텐츠 클러스터 | 3개월 노출 | 매칭 제휴 후보 | 비고 |
|---|---|---|---|
| 암/고위험 생명보험 | 6,618 | 임페어드리스크 전문 브로커, Policygenius | ⚠️ Ethos/Bestow/Haven Life는 고위험 인수 거절이라 **부적합** |
| 워커스컴프 | 3,286 | Hiscox(CJ, 견적완료당 $25), Next Insurance, Simply Business | 51개 주 페이지 + EMR계산기와 직결 |
| 소상공인/business | 2,228 | 동일(Hiscox/Next/Simply Business) | |
| 직업별(파일럿/간호사/트럭) | 2,182 | 생명보험 리드젠 | |
| 렌터스/펫 | 1,593 | Lemonade(Impact Radius, 완료 신청당 ~$35) | |
| 자동차/SR-22 | 2,122 | 자동차 비교 리드젠(SmartFinancial/Insurify류) | |

**전환 설계 원칙**: 우리는 계산기 사이트다. 배너보다 **"계산 결과 카드 하단 CTA"**가 자연스럽고 전환율이 높다. 제휴 도입 시 이 패턴을 우선 적용할 것.

## 🔴 애드센스 재심사 판단 (2026-08-03, Opus)
**"이제 넣을 때 됐다" — 재심사 제출 진행.** 근거: Coverage 지표가 결정적으로 개선됐다. 지난 세션들 내내 정체돼 있던 "발견됨-현재 색인 생성되지 않음 22건 / 크롤링됨-미색인 5건"이 **이번 export에서 둘 다 0건(통과)**으로 바뀌었고, **색인 생성된 페이지가 419개**다. 구글이 우리 콘텐츠를 색인할 가치가 있다고 판단했다는 뜻이며, 이는 "가치가 별로 없는 콘텐츠" 반려 사유에 대한 가장 강한 반증이다.
**단, 제출 전에 아래 P0 기술 이슈(noindex↔sitemap 충돌)를 먼저 고칠 것.**

## 📌 확인 필요 (8/3)
- [ ] https://myinsurancecalc.com/privacy.html (noindex 제거 후 정상 표시 확인)
- [ ] https://myinsurancecalc.com/contact.html (noindex 제거 후 정상 표시 확인)

## ✅ 이번 세션(8/3) GSC/GA 분석 요약
**색인(대폭 개선)**: 색인 생성됨 **419페이지**, 미색인 8. "발견됨-미색인" 22건과 "크롤링됨-미색인" 5건이 **전부 0으로 해소**(통과). 남은 심각한 문제 3종 — ①NOINDEX 태그로 제외 2페이지(**유효성 검사 실패**) ②404 3페이지 ③적절한 표준 태그가 포함된 대체 페이지 3페이지.
- **①의 원인 규명 완료**: `privacy.html`, `contact.html`이 `<meta name="robots" content="noindex, follow">`를 달고 있으면서 **동시에 sitemap.xml에 등록**돼 있음 → 구글에 "색인해라"와 "하지 마라"를 동시에 지시하는 모순. 유효성 검사가 계속 실패하는 이유. **noindex를 제거하는 방향으로 해결할 것**(privacy/contact는 색인되는 게 오히려 신뢰 신호이고, 애드센스 심사 시에도 유리).
- ②③은 사이트 내부 링크/사이트맵 전수 스캔 결과 깨진 링크 0건, sitemap 443 URL 전부 실존 확인 → 구글이 기억하는 과거 URL로 추정, 방치해도 무방.

**트래픽**: 3개월 누적 노출 27,578 → **29,665**(+7.6%), 클릭 11 → **12**. 기기별로 데스크톱 6클릭/모바일 6클릭. 국가는 미국 26,572노출(89%)로 타겟팅 정상.
- **⚠️ 주간 노출 급감 추세 포착**: 7/6~7/12 주 5,683 → 7/13~7/19 주 5,824(피크) → 7/20~7/26 주 3,448 → **7/27~8/2 주 1,907(피크 대비 -67%)**. 평균 순위도 59.6 → 69.9로 악화. 신생 사이트의 초기 디스커버리 부스트 소멸(전형적 패턴)일 가능성이 높지만, **다음 export에서 회복하지 않으면 별도 진단 필요**. 절대 놓치지 말 것.

**GA4(7/6~8/2, 28일)**: 활성사용자 116, 신규 117, 이벤트 926, 사용자당 평균 참여시간 50초. **홈페이지 이탈률 81.2%로 또 악화**(77% → 81%). 허브 페이지들은 0~14%로 여전히 양호 — 홈페이지 자체가 구조적 이탈 지점이라는 판단 3세션 연속 재확인.

**카테고리별 효율(노출/페이지수) — 전략 재조정 근거**:
| 카테고리 | 노출 | 페이지 | 페이지당 노출 | 평균순위 |
|---|---|---|---|---|
| blog | 14,100 | 49 | **288** | 44.5 |
| tools | 5,023 | 30 | 167 | 54.0 |
| states/workers-comp | 4,380 | 43 | 102 | 50.6 |
| states/business-insurance | 3,551 | 48 | 74 | 59.9 |
| states/renters-insurance | 1,637 | 51 | 32 | 73.8 |
| states/car·health·home | 1,109 | 80 | 14 | 63.7 |
| states/life-insurance | 43 | 21 | **2** | 17.7 |
→ **blog가 state 페이지 대비 페이지당 효율 4~140배.** state 페이지 FAQ 잔여분(renters 9곳, workers-comp 20곳) 완결 작업은 **ROI 최저이므로 중단 권장**. states/life-insurance는 순위 17.7로 좋아 보이지만 3개월 노출 43회(페이지당 2회)로 **수요 자체가 없음** — "다크호스" 가설은 이번 데이터로 기각. 더 이상 후보로 올리지 말 것.

**신규 콘텐츠 색인 확인(7/24·7/27 투입분)**: workers-comp-audit-guide 노출1(순위83), short-term-rental 19, does-homeowners-insurance-cover-airbnb 95, aircover 13 — 전부 색인은 됐으나 노출 미미. **teen-driver-insurance는 노출 0으로 아직 미노출.** 7/20 이후 신규 투입분 중 실질 성과를 낸 건 없음.

**⚠️ 중요 패턴 발견 — 니치 툴은 순위는 잡히나 검색량이 없다**: valuables-insurance 순위 **5.6**(노출14), mobile-home-insurance 순위 **8.8**(노출10), wedding-insurance 순위 **6.0**(노출2). **우리 도메인은 저경쟁 니치에서 실제로 TOP10을 잡을 능력이 있다**는 결정적 증거. 문제는 그동안 고른 니치의 **검색량이 0에 가까웠다**는 것. → **앞으로 신규 니치 선정 시 "경쟁강도 낮음"만 보지 말고 반드시 "실제 검색 수요가 있는가"를 함께 확인할 것.** 이게 이번 세션 최대 교훈.

## 🎯 다음 작업 우선순위 (수익화 관점, 8/3 확정)
클릭 12회가 병목이다. 수익화 수단을 늘리는 것보다 **이미 순위 15~50위에 올라 있는 롱테일 클러스터를 페이지1로 밀어올리는 것**이 유일하게 의미 있는 수익화 레버다. 아래 순서대로 진행.

**P0. noindex↔sitemap 충돌 해소** — privacy.html·contact.html의 noindex 메타 제거. 5분 작업, GSC 심각 오류 해소. 이후 애드센스 재심사 제출.

**P1. 갑상선암 클러스터 심화(기존 페이지 보강)** — `blog/life-insurance-after-thyroid-cancer.html`. 단일 페이지가 **25개 쿼리·767노출**을 받고 있는데 평균 순위 42, 본문 1,277단어로 얇다. 경쟁자는 RiskQuoter/PinnacleQuote/Abrams/SimpleLifeInsure 등 **소형 브로커 블로그뿐(NerdWallet·Forbes급 없음) — 저~중경쟁, 충분히 이길 수 있음**. 우리에게 없고 경쟁자에게 있는 것: ①실제 샘플 요율표(달러 금액) ②승인 사례(케이스 스터디) ③"어디서 사야 하나 / 누가 전문인가" 섹션. 쿼리 순위가 가장 나쁜 것들이 정확히 이 인텐트다: "where can i buy…"(51노출@45.0), "what will life insurance cost me after…"(46@48.8), "how to get…"(55@45.5). **신규 페이지 만들지 말고 기존 페이지를 2,500단어급으로 확장할 것**(카니발라이제이션 방지).

**P2. 파일럿 클러스터 분화(신규 2건)** — `blog/life-insurance-for-pilots.html` 1페이지가 **45개 쿼리·1,206노출**을 감당 중, 평균 순위 47.8. 특징: 헤드("life insurance for pilots" 237@58)보다 **세부 롱테일이 더 잘 나옴** — "term insurance for airline pilots" 89@**31.2**, "life insurance for private pilots" 39@38.1, "private pilot life insurance" 30@42.7, "life insurance for helicopter pilots" 24@42.1, "general aviation pilots" 23@40.0. 페이지가 얇게 퍼져 있다는 신호. → **①민간/일반항공(private·GA) 파일럿 전용, ②헬리콥터 파일럿 전용** 2개로 분화하고 기존 페이지는 항공사 파일럿 중심 허브로 재편 + 상호링크.

**P3. 신규 툴 `tools/table-rating-calculator.html`** — 웹서치 확인 결과 **table rating을 설명하는 글은 많지만 실제 계산기는 아무도 없음**(insurance.com·MoneyGeek·InsuranceGeek·DiversifiedQuotes 전부 산문 설명만). 우리의 검증된 "고경쟁 키워드 → 계산기 포맷 전환" 패턴에 정확히 부합. 공식은 공개돼 있고 단순함(Table당 Standard 대비 +25%, flat extra는 $1,000당 별도 가산). **전략적 가치가 특히 큰 이유: 암 20편 + 조건별 6편 + DUI + 파일럿 = 28개 블로그 전부와 자연스럽게 상호링크되는 허브가 되며, "what will it cost" 인텐트(암 클러스터 전반에 분포)의 착지 페이지가 된다.**

**P4. 제휴 프로그램 실제 가입 착수** — 위 표의 Hiscox(CJ)·Lemonade(Impact)부터. 단, P1~P3보다 후순위인 이유는 클릭이 없으면 제휴도 $0이기 때문.

**❌ 하지 말 것(ROI 최저, 명시적 보류)**: state FAQ 잔여분(renters-insurance 9곳, workers-comp 20곳) 완결, states/life-insurance FAQ 보강, 검색 수요 미확인 니치 툴 추가 생산.



# MyInsuranceCalc.com 인수인계 (2026-07-27 업데이트, 8회차 — 주간 정기작업)

## 📌 확인 필요 (7/27)
- [ ] https://myinsurancecalc.com/blog/workers-comp-audit-guide.html (신규 블로그 — 화면 깨짐 확인)
- [ ] https://myinsurancecalc.com/tools/emr-calculator.html (본문/사이드바에 감사가이드 링크 추가됨 — 정상 렌더링 확인)
- [ ] https://myinsurancecalc.com/tools/workers-comp.html (사이드바에 감사가이드 링크 추가됨)
- [ ] https://myinsurancecalc.com/states/renters-insurance/idaho.html (신규 FAQ 21개 주 중 최고노출 샘플)
- [ ] https://myinsurancecalc.com/states/business-insurance/texas.html (opt-in 특수케이스 FAQ 반영 샘플)

## ✅ 이번 세션(7/27) 요약
**GSC 분석**: 전체 노출 23,974→27,578(+15%), workers-comp/tools/business-insurance/car-insurance 카테고리 26~36% 증가 — 전반적으로 좋은 성장 흐름 지속. **EMR 콘텐츠가 실제 성과 확인**: "experience modification factor south carolina workers comp" 쿼리 노출 16→30(거의 2배), 순위 13.19→12.53 개선 — 지난 세션 EMR 계산기+SC 페이지 투자가 결실 보는 중. GA(신규 export)는 direct 트래픽 비중 여전히 크고 홈페이지 이탈률 계속 77%대(허브페이지는 0~8%로 양호) — 구조적 이슈 지속 확인만 하고 이번엔 콘텐츠 작업 우선.

**FAQ 보강**: renters-insurance 노출 상위 21개 주 신규(idaho/south-dakota/mississippi 등) + business-insurance 잔여 14개 주 신규 → **business-insurance 카테고리 51/51 완료**(텍사스 opt-in, 플로리다 건설업예외 특수처리). renters-insurance는 아직 9개 주 잔여(노출 매우 낮은 것들, texas/new-mexico/west-virginia/new-hampshire/kansas/connecticut/wyoming/new-york/montana) — 보류. workers-comp 잔여 20개 주도 노출 총 32로 미미해 보류.

**경쟁강도 조사 4건 (전부 보류)**: dog-bite liability(로펌SEO 고경쟁+사실관계 상충, 지난주 확인), e-bike보험(예상보다 붐빔), home warranty vs homeowners insurance(Bankrate/NerdWallet/Progressive 등 초포화), classic/collector car insurance(CalcBee가 이미 유사 계산기 보유, MoneyGeek 등도 커버).

**신규 채택**: `blog/workers-comp-audit-guide.html` — 워커스컴프 프리미엄 감사 대비 가이드. 경쟁자가 급여대행업체(Paycor/BlueWave HR)·소형 에이전시 블로그라 경쟁강도 낮음, 이미 성과 내는 EMR 콘텐츠와 자연스러운 클러스터(EMR계산기↔감사가이드↔workers-comp계산기 상호링크). Overtime straight-time 규칙, 하도급업체 COI 미비시 리스크, 오너/임원 exemption certificate 등 실용적 팩트 기반, 문제해결형 콘텐츠.

**검증**: 사이트 전체 444파일 ld+json 638블록 파싱 0건 실패, div 밸런스 0건 불일치, 내부링크 스캔 실제 깨짐 0건. 커밋 `d098eab`.

**다음 세션 참고**: renters-insurance 잔여 9개(노출 매우 낮음), workers-comp 잔여 20개(노출 32) 완결 여부는 다음 export에서 노출 변화 보고 재판단. workers-comp-audit-guide.html 색인/노출 여부 다음 GSC export에서 필수 확인.



## 📌 프로세스 규칙(7/24 추가): 작업 후 "확인 필요 링크"를 handover.md에 남길 것
채팅으로 링크 말해주는 것 말고, **작업 끝날 때마다 이 handover.md에 "사용자가 꼭 확인해야 할 페이지" 링크를 남겨둘 것.** 아래 각 세션 기록 바로 밑에 체크리스트 형태로 추가.

### 🔗 확인 필요 (7/24, 단기임대 클러스터)
- [ ] https://myinsurancecalc.com/tools/short-term-rental-insurance.html (신규 계산기 — 계산 버튼 동작 확인)
- [ ] https://myinsurancecalc.com/blog/does-homeowners-insurance-cover-airbnb.html (신규 블로그)
- [ ] https://myinsurancecalc.com/blog/aircover-vs-real-insurance.html (신규 블로그 — 비교표 반응형 확인)
- [ ] https://myinsurancecalc.com/tools/landlord-insurance.html (상호링크 추가된 기존 페이지)

## ✅ 신규 클러스터 추가(7/24) — 단기임대(Airbnb/VRBO) 보험
경쟁강도 조사(dog-bite liability는 로펌 SEO 고경쟁+소스간 사실관계 상충으로 위험 판단, e-bike보험도 예상보다 붐벼서 보류) 후 **단기임대 보험**으로 결정 — 경쟁자가 Forbes/NerdWallet급 대형미디어가 아니라 Steadily/Obie 같은 전문중개사·부동산블로그라 non-owner-SR22 때와 비슷한 경쟁강도, 기존 `tools/landlord-insurance.html` 인프라와 바로 클러스터 형성 가능.

신규 3건(계산기1+블로그2) + landlord-insurance 상호링크 + 체크리스트 전부 반영, 커밋 `9e08445`. 상세는 커밋 메시지 참고.

# MyInsuranceCalc.com 인수인계 (2026-07-24 업데이트, 6회차 — 사용자 지시사항/제약조건)

## ⚠️ 매우 중요 — 다음 세션 필독, 최우선 확인 사항

**1. 애드센스 재검토 프로세스: Claude가 데이터 보고 "이제 넣을 때 됐다"고 이야기하면, 그 자체가 진행 신호 — 그때 바로 진행한다.** 별도의 추가 확인 절차 없음. Claude가 지표를 계속 체크하다가 때가 됐다고 판단해서 말을 꺼내는 순간 = 진행. 지난 세션들에서 진행한 기술적 조치: ads.txt 생성, privacy.html 보강, state 350페이지 "How to Save" 팁 실제 차별화, tools 20개 FAQPage 신규 삽입, tools/term-vs-whole.html 레이아웃 버그 수정 — 이 정도면 "가치가 별로 없는 콘텐츠" 반려 사유는 상당 부분 해소됐다고 판단되나, **재검토 요청 자체는 아직 넣지 않은 상태**.

**2. 수익화 데드라인: 1년 내 실질적 수익화(애드센스든 다른 방식이든) 없으면 도메인/사이트 1년 연장이 어려울 수 있음.** 사용자가 명시적으로 밝힌 제약조건. 애드센스 하나에만 의존하지 말고 대안도 병행 검토할 것 — 특히 제휴(어필리에이트) 마케팅(보험사 리드 제휴 프로그램, Bankrate/NerdWallet류가 실제 주력으로 쓰는 방식)은 애드센스 승인과 무관하게 지금 바로 조사/시작 가능. 다음 세션에서 우선적으로 다룰 주제: (a) 보험 버티컬 제휴 프로그램 가입조건/RPM 조사, (b) 애드센스 대체/병행 가능한 광고 네트워크 조사(Ezoic 등, 단 트래픽 문턱 확인 필요), (c) 현재 트래픽 수준에서 현실적으로 가능한 수익화 우선순위 재정리.

## ⚠️⚠️ 매우 중요 — 애널리틱스(GA) 심층분석 결과, 우선순위 재검토 필요 (7/24 6회차 추가)
사용자가 "GSC만 보고 애널리틱스는 왜 제대로 안 보냐" 지적 → 첫 세션 때 받았던 GA CSV(6/22~7/19, 28일)를 이번에 제대로 분석. **결과가 지금까지의 전제를 흔드는 수준이라 최우선으로 기록.**

**핵심 발견**: 활성 사용자 119명(28일) 중 **첫 방문 유입원의 86.6%(103명)가 "(direct)/(none)"** — 출처를 알 수 없는 트래픽. 진짜 오가닉 검색 유입(google+bing organic)은 **딱 7명**. GSC의 3개월 클릭 11회와 대략 정합. 나머지는:
- foundrlist/findly.tools/newtool.site 등 메이커 런칭 디렉토리 유입 5명 (KittyLaunch 런칭 관련으로 추정)
- chatgpt.com/copilot.com/perplexity AI 어시스턴트 경유 4명
- **도시별 1위가 이스탄불 27명(전체의 23%)** — 미국 보험 콘텐츠 사이트치고 비정상적 비중, 봇/크롤러 가능성
- 세션 소스에 `ahrefs.com/referral` 8건 — SEO 크롤러 트래픽으로 사람 아님
- 활성 사용자당 평균 참여시간 53초, 신규사용자 비율 118/119(99%, 재방문자 사실상 없음)
- 홈페이지 이탈률 72%(반면 blog/states/tools 허브 페이지는 7~13%로 양호 — 홈페이지 자체가 이탈 지점)

**⚠️ 정정(같은 날, 사용자가 직접 지적)**: 위 "오가닉 7명이라 사실상 없다"는 판단은 틀렸음 — 개별소스 표만 보고 잘못 합산한 것. 채널 그룹 기준(지난 28일) 재확인 결과 **Organic Search 26세션(전주 대비 +766.7%, 뚜렷한 증가 추세)**, Direct 99(-19.5%, 감소 중), Referral 8(-69.2%), Unassigned 5, AI Assistant 2 — 실제로는 오가닉이 늘고 direct가 줄어드는 긍정적 추세였음. 아래 "함의"와 "다음 세션 필수 작업" 문단은 이 정정 이전에 쓴 것이라 과장된 비관론이니 참고 시 감안할 것.

**사용자 지시(7/24)**: (1) 애드센스 재검토는 데이터 보고 Claude가 "이제 넣을 때다"라고 말하는 순간 그 자체가 진행 신호 — 별도 확인 절차 없이 그때 바로 진행. (2) 애드센스/제휴 마케팅을 전략적으로 구분하지 말 것 — 돈 되는 방법이면 뭐든 병행 진행. (3) 요청받지 않은 분석/작업을 세션 중간에 스스로 벌이지 말 것 — 다음 정기 세션(주간 작업) 때 필요한 것만 처리, 토큰 낭비 금지.

**함의**: 지금까지 "콘텐츠 고치면 애드센스 승인 → 트래픽 쌓이면 수익화" 프레임으로 접근했으나, **실제로는 진짜 오가닉 방문자가 28일간 7명 수준**이라 애드센스 승인 자체가 수익화의 병목이 아닐 수 있음 — **"진짜 사람이 이 사이트에 거의 안 온다"는 게 더 근본적인 문제.** 1년 수익화 데드라인 앞에서 우선순위를 "콘텐츠 품질/애드센스 승인"에서 "실질 오가닉 트래픽 확보"로 재조정할 필요 있음을 인지할 것.

**다음 세션 필수 작업**: 
1. GSC+GA 교차분석으로 실제 클릭이 발생하는 롱테일 페이지 패턴 재확인 (어떤 유형 콘텐츠가 진짜 사람을 데려오는지)
2. Direct 103명 트래픽의 정체 추가 조사 가능하면 진행 (GA에서 세션 상세 흐름, 첫 방문 페이지 등 추가 데이터 요청 고려)
3. 애드센스 승인에만 매몰되지 말고 트래픽 확보 자체(백링크, 커뮤니티 노출, 추가 런칭 디렉토리 등)를 병행 검토
4. 홈페이지 이탈률 72%가 왜 이렇게 높은지 UX 관점에서 점검(허브 페이지들은 양호한데 홈페이지만 유독 높음)


**최신 스크린샷으로 재확인(같은 세션 내, 7/24)**: 사용자가 "오래된 CSV 말고 오늘 최신 걸로 봐야지"라고 지적 → 최신 GA 개요 대시보드 스크린샷으로 재검증. **결과: 패턴 동일하게 재확인됨** — direct 비중 85.1%(97/114명), 홈페이지 이탈률 오히려 악화(77.1%, 전보다 +5%p), 재방문자 그래프 기간 내내 거의 0. 단, 한 가지 보정: 세션 소스에 `search.google.com/referral` 15건이 별도로 잡히는데 이는 구글 검색결과 클릭이 종종 organic이 아닌 referral로 오분류되는 GA의 흔한 현상 — 이걸 포함하면 **실질 구글 유입은 organic 6 + referral 15 = 세션 21건**으로, 처음 판단한 "7명"보다는 약간 더 있음(단 비중은 여전히 작음). **교훈: 이런 트래픽 판단을 할 때는 오래된 export 재사용하지 말고 반드시 최신 데이터를 먼저 요청할 것.**


사용자가 스크린샷으로 tools/term-vs-whole.html 데스크톱 뷰에서 Whole Life 결과 카드가 사이드바(Key Differences 박스) 밑으로 겹쳐 들어가는 버그 지적. 원인 추적 결과 **7/20 세션의 "사이트 전체 테이블 반응형 처리"(커밋 c490376) 스크립트가 states/뿐 아니라 사이트 전체를 대상으로 돌면서, JS로 나중에 채워지는 빈 `<table id="term-table">`/`<table id="whole-table">`까지 정적 테이블로 오인해 table-scroll(min-width:560px)로 잘못 감쌌던 것**이 원인 — 좁은 2열 compare-grid(1fr 1fr) 카드 안에서 560px 최소폭이 강제되며 레이아웃이 깨짐.

**수정**: 해당 두 테이블에서 table-scroll 래핑 제거(원래도 필요없는 짧은 key-value 테이블) + `.compare-card`에 `min-width:0` 방어 코드 추가. **사이트 전체에서 동일 패턴(JS로 채워지는 빈 테이블이 table-scroll로 잘못 감싸진 케이스) 재검색 → 이 파일이 유일했음 확인.** 커밋 `3cd65b1`.

**교훈**: 반응형 CSS 일괄 수정처럼 사이트 전체에 영향 주는 스크립트는 "정적 테이블 vs JS로 채워지는 빈 테이블"을 구분하는 로직이 필요했는데 놓쳤음. 향후 유사 일괄작업 시 `<table id="...">...</table>`가 완전히 비어있는(내용 없이 바로 닫히는) 패턴은 JS 대상일 가능성을 의심하고 별도 처리할 것.

# MyInsuranceCalc.com 인수인계 (2026-07-24 업데이트, 5회차 — tools FAQ 전수 보강)

## ✅ 이번 세션(7/24 5회차) — blog/tools 전수검사, tools 20개 FAQ 누락 발견 및 전수 보강
사용자가 "blog/tools도 전수검사했냐"고 강하게 지적 → 실제로 전수 스캔해보니 **tools 30개 중 20개(2/3)에 FAQPage 스키마가 전혀 없었음** 확인. `car-insurance`, `life-insurance`, `home-insurance`, `workers-comp`, `business-insurance` 등 사이트에서 가장 트래픽 많을 핵심 계산기가 전부 포함돼 있었음 — state 페이지 반복문단(4회차 세션)보다 실질적으로 더 큰 문제였을 가능성이 높음.

**진단 방법**: blog 45개/tools 30개 전체를 정규식 Counter 스캔(5회 이상 완전동일 반복문단 탐지) → blog는 문제 거의 없음(디스클레이머 1문장만 반복, 정상), tools는 반복문단은 없었지만 `grep -L "FAQPage" tools/*.html`로 확인한 결과 20개 파일에 FAQ 자체가 없는 훨씬 심각한 갭 발견. 단어수도 확인(blog 평균 1,677단어/최소 849, tools 평균 1,003단어/최소 398 — freelancer-insurance가 가장 얇았음).

**보강 완료 (20개 전부)**: car-insurance, life-insurance, home-insurance, workers-comp, business-insurance, disability, dwelling-coverage, ev-insurance, flood-insurance, freelancer-insurance, gap-insurance, landlord-insurance, life-insurance-seniors, long-term-care-insurance, motorcycle-insurance, pet-insurance, renters-insurance, sr22-insurance, travel-insurance, umbrella-insurance — 각 페이지에 이미 있던 실제 콘텐츠(계산 로직 설명, 비용 범위, 커버리지 상세)에서 FAQ 4-5개씩 추출해 FAQPage 스키마 + 화면 표시 FAQ 섹션 둘 다 삽입, 신규 사실 날조 없음.

**작업 중 발견/수정한 버그 2건 (품질 재검토 중요성 재확인)**:
1. `tools/car-insurance.html` 스키마 삽입 시 `<script>` 태그를 잘못 중첩시켜 즉시 깨뜨렸다가 발견 즉시 수정 — 이후 모든 파일에서 삽입 전 정확한 head 구조를 먼저 view로 확인하는 방식으로 재발 방지.
2. `states/car-insurance/new-hampshire.html`: "How to Save" 팁 문구가 데이터값("None required")을 그대로 문장에 꽂아넣어 "requirement of None required (financial responsibility) is the legal floor"라는 비문 발생 — financial responsibility 제도를 정확히 설명하는 문장으로 재작성. `states/home-insurance/{texas,new-york,mississippi,georgia}.html` Primary Risk 데이터박스 괄호 불일치 4건도 함께 수정(기존 버그, 이번 세션에 발견).

**검증**: tools 30/30 FAQPage 보유 확인(사후 독립 재검사), 사이트 전체 440파일 ld+json 595블록 파싱 0건 실패, div 밸런스 0건 불일치, li 태그 밸런스 0건 불일치(초기 검증스크립트의 `<li>`/`<link>` 오매칭 버그를 발견해 수정 후 재검증).

**교훈(중요, 반복 강조)**: "일부 샘플만 보고 괜찮다고 판단하지 말 것" — state 페이지 몇 개 diff 비교로 "본문은 이미 잘 차별화돼 있다"고 판단했다가, 정작 더 큰 문제(tools 2/3의 FAQ 완전 누락)는 놓쳤다. **새로운 카테고리를 점검할 때마다 반드시 전수 스캔(grep -L, Counter 기반 반복 탐지, 단어수 분포)부터 먼저 돌리고, 그 결과를 근거로 우선순위를 정할 것** — 눈대중 샘플링은 진짜 구멍을 놓친다.

# MyInsuranceCalc.com 인수인계 (2026-07-24 업데이트, 4회차 — 애드센스 재승인 대응)

## ✅ 이번 세션(7/24) — 애드센스 "가치가 별로 없는 콘텐츠" 반려 대응, state 350페이지 실제 차별화
애드센스 심사 반려("가치가 별로 없는 콘텐츠", Ads.txt "찾을 수 없음") 스크린샷 확인 → 1차로 ads.txt 생성 + privacy.html 보강했으나, **사용자가 "ads.txt는 승인과 무관하다, state 페이지들을 실제로 차별화하는 게 핵심"이라고 명확히 지적** → 진짜 원인 진단 재작업.

**진단 방법**: `states/` 358페이지(전체 콘텐츠의 83%) 중 같은 카테고리 두 주 페이지를 diff로 비교 → "What Makes X Unique", "Risk Factors", 법적 요건(무과실주 여부, 최소보장한도) 등 본문 대부분은 이미 실제 주별로 다른 정확한 내용이었음(예: 텍사스 TWIA/캘리포니아 FAIR Plan/루이지애나 허리케인 이력 등 실제 사실 기반 — 이 부분은 문제 아님). **진짜 문제는 각 카테고리의 "How to Save" 팁 리스트(하단 불릿 4-5개)가 51개 주 페이지에서 문장 단위로 100% 완전 동일 반복**되고 있었던 것 — 카테고리당 8-12개 문장이 각 50개 파일에서 한 글자도 다르지 않게 반복(정규식으로 정량 확인: 15회 이상 완전동일 반복 문단이 카테고리당 8-12개).

**수정**: 각 페이지에 이미 존재하는 실제 주별 데이터(법적 사실, 조작 아님 — 예: 최소보장한도 수치, 무보험운전자 비율, Primary Risk 유형, 규제기관명, Medicaid 확장여부, 신용점수 요율반영 허용여부, workers-comp 시장구조)를 팁 문장에 반영해 카테고리당 불릿 1-2개를 실제로 차별화:
- **car-insurance**: Minimum Liability 수치+PIP요구여부 / Uninsured Drivers 비율(주마다 다른 숫자, 3.5%~29.4% 실제 편차)
- **home-insurance**: Primary Risk 8종(wildfire/tornado/hurricane/earthquake/nor'easter/flooding/winter storms/hail)별 맞춤 완화 팁
- **life-insurance**: Regulator(주 보험감독기관 실제 명칭, 예 뉴욕은 "Department of Financial Services") 기반 민원제기 안내
- **renters-insurance**: Credit-Based Pricing(43개주 허용/7개주 금지) 여부별 안내
- **health-insurance**: Medicaid Expansion(40개주 확장/10개주 미확장) 여부별 커버리지 갭 안내
- **business-insurance**: Workers' Comp Market(민간/독점주펀드) 여부별 쇼핑전략
- **workers-comp**: Market Type(경쟁 33개주/경쟁+주펀드 13개주/독점주펀드 4개주) 여부별 비용절감 전략

**검증**: 350개 파일(7카테고리×50주, index 제외) 전부 반영 확인, 카테고리별 완전동일 반복문단 1-2개씩 실제 감소 확인, 사이트 전체 440파일 ld+json 575블록 파싱 0건 실패, div 밸런스 0건 불일치, li 태그 밸런스 0건 불일치(검증스크립트 자체의 `<li>`/`<link>` 오매칭 버그도 이번에 발견해 수정).

**부수 작업**: `ads.txt` 신규 생성(google.com, pub-5592663499707350, DIRECT, f08c47fec0942fa0), `privacy.html` 대폭 보강(GDPR/CCPA, COPPA, Google 파트너사이트 데이터정책 링크 추가) — 승인 여부와 무관하게 어차피 필요한 표준 정비였음, 커밋만 해두고 우선순위 논쟁은 하지 않음.

**교훈(중요)**: 개별 문장/섹션 단위가 아니라 **"같은 리스트가 N개 페이지에서 완전히 동일한가"를 정량적으로 스캔하는 습관**이 필요함 — diff 2개 샘플만 보고 "내용 충분히 다름"이라 판단하면 하단 반복 불릿 같은 걸 놓친다. 앞으로 대량 템플릿 페이지(state 페이지 등) 신규/수정 시, 카테고리 전체에서 완전동일 반복 문장이 있는지 정규식 스캔(Counter 기반, threshold 15회 이상)을 우선 돌려볼 것. 또한 페이지에 이미 존재하는 데이터박스 필드(법적 사실)를 활용하면 "지어내지 않고도" 진짜 차별화가 가능하다는 패턴 확립.

**다음 세션 참고**: 
- 애드센스 재검토 요청은 이번 수정 반영 후 1-2주 정도 트래픽 지표를 더 지켜본 뒤 진행 권장(11클릭/3개월인 신생 사이트 트래픽 신호 자체가 약한 것도 별개 요인일 가능성 — 콘텐츠 차별화만으로 100% 해결 보장 못함, 솔직하게 고지 필요).
- 남은 완전동일 반복문단(카테고리당 7-11개, 대부분 "Last updated: 2026", 방법론 디스클레이머 등)은 원래 통일돼야 하는 정상적 보일러플레이트라 추가 손볼 필요 없음.
- 이번에 만든 STATE_NAMES 슬러그→이름 매핑 스크립트(`/home/claude/work/scripts/state_names.py`)는 재사용 가능하니 향후 state 페이지 일괄작업 때 활용할 것.

# MyInsuranceCalc.com 인수인계 (2026-07-20 업데이트, 3회차 — 버그수정)

## ✅ 이번 세션(7/20 3회차) — 모바일 반응형 버그 발견 및 사이트 전체 수정
사용자가 신규 페이지 3개(critical-illness-insurance, teen-driver-insurance, non-owner-sr22-insurance)를 모바일 뷰(396px)로 스크린샷 확인 → 2가지 버그 발견해서 지적:
1. **체크박스 렌더링 버그**: 전역 CSS `.form-group input { width:100%; padding:10px 14px; }`가 `<input type="checkbox">`에도 그대로 적용되면서 체크박스가 거대한 파란 박스로 렌더링됨. `tools/teen-driver-insurance.html` 체크박스 3개에 인라인 스타일(18x18px 고정, flex 정렬)로 수정.
2. **비교표 모바일 미대응**: 신규 비교표 2개(critical-illness vs disability, SR-22/SR-22A/FR-44)가 좁은 화면에서 텍스트가 셀 안에서 세로로 짓눌려 보임. 사이트에 `.table-scroll`이라는 반응형 래퍼 클래스가 CSS에 이미 정의돼 있었으나(overflow-x:auto + min-width:560px) **실제로는 사이트 어디에도 적용된 적이 없었던** 것 발견.

**사용자 지시로 즉시 사이트 전체 일괄 수정 진행**:
- 전체 440개 파일 스캔 → 정적 콘텐츠 테이블(states city-rate 비교표, life-insurance 요율표 등) 405개 중 402개(301개 파일)가 미적용 상태였음 확인.
- Python 스크립트로 `<script>` 태그 경계 기준 split → non-script 영역의 `<table>...</table>`만 정규식 매칭해 `<div class="table-scroll">...</div>`로 일괄 래핑. JS로 동적 생성되는 계산기 결과 테이블(script 내부, 이미 2컬럼 단순구조라 문제없음)은 대상에서 정확히 제외됨.
- **검증**: 래핑 후 정적 테이블 405/405 전부 확인, 사이트 전체 440파일 ld+json 575블록 파싱 0건 실패, div 밸런스 0건 불일치.
- 커밋 `2df0ec7`(신규 페이지 3개 개별 수정) + `c490376`(사이트 전체 301개 파일 일괄 수정).

**교훈/향후 규칙**: 앞으로 표를 넣을 때는 반드시 `<div class="table-scroll">` 래핑을 기본으로 할 것. 체크박스류 폼 요소를 새로 쓸 때는 전역 `.form-group input` 스타일이 checkbox/radio에도 적용된다는 점을 감안해 인라인 스타일로 명시적으로 재정의할 것.

# MyInsuranceCalc.com 인수인계 (2026-07-20 업데이트, 2회차)

## ✅ 이번 세션(7/20 2회차) 핵심 요약 — "공격적으로 확장" 지시, 신규 콘텐츠 3건
사용자가 "신규 툴/블로그가 중요하다, 조회수는 많은데 문서수가 적은 지점을 찾고, 경쟁 센 키워드도 롱테일로 뚫어봐라" 지시 → GSC 쿼리 1,000개를 테마별로 재클러스터링해서 기존 커버리지 대비 갭 분석 → 대부분의 대형 클러스터(cancer 5,943회/248쿼리, workers-comp 2,549회/188쿼리, small business 1,505회/87쿼리, renters 1,451회/117쿼리)는 이미 두텁게 커버돼 있어 순위 정체가 콘텐츠 부재가 아닌 도메인 권위 문제로 재확인됨 → 전략 전환: **완전히 새로운 틈새를 웹서치로 경쟁강도 조사** 후 진행.

**경쟁강도 조사 결과 (진행/보류 판단)**:
- ❌ **"신규 10대 운전자 보험"(헤드키워드)**: Forbes Advisor·The Zebra·MoneyGeek·CNBC·Insurance.com 등 대형 금융미디어가 실제 견적 데이터(46개 보험사 조사 등)로 장악 — 고경쟁 확정, 헤드키워드 직접공략 포기.
- ❌ **"does homeowners insurance cover mold/water damage/dog bite"**: NerdWallet·US News·보험사 자체 콘텐츠(Liberty Mutual/Nationwide/Farm Bureau)로 포화 — 고경쟁.
- ❌ **"non-owner car insurance"(일반형)**: MoneyGeek·WalletHub·Insurance.com·ValuePenguin·Insurify 등 대형 비교사이트 장악 — 고경쟁.
- ❌ **RV/모터홈보험 계산기**: 예상보다 경쟁 치열함 확인(calcbee/homeprocalc/rvcostcalculator/blakeinsurancegroup 등 전용 계산기 다수 이미 존재) — 후순위.
- ✅ **"non-owner SR-22 insurance"(진행)**: 경쟁자는 있으나(carinsurance.com/wallethub/moneygeek 등) 소규모·단일목적 사이트 위주로 "non-owner car insurance" 일반형보다 훨씬 약함. **결정적으로 우리 사이트엔 이미 SR-22 툴+DUI 블로그+면허정지 블로그 3개 강한 자산이 있어 내부링크 시너지가 확실** — 진행 결정.
- ✅ **중대질병보험(Critical Illness) 계산기(진행)**: 중간 경쟁(RBC/Trailfolio는 캐나다향, blakeinsurancegroup/growcalculators/moneyhelpdesk 정도가 직접 경쟁) — 지난 세션에도 플래그됐던 후보, 실제 그룹보험 공개 요율표(Santa Barbara Courts 공시자료) 확보해 신뢰도 있는 계산 로직 구성 가능해 진행.
- ✅ **10대 운전자 "추가비용" 계산기(진행, 경쟁 센 키워드를 롱테일/포맷 전환으로 뚫은 사례)**: 키워드 자체(teen driver insurance)는 고경쟁이지만, 경쟁자들이 전부 "best company" 랭킹형 블로그 포맷인 반면 우리는 **"부모 보험에 얼마나 추가되나 + 우등생/기숙사 할인 시뮬레이션" 계산기 포맷**으로 차별화 — 동일 키워드를 다른 콘텐츠 포맷(계산기 vs 리스티클)으로 공략하는 롱테일 전략의 새로운 패턴으로 이번 세션에 확립.

**실행 내역**:
1. **신규 블로그: `blog/non-owner-sr22-insurance.html`** — 주별 비용($262~$1,487/yr, 전국평균 $631), SR-22/SR-22A(GA·MO·TX)/FR-44(FL·VA) 비교표, "무소유 정책으로 새 차 몰면 무보험" 함정과 전환 절차, 비용절감 팁. 기존 `blog/car-insurance-after-license-suspension.html`(기존 1문단짜리 얕은 언급을 확장판 링크로 교체), `blog/life-insurance-after-dui.html`, `tools/sr22-insurance.html` 3곳과 양방향 크로스링크.
2. **신규 툴: `tools/critical-illness-insurance.html`** — 나이대별/흡연여부별 요율표($1,000당 연 보험료, 실제 그룹보험 공개자료 기반) 계산기 + **"중대질병보험 vs 장애보험" 비교표**(사용자가 요청한 비교분석 콘텐츠 스타일 적용) + 조건별 생명보험 시리즈 3개(diabetes/heart-disease/high-blood-pressure) 블로그와 크로스링크 + `tools/disability.html`과 상호링크.
3. **신규 툴: `tools/teen-driver-insurance.html`** — "부모 보험에 자녀 추가 시 증가액" 계산(나이대별 증가율 16세 125%~21세 25%, 성별/우등생/운전교육/기숙사 할인 반영), node로 검증(16세 남 무할인 시 총액 $6,177로 실제 조사치 $5,910~$7,658 범위 내 확인). `tools/car-insurance.html`(Age 섹션 본문+사이드바), `blog/insurance-for-college-students.html`과 크로스링크.
4. **체크리스트**: blog/index.html·tools/index.html·index.html(최신글 로테이션: obesity 밀어내고 non-owner-sr22 추가, 최신툴 New뱃지 2개 추가)·sitemap.xml(439 URL, XML 검증)·llms.txt 전부 반영.
5. **검증**: 사이트 전체 440개 파일, ld+json 575블록 전수 파싱 통과(실패 0), div 밸런스 불일치 0건, 신규 계산기 3개(EMR 포함 재검증) JS 문법 node로 검증 통과, 내부링크 스캔 실제 깨진 링크 0건.

**변경/신규 파일 총 16개**: 신규 블로그 1 + 신규 툴 2 + 상호링크 수정 8(license-suspension, sr22-insurance, car-insurance, disability, diabetes, heart-disease, high-blood-pressure, insurance-for-college-students) + 체크리스트 4(blog/index, tools/index, index, sitemap, llms.txt) + handover.md.

**다음 세션 참고**:
- 신규 3건(non-owner-sr22 블로그, critical-illness-insurance/teen-driver-insurance 툴)의 색인/노출 여부를 다음 GSC export에서 필수 확인.
- **"경쟁 센 키워드 + 계산기 포맷 차별화" 전략을 검증된 패턴으로 기록** — 다음에 고경쟁 헤드키워드를 만나면 블로그 리스티클 대신 계산기/비교표 포맷으로 전환 가능한지부터 검토할 것.
- GSC 쿼리 클러스터링 방법론(테마별 정규식 매칭 → 노출 합계/쿼리수 집계)이 유효했음 — 다음 세션에도 새 export 받으면 동일 방식으로 재실행해 신규 클러스터 출현 여부 확인.
- 남겨둔 후보: 최종비용보험(고경쟁 확정), 소상공인 사이버보험(고경쟁 확정), RV/모터홈보험 계산기(경쟁 예상보다 셈, 재검토 필요), "dog bite liability by state"류 주법 차이 콘텐츠(아직 경쟁강도 미확인, 우리 50-state 인프라와 결합하면 차별화 가능성 있음 — 다음 세션 후보).

## ✅ 이번 세션(7/20 1회차) 핵심 요약 — 다음 세션 필독
GSC Performance/Coverage export(2026-07-20 기준) + GA 애널리틱스(7/22~7/19... 실제로는 7/19 리포트, 6/22~7/19 기간) 분석 후 **"수익화(AdSense) 관점에서 우선순위 판단"** 지시에 따라 작업 범위를 재조정: 노출량이 극히 작은(0~4회) workers-comp 잔여 20개 주는 이번엔 보류하고, **노출 총량이 가장 큰 미개척 풀인 renters-insurance(51개 주 전체 FAQ 0개, 노출 총 1,479회)를 최우선으로 착수**. 정확한 근거: 카테고리별 노출 재집계 결과 blog(12,824) > workers-comp(3,344, 대부분 기존 FAQ 페이지가 차지) > tools(2,846) > business-insurance(2,508) > **renters-insurance(1,484, FAQ 0%)** 순.

**이번 세션 실행 내역:**
1. **business-insurance 잔여 15개 주 FAQ+스키마 신규 삽입**(노출 상위순: new-jersey45·montana42·michigan36·louisiana29·minnesota28·nebraska28·california23·tennessee22·virginia21·georgia19·utah18·south-carolina17·illinois16·missouri15·oregon15 — 남은 노출 441회 중 404회(92%) 커버). tennessee/missouri는 건설업 예외조항(5인 기준, 건설업은 1인)을 Q1에 반영. 잔여 13개 주(플로리다·미시시피·뉴멕시코·텍사스 등, 대부분 노출 0~10회)는 보류.
2. **workers-comp 잔여 21개 주 중 minnesota만 FAQ 삽입**(노출 143회로 잔여분 전체 166회 중 압도적 1위, 나머지 20개는 각 0~4회로 무의미한 수준 판단해 보류). 미네소타 규제기관명(Department of Labor and Industry, DLI, Workers' Compensation Division)은 웹서치로 확인.
3. **renters-insurance 51개 주 중 노출 상위 20개 신규 FAQ+스키마 삽입**(louisiana206·georgia165·oklahoma61·oregon58·arizona57·new-jersey57·arkansas54·colorado50·wisconsin40·california36·kentucky34·hawaii33·alabama32·pennsylvania31·iowa30·north-dakota27·rhode-island27·missouri26·washington26·illinois25 — 노출 총 1,479회 중 1,075회(73%) 커버). FAQ 4문항 패턴: 법정의무 여부(전주 공통 "No, but landlords may require")/평균비용(주별 databox 재사용)/신용점수 기반 요율 허용여부(Oregon·California·Hawaii는 금지주라 Q3 답변 분기)/주별 최대 리스크요인(허리케인/토네이도/우박/산불/도심절도/저위험/복합/재조달비용 등 8개 패턴별 문구 차별화). 잔여 31개 주는 노출 낮아 보류.
4. **blog/does-car-insurance-cover-ev-battery.html FAQ+스키마 신규 삽입**(노출 11→34로 성장 확인, 기존 본문 내용만 재사용해 FAQ 5개 구성 — 새 사실 없음).
5. **신규 툴: tools/emr-calculator.html (EMR/경험수정요율 계산기)** — GSC에서 "experience modification factor south carolina workers comp" 쿼리가 순위 13.19(노출16)로 이례적으로 양호한 것을 발견 → South Carolina workers-comp 페이지의 기존 EMR 설명 콘텐츠가 원인으로 추정 → 웹서치로 경쟁강도 확인(workerscompcodes.com/everycalculators.com/occupros.com 등 기존 EMR 계산기 존재하는 중간 경쟁, 단 우리 사이트처럼 51개 주 workers-comp+business-insurance 페이지와 자연스럽게 상호링크 가능한 곳은 없음 — 진행 결정). 계산 로직: 3년 합산 payroll/incurred losses 입력 → 업종별 expected loss rate(tools/workers-comp.html의 기존 industryRates 객체 그대로 재사용, 사이트 내 일관성 유지) → EMR = 실제손실/기대손실 단순화 공식. **실제 NCCI 공식(primary/excess 분리, ballast, credibility weighting)과 다른 단순화 추정치임을 본문+디스클레이머에 명시** — 과장 없이 "간이 추정 도구"로 포지셔닝. node로 4개 케이스(루핑/사무직/건설/음식점) 계산 검증, 결과 EMR 범위(0.6~1.5대) 업계 통상 범위와 합치 확인. tools/workers-comp.html·states/workers-comp/south-carolina.html에 상호링크(사이드바+본문) 추가.
6. **체크리스트**: tools/index.html(EMR 카드 추가)·index.html(EMR New뱃지 추가)·sitemap.xml(436 URL, XML 검증 완료)·llms.txt 전부 반영.
7. **검증**: 사이트 전체 437개 파일, ld+json 569개 블록 전수 파싱 통과(실패 0), div open/close 전체 파일 불일치 0건, 내부링크 전수 스캔 결과 실제 깨진 링크 0건(JS 템플릿 리터럴 오탐 1건 제외).

**변경/신규 파일 총 44개**: business-insurance 15 + renters-insurance 20 + workers-comp(minnesota) 1 + workers-comp(south-carolina, EMR 링크만) 1 + blog 1 + 신규 tools/emr-calculator.html 1 + tools/workers-comp.html(EMR 상호링크) 1 + tools/index.html + index.html + sitemap.xml + llms.txt.

**다음 세션 우선순위 (수익화 관점 재확인 필요)**:
- **renters-insurance 잔여 31개 주** — 이번에 다룬 20개 다음으로 노출 큰 순서(virginia10·florida15·hawaii33은 이미 포함 재확인 필요·massachusetts23·kansas5 등 나머지는 대부분 5~24회 수준, 대량 노출 폭발은 없음). 노출 총량 관점에서 우선순위는 이번 세션으로 대부분(73%) 소진했으므로, 다음엔 완결 목적이 아니라면 후순위 가능.
- **workers-comp 잔여 20개 주(minnesota 제외)** — 전부 노출 0~4회로 여전히 낮음. 카테고리 "완결"이 목적이 아니라면 다음 GSC export에서 노출이 실제로 오르는지 먼저 확인 후 착수 여부 결정 권장.
- **business-insurance 잔여 13개 주** — florida/mississippi/new-mexico/texas는 노출 0, 나머지(arkansas11·nevada10·new-york9·massachusetts8·arizona7·hawaii6·pennsylvania6·oklahoma4·colorado3·connecticut3)도 낮음. 후순위.
- **tools/emr-calculator.html 색인/노출 여부 다음 export에서 필수 확인** — 신규 콘텐츠 검증 포인트.
- **states/life-insurance 다크호스**: 노출 24→28로 사실상 정체(4회 증가). 순위는 여전히 3~11위권 우수하나 표본이 너무 작아 이번에도 보류 판단 유지. 다음 export에서 노출이 20~30회대로 늘어나면 그때 FAQ 보강 착수 권장.
- **클릭 정체 재확인**: 3개월 누적 클릭이 11→11→11로 3세션 연속 동일. 콘텐츠량 증가에도 불구하고 클릭 전환은 사이트 평균 순위(50~90위대)가 구조적 병목 — 이는 콘텐츠 문제가 아니라 도메인 신뢰도/시간 누적 문제로 판단, 계속 롱테일 전략 유지하며 인내심 있게 지켜볼 것. (life-insurance-after-colon-cancer 2클릭, mesothelioma/lymphoma/gig-workers/boat/sr22/ev-insurance/freelancer/missouri-workers-comp 각 1클릭 등 소규모 실클릭은 꾸준히 발생 중 — 전략 자체는 작동하고 있음)

## ✅ 이번 세션(7/19) 핵심 요약 — 다음 세션 필독
GSC 데이터(Coverage + Performance, 3개월 누적) 분석 후 3라운드 진행: ①신규 1건(우울증/불안 블로그)+보강 29페이지 ②신규 2건(비만 블로그로 조건별 시리즈 완결, 모바일홈보험 툴) ③신규 3건(결혼식보험 툴, 귀중품보험 툴, 면허정지 자동차보험 블로그). "공격적으로 진행" 방침 계속 유지 — 되묻지 않고 바로 실행. 사용자가 세션 중 "롱테일 키워드 선점" 목적으로 신규 콘텐츠를 계속 추가 지시했고, **매번 착수 전 웹서치로 경쟁강도부터 확인 → 고경쟁이면 억지로 밀어붙이지 않고 롱테일 앵글로 전환하거나 후순위로 미루는 패턴을 이번 세션에 확립**(사고후/과속딱지 자동차보험 → 면허정지 롱테일로 전환한 사례가 대표적).

**핵심 발견 4가지:**
1. **states/life-insurance 카테고리가 새로운 다크호스** — FAQ가 51개 전부 없는데도 개별 페이지 순위가 3~11위(!)까지 나오는 곳이 다수 확인됨 (tools/life-insurance.html도 순위 3). 다만 노출 자체가 아직 총 24회로 극히 작아서(카테고리 중 최저) 표본이 작음 — 진짜 트래픽으로 이어지는지는 다음 export에서 재확인 필요. **다음 세션 최우선 후보로 남겨둠** (노출이 작아 이번엔 workers-comp/business-insurance보다 우선순위 낮춤).
2. **workers-comp·business-insurance state 카테고리가 여전히 최대 기회 영역** — 노출은 크지만(각각 2,857 / 2,080회) FAQ 미적용 페이지가 다수 남아있었음. 이번 세션에 workers-comp 16개 주, business-insurance 12개 주에 FAQ+스키마 일괄 삽입 완료 (아래 상세 참고).
3. **"car insurance calc" 쿼리가 순위 4위(!)로 tools/car-insurance.html에서 확인됨** — 노출 18회로 표본은 작지만 페이지1 상단. 타이틀/메타는 이미 최적화되어 있어 추가 조치 없음, 그냥 긍정 신호로만 기록.
4. **missouri workers-comp가 FAQ 없이도 실클릭 1회(CTR 25%, 순위 23)** 기록 중이었음 — FAQ 미적용 페이지 중 가장 강한 실성과 신호라 이번 배치에 포함해 우선 보강.

**신규 콘텐츠 갭 발견:** 쿼리 전수 스캔 중 "kentucky hair salon insurance"(17회 노출) 등 업종 특화(미용실) 보험 쿼리 3개 주에서 확인 — 아직 볼륨이 작아 별도 페이지 대신 켄터키 business-insurance 페이지에 FAQ 1문항으로 대응. 볼륨 늘면 전용 페이지 검토.

**Coverage export는 이번에도 데이터 변화 없음** (여전히 동일한 30건: NOINDEX 2, 크롤링됨-미색인 5, 대체페이지 1, 발견됨-미색인 22) — 리포팅 지연 지속 중, 색인 반영 확인은 다음 export 대기.

**트래픽**: 클릭 11→11 (변화 없음), 노출 20,473→22,228 (+1,755). 클릭이 정체된 건 우려할 수준은 아님 — 전체 사이트 평균 순위가 대부분 50~90위대(페이지 5~9)라 클릭 자체가 통계적으로 드문 구간, 노출 증가는 색인/크롤링이 계속 확장되고 있다는 신호로 해석.

## ✅ 공격적 확장 모드 실행 완료 (7/16) — 계속 유지
7/15에 지시된 "공격적으로 신규/보강 둘 다 진행" 방침을 7/16 세션에서 실제 실행함 (아래 "이번 세션(7/16)" 항목 참고). 이 방침은 계속 유효 — 다음 세션도 되묻지 말고 중복확인+경쟁강도 확인만 거쳐서 여러 건씩 진행할 것.

## 사이트 기본
- GitHub Pages 정적 HTML, 영어권 글로벌 타겟
- 레포: `canghun13/myinsurancecalc-`
- GA: `G-TB2KNRH23W` / 애드센스: `pub-5592663499707350` (승인 재검토 대기 중)
- **작업 방식**: 사용자가 매 세션 GitHub Personal Access Token을 채팅으로 제공 → Claude가 레포 클론/pull → 직접 커밋+푸시. **더 이상 zip 전달 방식 아님.** 작업 끝나면 사용자가 토큰 revoke.
- 로컬 작업 경로: `/home/claude/work/repo` (컨테이너 리셋되면 새 세션에서 처음부터 클론 필요)

## 콘텐츠 규모 (2026-07-19 세션 종료 기준)
- 블로그 45개 / 툴 31개 (7/20 2회차: non-owner-sr22 블로그 1건 + critical-illness-insurance·teen-driver-insurance 툴 2건 신규)
- **States 카테고리 7개 × 50페이지 = 350페이지**: car-insurance, health-insurance, home-insurance, life-insurance, workers-comp, renters-insurance, business-insurance
- sitemap.xml 총 435개 URL (XML 유효성 검증 완료)
- 총 400페이지 이상
- **State FAQ 적용 현황(7/20 기준)**: workers-comp 31/51(잔여 20개, 전부 저노출), business-insurance 37/51(잔여 14개, 대부분 저노출), **renters-insurance 20/51(잔여 31개, 이번 세션 노출 상위 20개 완료)**, car/health/home/life-insurance 각 0~1/51 — 잔여는 대부분 노출 낮은 주라 다음 export에서 노출 증가 확인 후 착수 권장.

## 색인 현황
- **7/19 Coverage export 확인 — 이번에도 데이터 변화 없음(리포팅 지연 지속)**: 이슈 구성 7/15~7/16과 완전 동일(NOINDEX 2, 크롤링됨-미색인 5, 대체페이지 1, 발견됨-미색인 22). 7/15~7/16에 수정/보강한 내용(깨진 링크, FAQ 18페이지, 신규 3건)의 색인 반영은 여전히 미확인 — 리포팅 지연이 예상보다 길어지는 중, 계속 다음 export 대기.
- 트래픽: 클릭 11→11 (변화 없음), 노출 20,473→22,228 (+1,755, 3개월 누적). 클릭 정체는 우려 신호라기보다 사이트 평균 순위가 여전히 50~90위대(페이지 5~9)인 게 근본 원인 — 노출은 계속 늘고 있어 색인/크롤링 확장은 정상 진행 중으로 판단.
- **7/19 새로 확인된 순위 신호**: states/life-insurance 카테고리 다수 페이지가 FAQ 없이도 순위 3~11위 기록 (tools/life-insurance.html도 순위 3) — 다만 노출 절대량이 카테고리 중 가장 작음(총 24회)이라 표본 노이즈 가능성 있음, 다음 export에서 노출량이 늘어나는지가 진짜 신호인지 판별하는 기준. missouri workers-comp는 FAQ 없이 이미 실클릭 1회(CTR 25%, 순위 23)를 내고 있어 이번 세션 보강 대상에 우선 포함.
- **다음 확인 시점**: "발견됨-미색인" 22건 감소 여부, 이번 세션 FAQ 추가한 workers-comp 16곳/business-insurance 12곳의 순위 변화, states/life-insurance 카테고리 노출량이 실제로 늘고 있는지(다크호스 가설 검증), 신규 depression-anxiety 글 색인 여부.

## 신규 콘텐츠 방침 — 전면 해제 상태 (7/16부터 유지)
- 모라토리엄 완전 해제됨. 신규 블로그/툴 자유롭게 진행 가능. 대량 state 카테고리 신규 생성(51개 일괄)만 사용자 확인 후 진행 권장, 나머지는 바로 실행.
- **7/19 세션에 실행한 신규 콘텐츠 (총 2건, 사용자가 세션 중 "롱테일 키워드 선점" 목적으로 추가 지시)**:
  - 조건별 시리즈 5번째(`life-insurance-with-depression-anxiety.html`) — 위에 상세.
  - 조건별 시리즈 6번째이자 **마지막**(`life-insurance-with-obesity.html`) — 웹서치로 BMI/build chart 등급 기준, GLP-1(오젬픽/위고비) 처방 목적별 언더라이팅 처리(체중감량 단독 vs 당뇨병 처방) 조사 반영. 시리즈 5개 기존 글과 양방향 크로스링크. **이걸로 조건별 생명보험 시리즈(당뇨병→심장질환→고혈압→수면무호흡증→우울증/불안→비만) 완결.**
  - 니치 툴 후보 중 첫 착수(`tools/mobile-home-insurance.html`) — 모바일/제조주택보험 계산기. 웹서치로 경쟁강도 확인(insure.com/moneygeek/blakeinsurancegroup 등 기존 계산기 존재, 중간 경쟁)했지만 실제 계산 로직에 쓸 수 있는 구체적 데이터(HUD 코드 1976년 기준, 앵커링/타이다운 시스템 영향, 윈드존 I/II/III 차등, ACV vs replacement cost 구분)가 풍부해 진행 결정. node로 계산 공식 검증(평균 케이스 $1,052/yr로 전국 평균 $700-1,500 범위 내).
- **니치 업종 보험 갭(작은 볼륨, 전용 페이지 대신 기존 페이지에 FAQ로 대응)**: "kentucky hair salon insurance"류 쿼리 확인 → 별도 페이지 대신 states/business-insurance/kentucky.html에 FAQ 1문항 추가로 대응(볼륨 26회로 아직 전용 페이지 정당화 안 됨).
- **7/19 세션 3번째 라운드 (사용자가 "할 수 있는 대로 진행" 지시, 신규 2개 + 블로그 1개 추가)**:
  - `tools/wedding-insurance.html` — 웹서치로 경쟁강도 확인(howmuchcover/calcbee 등 기존 계산기 있는 중간 경쟁이지만 실제 공식 데이터 확보돼있어 진행). 게스트수×장소유형+주류여부 기반 배상책임 + 예산×1.5% 취소보장 공식, node로 CalcBee 공개 공식과 교차검증($748 일치 확인).
  - `tools/valuables-insurance.html` — 웹서치 결과 상위 노출 다수가 stacker.com발 저품질 신디케이션 기사(여러 지역언론에 동일 기사 반복 게재)로 확인되어 실질 경쟁은 낮다고 판단, 진행. 감정가의 0.5~3%(평균 1.5%) 공식, 보관방식/커버리지타입(scheduled vs blanket) 반영.
  - `blog/car-insurance-after-license-suspension.html` — 상세 내용 위 "고위험 운전자 시리즈" 섹션 참고.
  - 소상공인 사이버보험/중대질병보험은 경쟁강도만 확인하고 이번엔 보류(사이버보험은 고경쟁 확정, 중대질병보험은 중간 경쟁이라 다음 세션 후보로 유지).
- **다음 후보**: 조건별 시리즈는 완결됐으니 이후엔 새 카테고리 검토 필요. 고위험 운전자 시리즈 — "신규 10대 운전자 보험" 경쟁강도 미확인, 다음 세션에 확인 권장. 니치 툴 잔여 3개 — 최종비용보험(고경쟁, 후순위), 소상공인 사이버보험(고경쟁, 후순위), 중대질병보험(중간 경쟁, 시도해볼만함).
- **미용실 보험처럼 업종 특화 니치가 GSC에 추가로 뜨는지 매 세션 확인할 것** — 볼륨이 쌓이면(주별 20~30회 이상) business-insurance 허브에 업종별 서브섹션 신설도 검토 가능.

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

## 신규 콘텐츠 후보 리스트 (진행 중 — 자유롭게 이어서 진행)
### 조건별 생명보험 시리즈 (cancer 시리즈 패턴 복제) — ✅ 완결 (7/19)
- 완료: 당뇨병 → 심장질환 → 고혈압 → 수면무호흡증 → 우울증/불안 → **비만(7/19 완료, 시리즈 마지막)**
- 6개 전부 완료, 상호링크 그물망 완성. 이후 신규는 다른 카테고리에서 검토.

### 고위험 운전자 시리즈 (DUI 패턴 복제) — 방향 수정됨 (7/19)
- **완료**: `car-insurance-after-license-suspension.html` (7/19) — 원래 후보였던 "사고 후 자동차보험"/"과속딱지 후 자동차보험"은 웹서치 결과 Forbes Advisor·ValuePenguin·The Zebra·WalletHub·Experian 등 대형 금융 미디어가 이미 정교한 주별 데이터(Quadrant Information Services 소스)로 장악한 고경쟁 헤드 키워드로 확인됨 → 대신 "면허정지 후 재개(SR-22 재발급 절차)" 롱테일 앵글로 전환. 이 쪽은 검색결과가 주로 DMV 공식페이지/로펌 블로그/소형 보험대리점이라 경쟁이 훨씬 약하고, 기존 `tools/sr22-insurance.html`·`blog/life-insurance-after-dui.html`과 자연스러운 내부링크 시너지도 있어 우선 진행.
- **남은 후보(순서 조정 필요)**: "신규 10대 운전자 보험"은 아직 미확인 — 다음 세션에 경쟁강도 확인 권장. "사고 후"/"과속딱지 후"는 헤드키워드 직접공략 대신 우리 사이트에 이미 있는 주별(state) 자동차보험 페이지들과 결합한 세부 롱테일(예: "[state] 사고 후 자동차보험 평균 인상률" 같은 state+이벤트 조합)로 접근하면 승산 있을 수 있음 — 착수 전 반드시 재검토.

### 니치 툴 후보
- 완료: GAP보험 계산기, 임대인보험 계산기, 콘도(HO-6)보험 계산기, 모바일/제조주택보험 계산기, **결혼식보험 계산기(7/19 완료)**, **귀중품/보석보험 계산기(7/19 완료)**
- 남은 후보: 최종비용보험(⚠️ 고경쟁 확인, 후순위), 소상공인 사이버보험(⚠️ 7/19 웹서치로 고경쟁 확인 — Insureon/MoneyGeek/Zogby 등 대형 B2B 리드젠 업체 다수 장악, 후순위 권장), 중대질병보험(⚠️ 7/19 웹서치로 중~고경쟁 확인 — RBC/Sun Life/iA 등은 캐나다向이라 직접경쟁 아니지만 blakeinsurancegroup/growcalculators 등 US향 경쟁자 존재, 착수 시 중간 우선순위)

### 기타 신규 (GSC 데이터 기반 발견)
- 완료: Uber/Lyft 보험 설명 전용 글(7/16) — GSC에 "how does uber insurance work" 114회 노출·순위 90.7위로 뜨는데 기존 gig-workers 글이 이 쿼리에 제대로 안 맞는 것 확인, 전용 글로 분리

### state 후보 (신규 생성은 완료, 현재는 기존 51페이지 FAQ 보강이 핵심 작업)
- 신규 생성 완료: renters-insurance, business-insurance (총 7개 카테고리, 각 51페이지)
- **FAQ 보강 잔여 현황(7/19 기준, 노출량 순 우선 처리 권장)**:
  - **workers-comp 잔여 21개 주**: alaska, arizona, arkansas, california, connecticut, delaware, florida, illinois, louisiana, minnesota, mississippi, new-hampshire, new-york, north-carolina, ohio, oklahoma, south-dakota, texas, vermont, washington, west-virginia (washington은 독점주라 FAQ 문구 분기 필요)
  - **business-insurance 잔여 29개 주**: arizona, arkansas, california, colorado, connecticut, florida, georgia, hawaii, illinois, louisiana, massachusetts, michigan, minnesota, mississippi, missouri, montana, nebraska, nevada, new-jersey, new-mexico, new-york, oklahoma, oregon, pennsylvania, south-carolina, tennessee, texas, utah, virginia
  - **renters-insurance 51개 전부 FAQ 없음** — 아직 손대지 않음, 노출 총 1,419회로 business-insurance보다 크므로 다음 세션 우선순위 후보
  - **car/health/home/life-insurance 4개 카테고리도 FAQ 거의 없음** — 노출 절대량은 작지만(life-insurance는 특히 순위가 이미 좋아 다크호스 가능성, 위 "핵심 발견" 참고), 다음 세션에 가볍게 훑어볼 가치 있음

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
13. **(7/16) 공격적 확장 모드 실행 — 신규 3건 + 보강 18페이지**:
    - **신규 블로그 2건**: `life-insurance-with-sleep-apnea.html`(조건별 시리즈 4번째, 웹 검색으로 AHI 등급·CPAP 순응도·table rating 기준 조사 반영, 당뇨병/심장질환/고혈압과 양방향 크로스링크), `how-does-uber-insurance-work.html`(GSC에서 발견한 실제 키워드 갭 — "how does uber insurance work" 114회 노출·순위 90.7인데 기존 gig-workers 글이 안 맞음 확인 → Period 1/2/3 비교표 중심의 전용 글로 분리, gig-workers 글과 상호링크).
    - **신규 툴 1건**: `tools/condo-insurance.html`(HO-6 콘도보험 계산기) — bare-walls vs all-in 마스터 정책 차이, loss assessment 갭 등 실제 조사 반영. 계산 로직은 Insure.com 전국 평균($795/yr, $60K 개인재산, $1000 공제금) 기준으로 노드로 보정·검증 완료.
    - **보강 18페이지**: workers-comp 10개 주(nebraska/indiana/kansas/south-carolina/kentucky/north-dakota/montana/tennessee/new-jersey/wisconsin — GSC 노출 상위인데 FAQ 없던 주들, 파이썬 스크립트로 주별 실제 데이터(임계값/요율/규제기관) 반영해 일괄 삽입) + business-insurance 8개 주(indiana/delaware/vermont/washington/wyoming/idaho/west-virginia/kentucky — 마찬가지로 GSC 노출 상위·FAQ 없음, washington/wyoming은 독점주라는 사실 반영해 FAQ 문구 분기 처리).
    - **검증**: 사이트 전체 ld+json 487개 블록 파싱 통과, div 밸런스 재검사 중 크로스링크 편집 과정에서 실수로 생긴 중복 `</div>` 2건(heart-disease, high-blood-pressure) 발견 즉시 수정 → 최종 div 불일치 0건.
    - **모든 신규 콘텐츠 체크리스트 완료**: blog/index.html·tools/index.html·index.html(홈페이지 최신글 3개+최신툴 New뱃지 이동)·sitemap.xml(428 URL, XML 검증)·llms.txt 전부 반영.
14. **(7/19) GSC 데이터 기반 대규모 FAQ 보강 + 신규 1건**:
    - **workers-comp 16개 주 FAQ+스키마 신규 삽입**: colorado, maine, alabama, virginia, pennsylvania, georgia, rhode-island, oregon, hawaii, massachusetts, idaho, wyoming, maryland, michigan, missouri, new-mexico. 각 주 페이지에 이미 존재하던 데이터박스 수치(threshold/rate/market type)와 본문 규제기관명을 파이썬으로 추출해 FAQ 4문항(의무여부/비용/규제기관/미가입 시 불이익)을 생성 — 새로운 사실을 지어내지 않고 기존 검증된 데이터만 재사용. wyoming은 독점주 문구 분기 처리. alabama 규제기관명(Department of Labor Workers' Compensation Division)은 웹서치로 확인 후 반영.
    - **business-insurance 12개 주 FAQ+스키마 신규 삽입**: north-carolina, alaska, kansas, new-hampshire, north-dakota, south-dakota, rhode-island, iowa, ohio, maryland, alabama, wisconsin. 동일 방식(기존 데이터박스 값 재사용)으로 FAQ 4문항(workers' comp 의무/비용/GL 의무여부/LLC 오너 처리) 생성. kansas는 급여 기준($20,000/년) threshold라 문구 별도 처리, north-dakota/ohio는 독점주 문구 반영.
    - **states/business-insurance/kentucky.html에 미용실 보험 FAQ 1문항 추가**: GSC에서 "kentucky hair salon insurance"(17회 노출) 쿼리 확인 → 웹서치로 실제 업계 관행(BOP+전문직배상책임+제품배상책임 3중 구조, workers' comp 1인 기준) 조사 후 반영. 볼륨이 작아(3개 주 합산 26회) 전용 페이지 대신 기존 페이지 보강으로 대응.
    - **신규 블로그 1건**: `blog/life-insurance-with-depression-anxiety.html` — 조건별 시리즈 5번째. 웹서치로 실제 언더라이팅 기준(진단 유형/중증도, 치료·투약 안정성, 입원 이력, 자살시도 이력, 일상기능 영향) 조사, FAQ 5개+스키마 포함, 시리즈 4개 기존 글(수면무호흡증/당뇨병/심장질환/고혈압)과 양방향 크로스링크(본문+사이드바 총 8개 삽입 지점).
    - **검증**: 사이트 전체 517개 ld+json 블록 전수 파싱 통과(실패 0), div open/close 밸런스 431개 파일 전체 불일치 0건, 신규/수정 파일 내부링크 전수 확인 결과 깨진 링크 0건.
    - **체크리스트 완료**: blog/index.html(신규 카드 추가)·index.html(홈페이지 최신글 3개 갱신, uber글을 밀어내고 신규 추가)·sitemap.xml(430 URL, XML 검증 완료)·llms.txt 전부 반영.
    - **변경 파일 총 38개** (workers-comp 16 + business-insurance 12 + kentucky 1 + 신규 블로그 1 + 크로스링크 4 + blog/index.html + index.html + sitemap.xml + llms.txt).
15. **(7/19 후반) 사용자 추가 지시 — 신규 블로그 1건 + 신규 툴 1건 ("롱테일 키워드 선점" 목적)**:
    - **신규 블로그**: `blog/life-insurance-with-obesity.html` — 조건별 시리즈 6번째이자 마지막 편. 웹서치로 BMI/carrier build chart 등급별 기준(25-29.9 과체중, 30+ 비만, 40+ 구간별 인수 가능성), GLP-1 계열 약물(오젬픽/위고비) 처방 목적에 따른 언더라이팅 분기(체중감량 단독 처방 vs 당뇨병 처방 시 규정 다름, 최근 12개월 이내 시작 시 체중 평균화 관행) 조사 반영. 기존 시리즈 5개 글(우울증불안/당뇨병/심장질환/고혈압/수면무호흡증) 전부와 양방향 크로스링크(총 10개 삽입 지점: 본문+사이드바 5쌍).
    - **신규 툴**: `tools/mobile-home-insurance.html` — 모바일/제조주택보험 계산기. 착수 전 웹서치로 경쟁강도 확인(insure.com/moneygeek/blakeinsurancegroup 등 기존 계산기 존재하는 중간 경쟁) 및 실제 차별화 데이터 확보(HUD 코드 1976.6.15 기준일, 이전/이후 구분에 따른 인수 가능성·ACV vs replacement cost, HUD 윈드존 I/II/III 등급, 앵커링/타이다운 시스템 상태가 요율에 미치는 영향, 파크 임대 부지 vs 자가 토지 구분). 계산 로직(연식/앵커링/윈드존/토지상태/공제금 6개 변수 승수 조합)을 node로 케이스별 검증 — 평균 케이스 $1,052/yr(전국 평균 $700-1,500 범위 내), 최악 케이스(구형·파크·구형앵커·고위험) $2,175/yr, 최선 케이스 $945/yr로 전부 합리적 범위 확인.
    - **체크리스트 완료**: blog/index.html·tools/index.html·index.html(홈페이지 최신글 3개 + 최신툴 New뱃지 콘도→모바일홈으로 이동)·sitemap.xml(432 URL, XML 검증)·llms.txt 전부 반영.
    - **검증**: 사이트 전체 522개 ld+json 블록 전수 파싱 통과(실패 0), div/ul 밸런스 433개 파일 전체 불일치 0건, 내부링크 전수 스캔 깨진 링크 0건.
    - **조건별 생명보험 시리즈 공식 완결**: 당뇨병→심장질환→고혈압→수면무호흡증→우울증/불안→비만, 총 6편 + 상호링크 그물망 완성. 다음 신규는 고위험 운전자 시리즈(DUI 패턴) 또는 니치 툴 잔여 4개 중에서 검토.
16. **(7/19 세션 3번째 라운드) 사용자 추가 지시 — "확인해보고 진행, 블로그도 경쟁 세면 롱테일로" — 신규 툴 2건 + 블로그 1건**:
    - **웹서치 경쟁강도 스캔 4건**: 모바일홈(이미 확인됨, 재확인 불필요) 외 결혼식보험/귀중품보험/소상공인 사이버보험/중대질병보험 4개 니치 툴 후보 전수 조사. 결과: 결혼식보험(중간 경쟁, 진행), 귀중품보험(대부분 stacker.com 저품질 신디케이션 기사라 실질 저경쟁, 진행), 사이버보험(Insureon/MoneyGeek/Zogby 등 대형 B2B 리드젠 업체 다수 — 고경쟁, 보류), 중대질병보험(RBC/Sun Life 등은 캐나다향이라 직접경쟁 아니지만 US향 경쟁자 일부 존재 — 중간 경쟁, 보류).
    - **블로그 쪽도 동일하게 경쟁 확인**: 원래 계획이던 "사고 후"/"과속딱지 후 자동차보험"은 Forbes Advisor·ValuePenguin·The Zebra·WalletHub·Experian 등 대형 금융미디어가 주별 정밀 데이터로 이미 장악한 고경쟁 헤드키워드로 확인 → 그대로 밀어붙이지 않고 "면허정지 후 재개(SR-22)" 롱테일 앵글로 전환 결정(경쟁이 DMV 공식페이지·로펌블로그·소형 대리점 위주라 훨씬 약함, 기존 SR-22 툴/DUI 블로그와 내부링크 시너지도 있음).
    - **신규 툴 A**: `tools/wedding-insurance.html` — 게스트수×장소유형(실내/야외/데스티네이션)×주류여부 배상책임 공식 + 예산×1.5% 취소보장 공식. node로 공개된 CalcBee 계산 예시와 교차검증(동일 조건 $748 vs $748 일치 확인).
    - **신규 툴 B**: `tools/valuables-insurance.html` — 감정가 기준 0.5~3%(중간값 1.5%) 연간요율, 품목유형(보석/미술품/전자제품/악기)·보관방식(착용 vs 금고)·커버리지타입(scheduled vs blanket) 승수 반영. node로 케이스 검증($10K 반지 착용 시 월 $13.75, 소스 데이터 $4~$25/월 범위 내).
    - **신규 블로그**: `blog/car-insurance-after-license-suspension.html` — SR-22 촉발 사유, 재개 절차 5단계, 논오너 SR-22, 주별 재개수수료 변동폭(예시로 텍사스 $100/미주리 $20/일리노이 최대 $500 등 실제 주정부 자료 조사 반영), SR-22 전환 시 커버리지 공백 주의사항. `tools/sr22-insurance.html`·`blog/life-insurance-after-dui.html` 양방향 크로스링크 추가.
    - **체크리스트 완료**: blog/index.html·tools/index.html·index.html(홈페이지 최신글/최신툴 New뱃지 이동)·sitemap.xml(435 URL, XML 검증)·llms.txt 전부 반영.
    - **검증**: 사이트 전체 530개 ld+json 블록 전수 파싱 통과(실패 0), div/ul 밸런스 436개 파일 전체 불일치 0건, 내부링크 전수 스캔 깨진 링크 0건.

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
- **다음 Coverage export 확인 시**: "발견됨-미색인" 22건 변화 여부(3번째 세션째 변화 없음 — 리포팅 지연이 예상보다 긴 편이라 다음에도 안 바뀌면 그러려니 할 것), 7/19에 FAQ 추가한 workers-comp 16곳/business-insurance 12곳 순위 변화, 신규 3건(depression-anxiety/obesity 블로그, mobile-home-insurance 툴)의 색인 여부, missouri workers-comp 클릭이 유지/증가하는지.
- **states/life-insurance 카테고리를 다음 세션 최우선으로 검토**: 노출은 작지만(24회) 순위가 이미 3~11위권으로 좋음 — FAQ 보강으로 확실히 밀어붙일지, 노출량이 자연 증가하는 걸 한 번 더 지켜볼지 다음 export 보고 판단.
- **state FAQ 보강 잔여분(workers-comp 21곳, business-insurance 29곳, renters-insurance 51곳 전부)을 계속 진행** — 노출량 순으로 우선순위 정해서(위 "state 후보" 섹션 목록 참고) 다음 세션에도 여러 개씩 배치 처리.
- 조건별 시리즈 마지막 하나(비만)와 니치 툴 후보(모바일홈보험 등) — 매번 웹서치로 경쟁강도 확인하고 바로 실행.
- GSC 데이터 받을 때마다 쿼리 전수 스캔해서 실제 키워드 갭 있는지 확인하는 루틴 유지 (우버보험/미용실보험 발견한 방식 — 노출은 있는데 대응하는 페이지가 없거나 순위가 유독 나쁜 쿼리를 찾는 게 핵심).
- **전체 사이트 div 태그 밸런스 + JSON-LD 파싱 스캔은 여러 파일을 동시에 만질 때마다 항상 마지막에 재확인할 것.**

## 이번 세션(7/16) 전달 자료 참고
- GSC Performance export(3개월 누적), Coverage export(색인 상태, **여전히 7/10까지만 반영** — 7/15와 데이터 동일, 리포팅 지연 지속) 분석 완료.
- **핵심 발견 1 (색인/순위 변화 신호)**: Coverage 데이터 자체는 안 바뀌었지만, 개별 페이지 순위 데이터에서 `nevada workers-comp`가 순위 69~70위대 → **11위**로 급등한 게 확인됨 (노출 1회뿐이라 표본은 작지만, 지난 세션에 고친 깨진 링크+FAQ 보강 효과일 가능성). `new-york home-insurance`는 아직 변화 없음(순위 88.78).
- **핵심 발견 2 (트래픽)**: 클릭 10→11, 노출 18,672→20,473. 순위 15위 안쪽 페이지에서 클릭 나오는 패턴 계속 확인.
- **핵심 발견 3 (실제 키워드 갭 발견)**: 쿼리 전수 스캔 중 "how does uber insurance work"(114회 노출, 순위 90.7)를 발견 — 기존 gig-workers 글이 이 쿼리를 제대로 못 잡고 있어서 전용 글로 분리해 대응. 나머지는 새로운 클러스터 없이 기존 페이지가 이미 커버 중.
- **이번 세션 실행 작업 총정리**: 신규 3건(수면무호흡증 블로그, 우버보험 블로그, 콘도 HO-6 계산기 툴) + 보강 18페이지(workers-comp 10주, business-insurance 8주 FAQ+스키마) + 사이트 전체 검증(487 ld+json 블록, div 밸런스 0건 불일치). 사용자 지시대로 "공격적" 기조 반영 — 매번 확인받지 않고 여러 건 동시 진행, 다만 품질 기준(웹서치 조사 데이터, node 검증, 800단어+, div/JSON 검증)은 유지.
- 원본 CSV는 재사용 안 해도 됨, 다음번엔 새로 받은 데이터로 분석.

## 이번 세션(7/19) 전달 자료 참고
- GSC Performance export(3개월 누적, ~7/16까지) + Coverage export 분석 완료. Coverage는 7/15부터 3번째 세션 연속 데이터 변화 없음(리포팅 지연).
- **작업 순서**: (1) Performance CSV 전수 로드 → 쿼리 1,000개/페이지 286개 노출·순위 분석 → (2) 카테고리별(blog/workers-comp/business-insurance/renters-insurance/car/health/home/life-insurance/tools) 노출·클릭 합산해서 기회 크기 비교 → (3) 각 카테고리 FAQ 보유 현황 스캔(`grep -L "Frequently Asked Questions"`) → (4) 노출량이 크고 FAQ 없는 페이지를 우선순위로 선정 → (5) 각 페이지에 이미 있는 데이터박스 수치를 파이썬으로 추출해 재사용(새 사실 창작 방지) → (6) 불확실한 사실(예: 알라바마 workers comp 규제기관명)만 웹서치로 개별 확인 → (7) 스크립트로 일괄 삽입 → (8) 사이트 전체 JSON-LD·div 밸런스·내부링크 검증.
- **키워드 리서치 관점**: 신규 콘텐츠(우울증/불안 시리즈)는 웹서치로 사전에 경쟁 강도를 확인함 — moneygeek/quickquote/riskquoter 등 전담 사이트가 이미 다수 존재하는 중간 경쟁 니치였지만, 우리 사이트는 헤드 키워드("life insurance depression")가 아니라 하위 롱테일(진단 유형별/치료이력별 세부 쿼리)을 노리는 전략이라 기존 시리즈(당뇨병 등)와 동일한 논리로 진행 결정. 미용실보험처럼 볼륨이 아직 작은 키워드는 전용 페이지 대신 기존 페이지에 FAQ로 흡수하는 방식으로 리소스 배분.
- **이번 세션 실행 총정리 (3라운드 합산)**: 신규 6건(우울증/불안·비만 블로그 2건 — 조건별 시리즈 완결, 면허정지 자동차보험 블로그 1건, 모바일홈·결혼식·귀중품보험 툴 3건) + 보강 29페이지(workers-comp 16, business-insurance 12, kentucky 미용실 FAQ 1문항) + 크로스링크 다수(9개+2개 파일) + 체크리스트(blog/index, tools/index, index, sitemap, llms.txt — 매 라운드마다) + 사이트 전체 검증(최종 530 ld+json 블록, 436파일 div/ul 밸런스, 내부링크 전수 확인). 변경/신규 파일 총 55개 이상.
- 다음 세션에서 참고할 만한 발견: states/life-insurance 다크호스 신호, workers-comp/business-insurance 잔여 FAQ 목록(위에 상세), renters-insurance는 아직 FAQ 전무하니 다음 우선순위 후보. 조건별 생명보험 시리즈는 6편으로 공식 완결. **경쟁강도 사전 확인 → 고경쟁이면 롱테일 앵글로 전환하는 워크플로우가 이번 세션에 확립됨 — 다음 신규 콘텐츠도 이 패턴 유지할 것.** 다음 신규 후보: 고위험 운전자 시리즈 잔여(신규 10대 운전자 등, 경쟁강도 미확인) + 니치 툴 잔여 3개(최종비용보험/사이버보험 고경쟁 후순위, 중대질병보험 중간경쟁 시도해볼만함).
