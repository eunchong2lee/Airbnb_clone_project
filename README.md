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
  * 임정현 : 
  
  * 이은총 : 
   
  * 이호욱 : 

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
  * passport
  * passport-local

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

문제 1: aws-s3 사용 시 s3 bucket에 이미지 업로드 가능 하나 읽기가 안되는 트러블 슈팅 발생
-----------------------------------------------------------------------------------

해결 : s3 bucket을 퍼블릭 모드로 변경해야함.


문제 2: RequestTimeTooSkewed S3 이미지 업로드 시 S3 시간과 server 시간의 차이가 커서 나는 에러 발생
-----------------------------------------------------------------------------------

해결 : s3 설정에 correctClockSkew: true 추가함.


문제 3: 백엔드 프론트엔드 간 request 불가능 발생
-----------------------------------------------------------------------------------

해결 : url 입력 실수로 인한 오타 변경


문제 4: 오타로 인한 여러가지 에러
-----------------------------------------------------------------------------------

해결 : 오타 해결


문제 5: swagger cors 에러
-----------------------------------------------------------------------------------

해결 : 주소 잘못 입력


문제 6: dotenv .env 파일 못 불러오는 문제
-----------------------------------------------------------------------------------

해결 : .env 파일 위치 변경


# 더 구현해보고 싶은 기능

 - 대댓글 작성 및 좋아요 추가
 - 페이지 네이션 기능 추가
