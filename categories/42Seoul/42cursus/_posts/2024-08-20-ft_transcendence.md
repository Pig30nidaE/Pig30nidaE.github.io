---
layout: post
title:  ft_transcendence (1)
excerpt: "42cursus - ft_transcendence (1) / 2024-08-14 통과"
tags: [42seoul, 42서울, born2code, 42cursus, ft_transcendence, python, django, javascript, vanilajs]
date: 2024-08-20
---

# 0. 시작하기 전에..
드디어 마지막 과제를 통과했다. 대충 뭘 적어야 할지 막막하긴 한데, 코드를 욱여넣는 것은 별로 의미가 없는 것 같아서 어떻게 진행되었는지 위주로 적을까 한다.

# 1. 팀 빌딩
트센만 남겨놓았을 당시 마땅한 팀원이 없었다. 계속 팀플 같이한 팀원 1명이 있었고, 그 다음 같이할 사람을 찾는 중이었는데, 9기에 아는 지인이 1-2개월 쯤 뒤에 시작할 수 있다고 해서 섭외를 했고, 또 지인의 지인도 합류하게 되어 4명인 상황이었는데, 마지막 1명은 slack을 통해 모집해 백엔드 2명, 프론트엔드 3명으로 총 5명으로 진행하게 되었다. 나는 벡엔드를 맡게 되었다.  
  
결과적으로, 블랙홀이 8.30 까지였는데, 6월말쯤 팀 빌딩이 완료 되었다. 또한 다들 막바지인 사람들이라, 한 사람을 제외하고는 모두 한 달안에 과제를 끝내야하는 상황이었고, 결국 해내긴 했다.

# 2. 첫 회의 / 만남
노션에 기록하면서 진행했는데, 기록되어있는 첫 회의록은 다음과 같다.  

6.23 일요일  
첫 트센 팀원 회의

- 시간: 평일 2시
- 자리: 자리 있는대로
- 비고: 화요일은 exam보고 만나기시작
- 목표: 8월 첫째 주까지 평가 가능한 상태
- 모듈 정함, 모듈 목록 페이지 참고
- 브랜치는 모듈 별로 생성하되, 필요하면 상의

시간과 관련해서 사실 나는 평일 오전으로 하고 싶긴했는데, 팀원 중 한 명이 오는데 2시간 걸리기도 하고, 보통 오후에 출근하는 사람들이 많아 2시로 했다.  
자리는 오후에 모여서는 회의실을 잡기 어렵다고 생각했기 때문에, 자리가 있는 곳으로 모이기로 했다. 보통 지하 아니면 일찍 온 사람이 회의실을 잡았던 것 같다.  
그리고 모두가 시간이 얼마 없었던 상황이기에, 화요일은 시험을 칠 겸 쉬기로 했고, 2시까지 모여서 각자 진행하기로 했다. 나중에 가서는 끝나는 시간과 지각비도 정했는데, 이건 나중에 적음.

정한 모듈은 다음과 같다.  
## Modules
- Major
	- Web
		- Use a Framework as backend. (Django)
	- User Management
		- Implementing a remote authentication. (OAuth 2.0)
		- Standard user management, authentication, users across tournaments.
	-  Gameplay and user experience
		- Remote players.
		- Live Chat.
- Minor
	- Web
		- Use a database for the backend. (PostgreSQL)
	- Accessbility
		- Support on all devices.
		- Expanding Browser Compatibility.
		- Multiple language supports.

물론 정한 이대로 모듈을 진행한 것은 아니고, 진행하면서 몇 가지 모듈은 다른 것으로 대체했다. 이건 나중에 알려줌.

## 컨벤션
### Git Commit Message Convention

|커밋 유형|의미|
|:---|:---|
|feat|새로운 기능 추가|
|fix|버그 수정|
|style|코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우|
|refactor|코드 리팩토링|
|test|테스트 코드, 리팩토링 테스트 코드 추가|
|chore|파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우, 파일을 삭제하는 작업만 수행한 경우, 그 외 기타 수정 ex) .gitignore|
|design|CSS 등 사용자 UI 디자인 변경|
|comment|필요한 주석 추가 및 변경|
|!HOTFIX|급하게 치명적인 버그를 고쳐야 하는 경우|

인터넷에 있던 컨벤션을 참고 했다.  
출처: [velog - 수리둥절 님](https://velog.io/@sasha1107/%EB%85%B8%EC%85%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B4%80%EB%A6%AC-%ED%85%9C%ED%94%8C%EB%A6%BF-%EA%B3%B5%EC%9C%A0)  
  
개인적인 바램으로는 HOTFIX가 많이 쓸 일이 없었으면 했다만 생각보다 진짜 치명적인 버그가 많이 터졌다.

# 3. 준비 -완-
이 정도로 첫 회의는 가볍게 끝냈고, 7월 첫 째주에 나와 다른 팀원 한 명이 개인사정이 있어서, 7월 첫째주부터 본격적으로 시작하게 되었다. 다음 글부터는 구현 과정을 적어볼까 한다.