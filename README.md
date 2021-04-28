# airangwebtest1

1. Local에서는 회원가입, 로그인 가능 <br>
1.1. Mysql 접속 시 Users, User_Roles 등의 테이블에 유저 정보가 업데이트 되는 것도 확인 가능 <br>
1.2. Mysql이 켜져 있어야 Mysql command line client에 접속 가능함 <br>
1.3. Mysql workbench로 접속하면 자동으로 Mysql을 켜줌 <br><br>

2. heroku에서는 Network error로 출력됨 <br>
2.1. 회원가입, 로그인 불가능 <br>
2.2. 같은 에러가 로컬에서도 발생했는데 잘 기억 안남. 엄청 간단한 문제였던 것 같음. DB가 꺼져있다던가 하는.. <br>
2.3. 프로필 편집 기능을 제공하지 않는 상태임 <br><br>

참고 : https://bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/
