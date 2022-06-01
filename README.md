# 잇츨링(eatsring)
Eatsring(잇츨링) 서비스는 맛집탐방을 위한 파티원 모집 서비스입니다.

![title](https://user-images.githubusercontent.com/35111721/170951097-56be66d4-e3a1-4836-8de9-86df30afa96e.png)   


#### [잇츨링 사이트](https://www.eatsring.com)

#### [시연 영상](https://youtu.be/cnQRXcruKXo)

### FRONTEND MEMBERS 
[이진혁⚡️](https://github.com/zinukk)    [이상민⚡️](https://github.com/LeeSangMin12)  

## 1.프로젝트 설명

>🤩 맛집탐방, 카페투어 혼자보단 여럿이 좋다면?  
➿ Find _ 간편하게 동행 찾고  
➿ Gather _ 직접 글 올려서 모으고  
➿ Eat _ 함께 먹으러 가자 ❗️           
혼자 가기 힘든 맛집을 쉽게 파티원을 구해 쉽게  같이 갈 수 있는 서비스입니다!

**저희의 프로젝트를 더 알아보고 싶으신가요?**


[**잇츨링 팀 노션**](https://www.notion.so/8-S-A-Eatsring-73091c01460b4b4b857179473a01b66c)  

[**잇츨링 인스타그램**](https://www.instagram.com/eatsring_official/)  

## 2.프로젝트 요약
1. 개발기간 : 2022.04.22 ~ 2022.06.3
2. 개발언어 : JavaScript
3. 개발 라이브러리: React
4. 배포 환경: netlify
5. 협업 툴 : Git, Notion


## 3.프로젝트 주요기능
### **ⓞ 주요 기능**
- 소셜로그인
- 현재 위치 근처 맛집 파악가능
- 위치 팔티 피터
- 실시간 채팅


#### 1. 소셜로그인
- 카카오톡 api를 이용한 소셜로그인


#### 2. 파티 등록 및 신청
  - 모집 인원의 연령, 성별 설정
  - 모집 인원 정보에 해당하지 않으면 신청 불가

#### 3. WebSocket을 이용한 실시간 채팅
 - 멤버들 간에 실시간 채팅으로 파티에 관련된 정보를 공유할 수 잇게 sockjs, stompjs을 이용해 구현한 기능입니다.
 - 채팅 입력시 스크롤 이동 등을 적용하여 사용자 경험을 증가시켰습니다.


## 4. 아키텍쳐

![title](https://user-images.githubusercontent.com/100110567/171096435-5cb4aef0-72d8-40a0-aa07-5e9e7dcbbb4f.png)   

## 5. 기술적 목표 & 트러블 슈팅

## 6. 피드백 개선

## 7.사용한 라이브러리(패키지)
| 라이브러리명 | 내용 | 참고|
| --- | --- | --- |
| axios | 서버통신|  |
|redux | 상태관리 | |
| history | history동기화 |  |
|styled-component | 컴포넌트 스타일링 |  |
| material-ui|  컴포넌트 스타일링  |  |
| stompjs| 소켓 통신 | 실시간 채팅 |
| sockjs-client| 소켓 통신 |실시간 채팅  |
| react-image-file-resizer| 이미지 압축 |  |
| date-fns| 한국 날짜로 설정 |  |
| react-device-detect| 모바일 최적화 |  |
|react-slick| 슬라이드 만들기 |  |

## 8. 개발 일지
[**Front-end github**](https://github.com/Team8-Party-Luck/frontend)   

[**Back-end github**](https://github.com/Team8-Party-Luck/backend)   
