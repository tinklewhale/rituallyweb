export const questions = [
  {
    id: 1,
    question: "평소 Y존에 대해 가장 먼저 떠오르는 고민은?",
    options: [
      { text: "속옷 자국이나 착색처럼, 톤이 어두워 보이는 게 신경 쓰인다.", scores: { GLOW: 1 } },
      { text: "건조하고 쓸리는 느낌, 탄력이 떨어진 느낌이 신경 쓰인다.", scores: { FIRM: 1 } },
      { text: "생리기간이나 운동 후처럼, 특정 날에만 냄새나 불편함이 확 느껴진다.", scores: { SPECIAL: 1 } },
      { text: "위 고민이 조금씩 다 있고, 전반적으로 컨디션을 정리하고 싶다.", scores: { FULL: 1 } }
    ]
  },
  {
    id: 2,
    question: "평소 Y존에 대해 가장 자주 느끼는 상태는?",
    options: [
      { text: "이유 없이 빨갛게 달아오르거나 가렵고, 환경이 조금만 바뀌어도 예민해지는 편이다.", scores: { SPECIAL: 1 } },
      { text: "새 속옷이나 생리용품을 바꿨을 때만 가끔 가렵거나 붓는 편이다.", scores: { CLEAN: 1, SPECIAL: 1 } },
      { text: "특별히 티 나는 문제는 없고, 가끔 건조하거나 톤이 칙칙해 보이는 정도다.", scores: { GLOW: 1, FIRM: 1 } },
      { text: "웬만한 상황에서도 크게 신경 쓰이지 않고, 컨디션이 크게 달라지지 않는 편이다.", scores: { CLEAN: 1, FULL: 1 } }
    ]
  },
  {
    id: 3,
    question: "생리기간에 평소 나의 관리 방식은?",
    options: [
      { text: "평소 쓰던 것만 쓰고, 새로 이것저것 시도하진 않는다.", scores: { CLEAN: 1 } },
      { text: "패드나 속옷을 자주 갈아입고, 샤워도 신경 써서 자주 해주는 편이다.", scores: { CLEAN: 1, SPECIAL: 1 } },
      { text: "몸 상태에 따라 재질이나 타입을 바꿔 쓰면서, 나한테 맞는 걸 찾으려는 편이다.", scores: { GLOW: 1, FIRM: 1, SPECIAL: 1 } },
      { text: "컨디션이 떨어질수록 따뜻한 샤워, 향 좋거나 촉감 좋은 제품 등으로 나를 달래주는 편이다.", scores: { FULL: 1 } }
    ]
  },
  {
    id: 4,
    question: "생리기간에 ‘가장’ 거슬리는 건 무엇에 가까운가요?",
    options: [
      { text: "생리 전·후로 Y존 톤이 더 칙칙해지는 느낌.", scores: { GLOW: 1 } },
      { text: "건조해지고 쓸리는 느낌, 피부가 예민해지는 것.", scores: { FIRM: 1 } },
      { text: "냄새·찌뿌둥함·청결감이 떨어지는 느낌.", scores: { SPECIAL: 1, CLEAN: 1 } },
      { text: "이 시기를 어떻게 관리해야 할지 루틴이 애매한 것.", scores: { FULL: 1 } }
    ]
  },
  {
    id: 5,
    question: "생리용품·속옷·케어 제품을 고를 때 가장 먼저 떠오르는 건?",
    options: [
      { text: "내 몸에 자극이 적고, 민감한 날에도 편안할지.", scores: { SPECIAL: 1, FIRM: 1 } },
      { text: "오래 나가 있어도 찝찝하지 않고, 상쾌하게 유지될지.", scores: { CLEAN: 1, SPECIAL: 1 } },
      { text: "성분, 인증, 재질처럼 ‘내 몸에 뭘 바르는지’가 명확한지.", scores: { GLOW: 1, FIRM: 1 } },
      { text: "매일 볼 때 기분 좋아지는 디자인이나 사용감인지.", scores: { FULL: 1 } }
    ]
  },
  {
    id: 6,
    question: "그중에서 하나만 고르라면, 나에게 제일 중요한 포인트는?",
    options: [
      { text: "눈에 보이는 톤/착색이 개선되는 느낌.", scores: { GLOW: 1 } },
      { text: "탄력·보습, 쫀쫀하고 편안한 촉감.", scores: { FIRM: 1 } },
      { text: "불편한 냄새·찌뿌둥함이 줄어드는 것.", scores: { CLEAN: 1, SPECIAL: 1 } },
      { text: "청결·톤·탄력까지 한 번에 관리되는 루틴.", scores: { FULL: 1 } }
    ]
  },
  {
    id: 7,
    question: "새로운 케어 제품을 봤을 때 나의 첫 반응은?",
    options: [
      { text: "리뷰, 후기, 성분을 찾아보고 충분히 비교해본 뒤에야 써 본다.", scores: { GLOW: 1, FIRM: 1 } },
      { text: "“지금 나한테 필요한 문제(건조함, 냄새, 착색 등)를 해결해줄까?”부터 떠올린다.", scores: { GLOW: 0.5, FIRM: 0.5, CLEAN: 0.5, SPECIAL: 0.5 } }, // Distributed points as requested
      { text: "루틴이 복잡해지는 걸 싫어해서, 기존 것 대신 쓸 수 있을지 먼저 생각해본다.", scores: { CLEAN: 1, SPECIAL: 1 } },
      { text: "패키지, 향, 촉감 같은 감각적인 부분이 먼저 눈에 들어온다.", scores: { FULL: 1 } }
    ]
  },
  {
    id: 8,
    question: "평소 나의 ‘관리 스타일’을 고르자면?",
    options: [
      { text: "신경 쓰이는 부위가 생기면 그 부분만 집중해서 관리해본다.", scores: { GLOW: 1, FIRM: 1 } },
      { text: "탄력이나 피부 결이 변하는 데 꽤 예민한 편이다.", scores: { FIRM: 1 } },
      { text: "컨디션이 안 좋은 날에만 따로 챙겨서 케어한다.", scores: { SPECIAL: 1 } },
      { text: "아예 루틴 세트를 정해놓고, 그 안에서 관리하는 걸 좋아한다.", scores: { FULL: 1 } }
    ]
  },
  {
    id: 9,
    question: "케어 제품을 쓸 때 ‘향’에 대한 나의 태도는?",
    options: [
      { text: "향이 거의 없거나 아주 연한 게 마음이 놓인다.", scores: { SPECIAL: 1, CLEAN: 1 } },
      { text: "뽀송하고 상쾌한 느낌 정도는 살짝 나는 게 좋다.", scores: { CLEAN: 1, SPECIAL: 1 } },
      { text: "향이 강하면 “성분은 괜찮나?”부터 생각하게 된다.", scores: { GLOW: 1, FIRM: 1 } },
      { text: "하루 중 작은 힐링이라, 향이 분명하게 느껴지는 게 좋다.", scores: { FULL: 1 } }
    ]
  },
  {
    id: 10,
    question: "아래 문장 중 가장 공감되는 말을 고른다면?",
    options: [
      { text: "“칙칙해 보이면 아무리 깨끗해도 신경 쓰인다.”", scores: { GLOW: 1 } },
      { text: "“탱탱하고 촉촉한 느낌이 곧 안심이다.”", scores: { FIRM: 1 } },
      { text: "“예민한 날만 편하면 일단 살 것 같다.”", scores: { SPECIAL: 1, CLEAN: 1 } },
      { text: "“얼굴처럼 Y존도 루틴을 짜줘야 마음이 편하다.”", scores: { FULL: 1 } }
    ]
  }
];
