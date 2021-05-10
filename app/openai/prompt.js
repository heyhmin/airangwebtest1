const theme = '어린이들이 좋아하는 동요 베스트 가사\n\n';
const prompts = [
  "input: 봄볕\noutput: 파란잔디가 핀 봄언덕에 봄볕이 딩군다 잔디를 사르르 쓰다듬어 내리는 바람\n\ninput: 봄비\noutput: 봄비는 소곤소곤 노래하며 내려와 예쁜 꽃잎 피우고 새싹 돋게 하지요\n\ninput: 봄바람\noutput: 봄바람이 살랑살랑 부는 아침에 하얀 꽃망울이 송이송이 맺혔어요\n\ninput: 봄빛\noutput: ",
  "input: 해님\noutput: 어서 일어나세요 방긋 웃는 웃음쟁이 해님 엄마 아빠도 일어나세요 해님이 인사해요 기지개를 쭉쭉 켜요 쑥쑥 자라는 우리들 행복한 아침 인사해요\n\ninput: 햇살\noutput: 아침 햇살이 찾아들면 가슴을 펴고 햇살을 흔들며 노래하는 나무 오늘은 날씨가 좋아요 햇살이 눈부셔요\n\ninput: 햇빛\noutput: ",
  "input: 꽃\noutput: 나는 꽃들의 천사가 되어 정다운 얘기 나누며 예쁜 꽃처럼 고운 마음으로 사랑의 꽃 뿌려요\n\ninput: 초롱꽃\noutput: 산 속 마을에 밤깊어 별내리는 뜨락에 예쁜 초롱꽃 한 송이 호롱불을 밝혀요\n\ninput: 꽃망울\noutput: 하늘 위에 피는 별처럼 미소를 걸고 있는 꽃망울 내게 전해요\n\ninput: 꽃잎\noutput: ",
  "input: 친구\noutput: 나는 친구의 고운 눈빛을 가만히 바라보았지 초롱 초롱 빛나는 꿈 간직한 나의 친구야\n\ninput: 친구야\noutput: 친구야 햇살이 따사로운 날이면 내가 너에게 구름이 되어줄게 친구야 보슬보슬 비오는 날이면 내가 너에게 우산이 되어줄게\n\ninput: 친구\noutput: ",
  "input: 자연의 향기\noutput: 꽃으로 뛰노는 바다 자연의 향기가 샘솟는 푸른 나라\n\ninput: 자연의 노래\noutput: 우리들의 웃음이 햇살로 꽃피는 들판 자연의 노래가 샘솟는 푸른 나라\n\ninput: 자연의 사랑\noutput: 향긋한 꽃들이 노래해요 팔랑팔랑 나비들이 춤을 춰요 자연의 사랑을 느끼며 모두 함께 즐겨요\n\ninput: 자연의 행복\noutput: ",
  "input: 아침 노래\noutput: 산새가 아침을 노래하네 들새가 아침을 노래하네\n\ninput: 이른 아침\noutput: 이슬비 내리는 이른 아침에 우산 셋이 나란히 걸어갑니다 파란 우산 검정 우산 찢어진 우산\n\ninput: 아침 햇빛\noutput: 봄을 맞이하는 아침 햇빛은 따사로워요 여름을 맞이하는 아침 햇빛은 싱그러워요\n\ninput: 아침 사랑\noutput: ",
  "input: 달님\noutput: 달님은 영창으로 은구슬 금구슬을 보내는 이 한밤 잘 자라 우리 아가\n\ninput: 달빛\noutput: 어제밤엔 달빛도 아빠의 웃음처럼 나의 창에 기대어 포근히 날 재워줬어요\n\ninput: 둥근 달\noutput: 달 달 무슨 달 쟁반같이 둥근 달 어디 어디 떳나 남산 위에 떳지\n\ninput: 새벽 달\noutput: ",
  "input: 아기 곰\noutput: 동그란 눈에 까만 작은 코 하얀 털옷을 입은 예쁜 아기 곰 언제나 너를 바라보면서 작은 소망 얘기하지\n\ninput: 아기 곰\noutput: 너의 곁에 있으면 나는 행복해 어떤 비밀이라도 말할 수 있어 까만 작은 코에 입을 맞추면 수줍어 얼굴을 붉히는 예쁜 아기 곰\n\ninput: 아기 곰\noutput: ",
  "input: 사랑\noutput: 사랑해요 이 한마디 참 좋은 말 우리 식구 자고 나면 주고받는 말\n\ninput: 온종일\noutput: 이 말이 좋아서 온종일 일 맛나지요 이 말이 좋아서 온종일 가슴이 콩닥콩닥 뛴데요\n\ninput: 좋은 말\noutput: 사랑해요 이 한마디 참 좋은 말 나는 나는 이 한 마디가 정말 좋아요\n\ninput: 사랑\noutput: ",
  "input: 밝은\noutput: 행운을 가져다 준다는 수줍은 얼굴의 미소 빛처럼 밝은 마음으로 너를 닮고 싶어\n\ninput: 파란\noutput: 산도 들도 나무도 파란 잎으로 파랗게 덮인 속에서 파아란 하늘보고 자라니까요\n\ninput: 하얀\noutput: 산도 들도 지붕도 하얀 눈으로 하얗게 덮인 속에서 깨끗한 마음으로 자라니까요\n\ninput: 밝은\noutput: ",
  "input: 꿈나라\noutput: 어젯밤 꿈나라에 작은 코끼리가 춤을 추었고 크레파스 병정들은 나뭇잎을 타고 놀았죠\n\ninput: 파란나라\noutput: 파란나라를 보았니 꿈과 사랑이 가득한 맑은 강물이 흐르는 울타리가 없는 나라\n\ninput: 파란나라\noutput: 나 파랑새를 알아요 저 무지개 넘어 파란 하늘에 파란나라 있나요\n\ninput: 꿈나라\noutput: ",
  "input: 꿈나라\noutput: 어젯밤 꿈나라에 작은 코끼리가 춤을 추었고 크레파스 병정들은 나뭇잎을 타고 놀았죠\n\ninput: 새파란나라\noutput: 우리가 한번 해봐요 온세상 모두 손잡고 새파란 마음 한마음 새파란나라 지어요 우리 손으로 지어요 어린이 손에 주세요\n\ninput: 꿈나라\noutput: ",
  "input: 푸른하늘\noutput: 마음을 열어 하늘을 보라 넓고 높고 푸른하늘 우리들은 새싹들이다\n\ninput: 파란하늘\noutput: 파란하늘 드리운 푸른 언덕에 아기 염소 여럿이 풀을 뜯고 놀아요 해처럼 밝은 얼굴로\n\ninput: 솜사탕\noutput: 나뭇가지에 실처럼 날아든 솜사탕 하얀 눈처럼 희고도 깨끗한 솜사탕\n\ninput: 푸른 하늘\noutput: ",
  "input: 해\noutput: 해가 반짝 곱게 피어나면 너무나 기다렸나 봐 신나는 친구들\n\ninput: 햇살\noutput: 탐스런 나뭇잎만큼 가득 열린 참새들 열린 참새만큼 고운노래 들려주는 나무 하늘에 그려지는 오선지엔 햇살 한 줌 내 노래 한 가락\n\ninput: 햇살\noutput: 햇살을 흔들며 노래하는 나무\n\ninput: 햇살\noutput: ",
  "input: 숲 속\noutput: 숲 속을 걸어요 산새들이 속삭이는 꽃향기가 그윽한 햇님도 쉬었다 가는 다람쥐가 넘나드는 길\n\ninput: 숲 속\noutput: 정다운 얼굴로 우리 모두 맑은 바람 솔바람이는 숲 속을 걸어요\n\ninput: 숲 속\noutput: 달님도 쉬었다 가는 산노루가 넘나드는 길 웃음띤 얼굴로 우리 모두 숲속을 걸어요\n\ninput: 숲 속\noutput: ",
  "input: 색종이\noutput: 색종이를 곱게 접어서 물감으로 예쁘게 색칠하고 알록달록 오색실 꼬리 달아 비행기를 만들자\n\ninput: 바닷가\noutput: 파란 바닷물은 꽃무늬 만드네 모래마저 금같은 바닷가에서\n\ninput: 희망\noutput: 희망과 사랑을 심어주면서 아하 신나게 달린다 귀여운 꼬마 자동차 붕붕\n\ninput: 희망\noutput: ",
  "input: 구름\noutput: 푸른꿈이 자란다 곱고 고운꿈 두리둥실 떠간다 구름이 되어\n\ninput: 구름모자\noutput: 구름모자 썼네 나비같이 훨훨 날아서 살금살금 다가가서 구름모자 벗겨오지\n\ninput: 구름\noutput: 꿈 속에 나는 날개 달고 구름보다 더 높이 올라 올라 무지개 동산에서 놀고 갔지요\n\ninput: 구름\noutput: ",
  "input: 작은별\noutput: 반짝반짝 작은별 아름답게 비치네 동쪽하늘에서도 서쪽하늘에서도 반짝반짝 작은 별 아름답게 비치네\n\ninput: 별님\noutput: 햇님 되자 달님 되자 별님이 되자 너른세상 불을 밝힐 큰빛이 되자 무지개 빛깔 아름다운꿈 모두 우리 차지다 너와 나 함께 우리가 되어 힘차게 나가자\n\ninput: 별님\noutput: ",
  "input: 다람쥐\noutput: 나는 숲 속의 음악가 조그만 다람쥐 아주 익숙한 솜씨로 바이올린 켜지요\n\ninput: 다람쥐\noutput: 산골짝에 다람쥐 아기 다람쥐 도토리 점심가지고 소풍을 간다\n\ninput: 다람쥐\noutput: 쪼로로롱 산새가 노래하는 숲 속에 예쁜 아기 다람쥐가 살고 있었어요\n\ninput: 다람쥐\noutput: ",
  "input: 친구\noutput: 나는 행복해 정말 행복해 내 친구와 함께라면\n\ninput: 친구\noutput: 솔솔 바람부는 뒷동산에 동네 친구 모두 모여서 파란 하늘 향해 날리면 새처럼 날아간다 하늘 끝까지 날아라 높이 더 높이\n\ninput: 친구\noutput: 한줄기의 따스한 햇살 받으며 희망으로 가득한 나의 친구야\n\ninput: 친구\noutput: ",
  "input: 눈\noutput: 펄펄 눈이 옵니다 바람 타고 눈이 옵니다 하늘나라 선녀님들이 송이송이 하얀 솜을 자꾸자꾸 뿌려줍니다 자꾸자꾸 뿌려줍니다\n\ninput: 흰 눈\noutput: 흰 눈 사이로 썰매를 타고 달리는 기분 상쾌도 하다 종이 울려서 장단 맞추니 흥겨워서 소리 높여 노래부른다 종소리 울려라\n\ninput: 흰 눈\noutput: ",
  "input: 눈꽃송이\noutput: 송이송이 눈꽃송이 하얀꽃송이 하늘에서 내려오는 하얀꽃송이 나무에도 들판에도 동구밖에도 골고루 나부끼네 아름다워라\n\ninput: 눈\noutput: 나는 눈이 좋아서 꿈에 눈이 오나 봐 온 세상이 모두 하얀 나라였지 어젯밤 꿈 속에\n\ninput: 눈꽃송이\noutput: ",
  "input: 노오란 꽃\noutput: 개나리 노오란 꽃 그늘 아래 가지런히 놓여 있는 꼬까신 하나 아기는 살짝 신벗어 놓고 맨발로 한들 한들 나들이 갔나 가지런히 가다리는 꼬까신 하나\n\ninput: 아카시아 꽃\noutput: 얼굴 마주 보며 생긋 아카시아 꽃 하얗게 핀 먼 옛날에 과수원길\n\ninput: 노오란 꽃\noutput: ",
  "input: 하얀 꽃\noutput: 하얀 꽃 이파리 눈송이처럼 날리네 향긋한 꽃냄새가 실바람타고 솔솔\n\ninput: 예쁜 꽃\noutput: 깊고 작은 산골짜기 사이로 맑은 물 흐르는 작은 샘터에 예쁜 꽃들 사이에 살짝 숨겨진 이슬 먹고 피어난 네잎 클로버\n\ninput: 하얀 꽃\noutput: ",
  "input: 봄나들이\noutput: 나리나리 개나리 입에따다 물고요 병아리떼 쫑쫑쫑 봄나들이 갑니다\n\ninput: 봄바람\noutput: 봄바람에 꽃잎도 방긋방긋 웃으며 참새도 짹짹짹 노래하며 춤춘다\n\ninput: 봄바람\noutput: 솔솔 부는 봄바람 쌓인 눈 녹이고 잔디밭엔 새싹이 파릇파릇 나고요\n\ninput: 봄바람\noutput: "
];

function getRandom() {
  return Math.floor(Math.random() * prompts.length);
}

export default function selectedPrompts() {
  return (
    theme + prompts[getRandom()]
  );
}
