# Airbnb_clone_project


#  🌎 Web Site


#  🎥 시연 영상


#  📆제작 기간
2022-06-17(금) ~ 2022-06-23(목)

#  💁 팀원소개
😍 FRONT-END(2명)
  * 조성인 : 
  
  * 홍종훈 : 
  
  👉 

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

<img width="1121" alt="와이어프레임1" src="https://user-images.githubusercontent.com/104499306/174006374-ec47e65c-3dd1-4c0c-9f78-08be1c19e2c2.png">
<img width="1121" alt="와이어프레임2" src="https://user-images.githubusercontent.com/104499306/174006380-d2e27309-4c78-45fe-88a1-8d27ae9ea892.png">
<img width="1121" alt="와이어프레임3" src="https://user-images.githubusercontent.com/104499306/174006387-33d473f8-4136-4c73-af0e-b2148f76b474.png">
<img width="1121" alt="와이어프레임4" src="https://user-images.githubusercontent.com/104499306/174006396-8caf6805-dd21-41cf-97fc-6ff7b486b5b4.png">
<img width="1121" alt="와이어프레임5" src="https://user-images.githubusercontent.com/104499306/174006403-3901cfb5-f9d0-4c4f-aefc-2a69b6c8c330.png">
<img width="1121" alt="와이어프레임6" src="https://user-images.githubusercontent.com/104499306/174006409-afade9b1-6a89-48b6-8929-085256af8aa3.png">



# ERD & Table 설계

![erd_vo0 2](https://user-images.githubusercontent.com/104499306/174009117-19f073f9-d74c-4151-ac72-220dda85a37d.jpg)


# API 설계

<img width="1472" alt="api설계1" src="https://user-images.githubusercontent.com/104499306/174013480-06b74e67-a8ec-42e9-bb68-4146e444e883.png">
<img width="1472" alt="api설계2" src="https://user-images.githubusercontent.com/104499306/174013496-c251d82b-07fd-4c67-b835-b4b67f1a1d1f.png">
<img width="1472" alt="api설계3" src="https://user-images.githubusercontent.com/104499306/174013515-10ef6257-5383-4119-8bba-ffe564fe16a1.png">



# <img width=100px; alt="스웨거 로고" src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg"> swagger
![스웨거1](https://user-images.githubusercontent.com/81402579/174002638-52cabd6b-de27-4062-9968-02a6086ba231.png)
![스웨거2](https://user-images.githubusercontent.com/81402579/174002649-5135281e-c3f5-46df-9ab1-b09244c0358d.png)
![스웨거3](https://user-images.githubusercontent.com/81402579/174002658-34329e29-660c-4c66-8d2a-f40d3a3b649f.png)


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
