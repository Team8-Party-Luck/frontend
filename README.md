# 잇츨링 (eatsring)

![title](https://i.imgur.com/Xe4C0TO.png)

#### [잇츨링 바로가기](https://www.eatsring.com)

#### [시연 영상](https://youtu.be/cnQRXcruKXo)

## 프론트엔드 멤버 🍽

<table>
  <tr>
    <td align="center"><a href="https://github.com/ryurim0109"><img src="https://avatars.githubusercontent.com/u/96809979?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/devkevinsoon"><img src="https://avatars.githubusercontent.com/u/83892403?v=4" width="100px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>이진혁</b></td>
    <td align="center"><b>이상민</b></td>
  </tr>
  <tr>
    <td align="center"><b> Frontend  </b></td>
    <td align="center"><b> Frontend  </b></td>
  </tr>
</table>
</br></br>

## 1️⃣ 프로젝트 설명 🍽

<pre>“평소에 가보고 싶었던 신상 카페, 맛집 등 같이 다녀올 사람들을 잇츨링에서 찾고 다 같이 가자❗️”

잇츨링(eatsring)은 평소에 가고 싶었던 가게나 맛집들이 있지만, 같이 갈 사람이 마땅치 않아
가지 못했던 사람들을 위해 만든 서비스입니다. 

잇츨링에서 유저가 원하는 시간, 날짜에 같이 방문할 새로운 사람들을 모집하고 찾을 수 있으며 
파티를 등록한 유저는 본인이 원하는 성별, 나이대를 설정하여 특정 유저만 받을 수도 있습니다.  

지금 바로 잇츨링에서 새로운 인연들과 함께 맛집을 다녀보세요!
</pre>

<p>저희의 프로젝트가 더 궁금하신가요?⤵️</p>

[**잇츨링 팀 노션**](https://www.notion.so/8-S-A-Eatsring-73091c01460b4b4b857179473a01b66c)

[**잇츨링 인스타그램**](https://www.instagram.com/eatsring_official/)

</br></br>

## 2️⃣ 프로젝트 요약 🍽

- 기간 : 2022.04.22 ~ 2022.06.03
- 개발 언어 : Javascript
- 개발 라이브러리 : React
- 배포 환경 : netlify
- 협업 툴 : Git / Notion / Figma

</br>

## 3️⃣ 아키텍처 🍽

![title](https://user-images.githubusercontent.com/100110567/171096435-5cb4aef0-72d8-40a0-aa07-5e9e7dcbbb4f.png)

</br></br>

## 4️⃣ 프로젝트 주요기능 🍽

### ① 로그인 페이지

- 카카오톡 api를 이용한 소셜 로그인
- 이미지 슬라이드를 통한 서비스 3장 요약
- 최소한의 페이지 구성으로 인한 유저의 편의성 증대

### ② 유저 초기 설정 페이지

### ③ 메인 페이지

### ④ 채팅 페이지

### ⑤ 마이페이지

</br>

## 5️⃣ 트러블 슈팅 🍽

### 채팅 끊김 현상

<details>
  <summary>useRef를 이용한 채팅 Input 값 관리</summary>
  
  * 문제 상황
    - 간헐적으로 웹소켓 끊김 현상.
    - 채팅 input 창 안에서 타이핑 속도가 느려지는 현상.
  * 문제 원인 
    - 사용자가 채팅 메시지 작성 시, onChange 이벤트와 동시에 이벤트의 value값을 useState로 변경시키며 입력값을 관리.
    - 이로 인해 타이핑 할 때마다 과도한 리렌더링이 발생.
    -  과도한 리렌더링 때문에 웹소켓이 끊어지고 인풋값의 타이핑 속도가 느려지는 성능저하 및 이슈 라고 판단.
  * 문제 해결
    -  ref.current 값이 변경될때 리렌더링이 발생하지않는다는 점에서 useState에서 useRef를 활용하기로 결정.
    -  웹 소켓 끊어짐 현상과 채팅 속도가 느려지는 이슈가 해결.

  </details>
  
  ### 이미지 업로드시 발생하는 로딩 지연
<details>
  <summary>이미지 리사이징</summary>
  
  * 문제 상황
    - 프로필, 파티 등록 페이지에서 이미지를 업로드할 시 발생하는 지연 현상 
    - 메인페이지에서 내려주는 파티 리스트들의 로딩 지연 현상
  
  * 문제 원인
    - 이미지의 크기가 과도하게 클 경우 발생하는 이슈라고 판단.

- 문제 해결
  - 라이브러리(react-image-file-resizer)를 사용하여 이미지 압축
  - 리사이징 전 대비 파일 크기가 현저히 낮아지고 로딩 및 업로드시 속도 개선.

  </details>
  
### Netlify 404 Not Found 오류
<details>
  <summary>_redirects</summary>
  
  * 문제 상황
    - netlify로 배포 후 모든 페이지에서 404 not found 오류가 발생하면서 아무런 페이지도 보여주지 못 하는 이슈가 발생. 
  * 문제 원인
    - 리액트의 경우 SPA(Single Page Application)이기 때문에 오직 하나의 페이지인 index.html만 렌더링
    - root가 아닌 페이지에 접속할 때 netlify는 route를 처리하는 방법을 알 수가 없기 때문에 발생하는 것으로 판단.
  * 문제 해결
    - netlify는 client 측에서 처리되지 않는 URL을 처리할 수 있도록 _redirects라는 파일을 제공
    - 프로젝트 내의 public/디렉토리 내의 _redirects 파일을 만들어 해결
  
  </details>

## 6️⃣ 피드백 개선 🍽

<details>
  <summary>악의적인 유저 신고 기능 추가</summary>
  
  * 피드백
  <pre>단순히 맛집이나 새로운 곳을 가기 위한 목적이 아니라 불순한 의도나 이성과의 만남 그 자체에 
목적을 둔 유저들이 있을 수도 있다는 생각이 들었습니다. 이를 위해 유저에 대한 신고 기능이
있으면 좋겠습니다.  </pre>
  * 개선 내용
    - 프로필 화면 우측 상단에 신고기능이라는 것을 알 수 있는 이미지를 넣고 모달을 통해 해당 기능을 이용할 수 있도록 기능 추가.
</details>

  <details>
  <summary>서비스에 대한 이해 부족으로 이탈률이 높아지는 것에 대한 이슈 개선</summary>
  
  * 피드백
  <pre>서비스 이용 가이드가 없어서 아쉽습니다 ㅜㅜ 서비스 이용 가이드 버튼이나 탭이 있으면 
너무 좋을 것 같습니다!! </pre>

- 개선 내용 - 홈 화면에서 책자 버튼을 클릭하면 언제든지 서비드 가이드를 확인 할 수 있어서 앱 사용에 대한 전반적인 이해도를 높임.
</details>

  <details>
  <summary> 지도 초기 실행 시 유저의 위치를 기반으로 검색되도록 개선</summary>
  
  * 피드백
  <pre>지도 실행시 현재 위치 기반으로 지도 이동이 되었으면 더 편할 것 같습니다.</pre>

- 개선 내용 - (들어갈 내용)
</details>

  <details>
  <summary>서비스 이슈</summary>
  
  * 피드백
  <pre>(유저의 피드백 내용)</pre>

- 개선 내용 - (들어갈 내용)
</details>

  <details>
  <summary>서비스 이슈</summary>
  
  * 피드백
  <pre>(유저의 피드백 내용)</pre>

- 개선 내용 - (들어갈 내용)
</details>

<p>더 많은 피드백 개선 사항을 보시려면? ⤵️</p>

[**잇츨링 유저 피드백 개선 사항**](https://www.notion.so/UT-00dad963feb643dea43b0e15ac55c308)

## 7️⃣ 사용한 라이브러리(패키지)

| 라이브러리명             | 내용                              | 참고 |
| :----------------------- | :-------------------------------- | :--- |
| axios                    | 서버통신                          |      |
| redux                    | 상태관리                          |      |
| lodash                   | 디바운스를 이용한 무한스크롤 구현 |      |
| history                  | history 동기화                    |      |
| styled-component         | 컴포넌트 스타일링                 |      |
| material-ui              | 달력, 시간, 탭바                  |      |
| react-slick              | 이미지 슬라이더                   |      |
| react-modal              | 팝업창 기능                       |      |
| react-image-file-resizer | 이미지 리사이징                   |      |
