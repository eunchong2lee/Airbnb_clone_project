# Airbnb_clone_project


#  🌎 Web Site


#  🎥 시연 영상


#  📆제작 기간
2022-06-17(금) ~ 2022-06-23(목)

#  💁 팀원소개
😍 FRONT-END(2명)
  * 조성인 : 
  
  * 홍종훈 : 
  
  👉 https://github.com/vennydev/hanghae-clone

😎 BACK-END(3명)
  * 임정현 : Post Api(Read), 유저간 실시간 채팅,
  
  * 이은총 : Auth Api, Airbnb 숙박업체 크롤링
   
  * 이호욱 : Comment Api CRUD

# 🔨 Tech Stack
Back-end Tech Stack
  * Javascript
  * Node.js
  * Express

Back-end Library
  * bcrypt
  * dotenv
  * cors
  * Json Web Token
  * aws-sdk
  * http-server
  * mongoose
  * mongoose-sequence
  * socket.io
  * pupeteer
  * csv-parse
  * csv-stringify
  * stringify

Develope Library
  * swagger-jsdoc
  * swagger-ui-express
  * swagger-autogen
 
DBMS
  * MongoDB & Mongoose
 
Deploy
  * AWS EC2 (Ubuntu 18.04LTS)
  * AWS S3

# S.A 및 팀 노션 페이지 

https://www.notion.so/4-SA-10d2f2e0e96947a8b0eb8237690e0606#a83353ea63f242ff881434099e5de764

# 와이퍼 프레임

https://www.figma.com/file/wNnyH1PuZ3s1ePF9PtxHMP/Show-me-your-space-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Flow


# ERD & Table 설계

![clone_airbnb](https://user-images.githubusercontent.com/81402579/175218189-5431d204-c84c-4131-a2d6-41adeace779e.png)


# API 설계

<img width="1472" alt="api설계1" src="https://user-images.githubusercontent.com/81402579/175219735-3921a967-625d-495e-a909-fe9ebfd7ad80.png">
<img width="1472" alt="api설계1" src="https://user-images.githubusercontent.com/81402579/175220072-784f4d21-6d4b-4327-8515-18e429a80d81.png">
<img width="1472" alt="api설계1" src="https://user-images.githubusercontent.com/81402579/175220152-12fac5ac-e1bd-42ec-a00b-3492b3c56dc1.png">


# <img width=100px; alt="스웨거 로고" src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg"> swagger

![스웨거](https://user-images.githubusercontent.com/81402579/175220443-c0921409-7819-4d69-8f20-36353dd1d4f7.png)


# Trouble Shooting

문제 1: puppeteer을 이용한 크롤링 간 client 로딩 시간으로 인한 데이터 추출 불가능 에러
-----------------------------------------------------------------------------------

해결 : * client 로딩 시간을 3초로 했다가 7초로 변경 및 사이트 제일 하단 까지 auto scroll 동작
      * 테스트 중인 기기의 사양이나 인터넷 속도, 웹서버의 속도 따라 경험적으로 테스트해야함.


문제 2: puppeteer을 이용한 크롤링 간 detail 페이지 구조가 달라 element을 못 받아 오는 크롤링 에러
-----------------------------------------------------------------------------------

해결 : * 페이지 구조가 조건문으로 처리하여 다른 부분의 element을 다르게 받아와 에러 해결


문제 3: socket.io를 이용한 실시간채팅 구현시 메세지가 undefind가 뜨는 현상
-----------------------------------------------------------------------------------

해결 : socket.id가 겹쳐서 생기는 현상으로 socket.id가 겹치지 않게 설정하여 처리


문제 4: commnet 수정, 삭제시 nickname을 찾지 못하는 현상
-----------------------------------------------------------------------------------

해결 : res.local로 유저를 응답 받아야하는데 오타로 req.local 요청을 보내서 오타 수정으로 해결


문제 5: 
-----------------------------------------------------------------------------------

해결 : 


문제 6: 
-----------------------------------------------------------------------------------

해결 : 


# 더 구현해보고 싶은 기능

 - 대댓글 작성 및 좋아요 추가
 - 페이지 네이션 기능 추가
 - 크롤링 자동화
 - 패스포트 구현
 - 
