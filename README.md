# Airbnb_clone_project


#  π Web Site
http://chodult.s3-website.ap-northeast-2.amazonaws.com/

#  π₯ μμ° μμ
https://youtu.be/DZ92PTaKyTw

#  πμ μ κΈ°κ°
2022-06-17(κΈ) ~ 2022-06-23(λͺ©)

#  π νμμκ°
π FRONT-END(2λͺ)
  * μ‘°μ±μΈ : 
  
  * νμ’ν : 
  
  π https://github.com/vennydev/hanghae-clone

π BACK-END(3λͺ)
  * μμ ν : Post Api(Read), μ μ κ° μ€μκ° μ±ν,
  
  * μ΄μμ΄ : Auth Api, Airbnb μλ°μμ²΄ ν¬λ‘€λ§
   
  * μ΄νΈμ± : Comment Api CRUD

# π¨ Tech Stack
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

crawling repository
https://github.com/eunchong2lee/Airbnb_clone_project_crawling

# S.A λ° ν λΈμ νμ΄μ§ 

https://www.notion.so/4-SA-10d2f2e0e96947a8b0eb8237690e0606#a83353ea63f242ff881434099e5de764

# μμ΄νΌ νλ μ

https://www.figma.com/file/wNnyH1PuZ3s1ePF9PtxHMP/Show-me-your-space-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Flow


# ERD & Table μ€κ³

![clone_airbnb](https://user-images.githubusercontent.com/81402579/175218189-5431d204-c84c-4131-a2d6-41adeace779e.png)


# API μ€κ³

<img width="1472" alt="apiαα₯α―αα¨1" src="https://user-images.githubusercontent.com/81402579/175219735-3921a967-625d-495e-a909-fe9ebfd7ad80.png">
<img width="1472" alt="apiαα₯α―αα¨1" src="https://user-images.githubusercontent.com/81402579/175220072-784f4d21-6d4b-4327-8515-18e429a80d81.png">
<img width="1472" alt="apiαα₯α―αα¨1" src="https://user-images.githubusercontent.com/81402579/175220152-12fac5ac-e1bd-42ec-a00b-3492b3c56dc1.png">


# <img width=100px; alt="μ€μ¨κ±° λ‘κ³ " src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg"> swagger

![μ€μ¨κ±°](https://user-images.githubusercontent.com/81402579/175220443-c0921409-7819-4d69-8f20-36353dd1d4f7.png)


# Trouble Shooting

λ¬Έμ  1: puppeteerμ μ΄μ©ν ν¬λ‘€λ§ κ° client λ‘λ© μκ°μΌλ‘ μΈν λ°μ΄ν° μΆμΆ λΆκ°λ₯ μλ¬
-----------------------------------------------------------------------------------

ν΄κ²° : client λ‘λ© μκ°μ 3μ΄λ‘ νλ€κ° 7μ΄λ‘ λ³κ²½ λ° μ¬μ΄νΈ μ μΌ νλ¨ κΉμ§ auto scroll λμ
      νμ€νΈ μ€μΈ κΈ°κΈ°μ μ¬μμ΄λ μΈν°λ· μλ, μΉμλ²μ μλ λ°λΌ κ²½νμ μΌλ‘ νμ€νΈν΄μΌν¨.


λ¬Έμ  2: puppeteerμ μ΄μ©ν ν¬λ‘€λ§ κ° detail νμ΄μ§ κ΅¬μ‘°κ° λ¬λΌ elementμ λͺ» λ°μ μ€λ ν¬λ‘€λ§ μλ¬
-----------------------------------------------------------------------------------

ν΄κ²° : νμ΄μ§ κ΅¬μ‘°κ° λ€λ₯Έ λΆλΆμ elementμ μ¬λ¬κ°μ§ μ‘°κ±΄λ¬ΈμΌλ‘ μ²λ¦¬νμ¬ μλ¬ ν΄κ²°


λ¬Έμ  3: commnet μμ , μ­μ μ nicknameμ μ°Ύμ§ λͺ»νλ νμ
-----------------------------------------------------------------------------------

ν΄κ²° : res.localλ‘ μ μ λ₯Ό μλ΅ λ°μμΌνλλ° μ€νλ‘ req.local μμ²­μ λ³΄λ΄μ μ€ν μμ μΌλ‘ ν΄κ²°



# λ κ΅¬νν΄λ³΄κ³  μΆμ κΈ°λ₯

 - λλκΈ μμ± λ° μ’μμ μΆκ°
 - νμ΄μ§ λ€μ΄μ κΈ°λ₯ μΆκ°
 - ν¬λ‘€λ§ μλν
 - ν¨μ€ν¬νΈ κ΅¬ν
 - 
