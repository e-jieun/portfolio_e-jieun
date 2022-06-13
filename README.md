# portfolio_e-jieun

## 레이아웃 구성에 따른 마크업 포인트
## code
> 인트로 페이지
- [ ] 동그라미의 애니메이션 움직임을 어떻게 서퍼처럼 표현할 것인지 고안 => animate를 우선 사용해보고 자연스러운 움직임을 구현해보자
- [ ] 파도의 차오르는 움직임 구현 => scroll event와 접목

> 자기소개 페이지
- [ ] 물방울 움직임 둥둥 떠다니는 움직임 구현 => animation, setInterval
- [ ] 글씨는 물 속에서 떠오르는 모습으로 구현 => position, opacity, setTimeout
- [ ] 글씨 마우스 오버를 제외한 포커스 아웃 구현 => https://developer.mozilla.org/ko/docs/Web/CSS/filter

> 프로젝트 목차 페이지
- [ ] 파도가 밀려오는 것처럼 늘어나는 하단 바 -> 프로그레스 바를 구현하는 부분을 참고하면 좋을 것
- [ ] 마우스 오버에 따른 움직임 -> letter space 늘리기

> 프로젝트 소개 페이지
- 01~03 프로젝트 소개 페이지
- [ ] 썸네일, 텍스트 수정 => 메인 화면의 썸네일 좀 더 다듬을 필요가 있다, 이미지 소스 작업
- [ ] 해쉬와 아이디로 페이지 이동 => hashset, id 이용해서 페이지를 스크롤이 아닌 바꿔주는 방향으로 하면 페이지 수가 더 적어보이는 효과를 줘서 사용자 감상 피로도를 낮출 수 있을 것
- [ ] a태그로 링크 페이지 이동 => 자세한 설명을 담은 노션 페이지와 깃허브로 이동할 수 있도록 할 것

> 개인 프로젝트, 토이 프로젝트 소개 페이지
- [ ] 클릭하라는 인터랙션 효과 구현이 필요해 보임 => 포커스 아웃의 효과 적용으로 콘텐츠 선택의 효과를 내줌
- [ ] 페이지 이동할 부분 => 페이지가 연결되도록 해줄 부분 어느 곳을 클릭 해야 할지 알릴 필요성이 있음

> 엔딩 페이지
- [ ] 손동작의 움직임을 구현하는 부분이 필요해보임 => animate로 움직임을 우선 구성해 보기
- [ ] 샤카 손동작을 회전시켜 전화해달라는 의미를 담은 손동작으로 구성하고 
- [ ] 손에서 뿜어져나오는 물방울과 함께 이메일과 자기소개 페이지, 깃허브 페이지로 구성해야 한다
- [ ] 이메일은 이미지, 자기소개 페이지, 깃허브 페이지는 링크가 가능해야할 것