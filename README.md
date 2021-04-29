# airangwebtest1

1. Local에서는 회원가입, 로그인 가능 <br>
1.1. Mysql 접속 시 Users, User_Roles 등의 테이블에 유저 정보가 업데이트 되는 것도 확인 가능 <br>
1.2. Mysql이 켜져 있어야 Mysql command line client에 접속 가능함 <br>
1.3. 서비스 -> MySQL80 실행 <br><br>

2. heroku에서는 Network error로 출력됨 <br>
2.1. 회원가입, 로그인 불가능 <br>
2.2. 같은 에러가 로컬에서도 발생했는데 잘 기억 안남. DB off / Port 번호 변경 등..  <br>
2.3. cors()의 origin 값이 문제라던가..? <br><br>


3. 프로필 편집 기능을 제공하지 않는 상태임 <br><br>

4. services의 ~.service.js const API_URL 수정
5. https://airang-web-test1.herokuapp.comall/ 에서 뭘 받아오려고 ㅎ는데 이걸 com/api/auth, com/api/test로 바꿔야 할 듯..

참고 : https://bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/
