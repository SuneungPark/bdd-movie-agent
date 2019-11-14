var movieGenreMap = require('./movieGenreMap.js')

/**
 * An array of quiz questions.
 * The questions are of multiple choice format, where the user must select a single option.
 * There is no right or wrong answer. Each option defines an array of outcomes that are tallied to calculate a final quiz result. 
 * 
 * Example:
 * {
 *   question: "What animal would you want to be for one day?"          // The question statement
 *   options: [                                                         // An array of multiple choice options
 *     {                                                                // An option
 *       text: "Bottlenose Dolphin",                                    // The option statement
 *       match: [                                                       // An array of regex match patterns to look for in the user's response. If a match is found, this option will be selected.
 *         "bottle[-\s]?nose", "dolphin"                                // For example: "bottle nose", "bottle-nose", "I wanna be a dolphin"
 *       ],
 *       outcome: [                                                     // An array of outcomes if this option is chosen
 *         movieGenreMap.Documentary.bxb,                               // A movie genre in bxb format from the movieGenreMap.js file
 *         movieGenreMap.Music.bxb,
 *         movieGenreMap.ScienceFiction.bxb
 *       ],
 *       commentary: "Smart choice."                                      // Bixby response feedback if the user chooses this option
 *     },
 *     {
 *       text: "Black Cat",
 *       match: [
 *         "cat"
 *       ],
 *       outcome: [
 *         movieGenreMap.Horror.bxb, 
 *         movieGenreMap.Mystery.bxb,
 *         movieGenreMap.Romance.bxb
 *       ],
 *       commentary: "Yay nap time!"
 *     },
 *     {
 *       text: "Bald Eagle",
 *       match: [
 *         "bald", "eagle"
 *       ],
 *       outcome: [
 *         movieGenreMap.Drama.bxb,
 *         movieGenreMap.Thriller.bxb,
 *         movieGenreMap.War.bxb
 *       ],
 *       commentary: "Very majestic."
 *     },
 *     { 
 *       text: "Golden Retriever",
 *       match: [
 *         "goldem, "retriever", "dog"
 *       ],
 *       outcome: [
 *         movieGenreMap.Animation.bxb,
 *         movieGenreMap.Comedy.bxb,
 *         movieGenreMap.Family.bxb
 *       ],
 *       commentary: "Good choice."
 *      }
 *   ]
 * }
 * 
 **/
 
module.exports = [
  {
    question: "어떤 여행을 선호하나요?",
    options: [
      {
        text: "숲에서 캠핑하기, Wi-Fi는 없어도 되요",
        match: ["캠핑", "숲", "wi[-\s]fi"],
        outcome: [movieGenreMap.Action.bxb, movieGenreMap.Adventure.bxb, movieGenreMap.Horror.bxb, movieGenreMap.Thriller.bxb],
        commentary: "재밌겠어요!"
      },
      {
        text: "모든 것이 갖춰진 크루즈를 타고 섬 리조트로 여행하기",
        match: ["모든 것이 갖춰진", "크루즈", "섬", "리조트"],
        outcome: [movieGenreMap.Comedy.bxb, movieGenreMap.Family.bxb, movieGenreMap.Romance.bxb],
        commentary: "편안한 여행을 원하시네요!"
      },
    ],
  },
  {
    question: "일등석으로 준비했습니다! 스테이크를 얼만큼 구울지 승무원에게 알려주세요.",
    options: [
      {
        text: "웰던(Well-done)",
        match: ["웰던"],
        outcome: [movieGenreMap.History.bxb, movieGenreMap.Western.bxb],
        commentary: "알겠습니다."
      },
      {
        text: "미디움(Medium)",
        match: ["미디움"],
        outcome: [movieGenreMap.Mystery.bxb, movieGenreMap.Drama.bxb],
        commentary: "알겠습니다."
      },
      {
        text: "레어(Rare)",
        match: ["레어"],
        outcome: [movieGenreMap.Crime.bxb, movieGenreMap.Horror.bxb, movieGenreMap.War.bxb],
        commentary: "알겠습니다."
      },
      { text: "채식주의자입니다",
        match: ["채식주의자", "비건"],
        outcome: [movieGenreMap.Documentary.bxb],
        commentary: "문제 없어요! 콩고기도 준비되어 있어요"}
    ],
  },
  {
    question: "당신의 친구가 번지 점프를 하자고 하면, 뭐라고 하시겠습니까?",
    options: [
      {
        text: "좋아! 언제?",
        match: ["좋아", "예스", "언제"],
        outcome: [movieGenreMap.Action.bxb, movieGenreMap.Adventure.bxb, movieGenreMap.Thriller.bxb, movieGenreMap.War.bxb, movieGenreMap.Western.bxb, movieGenreMap.ScienceFiction.bxb],
        commentary: "와우!"
      },
      {
        text: "그럴까...",
        match: ["그럴까"],
        outcome: [movieGenreMap.Comedy.bxb, movieGenreMap.Crime.bxb, movieGenreMap.Mystery.bxb, movieGenreMap.Romance.bxb],
        commentary: "알겠습니다."
      },
      {
        text: "싫어",
        match: ["싫어", "노"],
        outcome: [movieGenreMap.Family.bxb],
        commentary: "안 해도 되요."
      },
    ],
  },
  {
    question: "모험을 떠나기 전에 어느쪽에 앉고 싶은지 선택해 주세요",
    options: [
      {
        text: "창문쪽 좌석",
        match: ["윈도우", "창문"],
        outcome: [movieGenreMap.Adventure.bxb, movieGenreMap.Action.bxb],
        commentary: "신나는 광경을 담은 영화를 보여드리겠습니다."
      },
      {
        text: "복도쪽 좌석",
        match: ["복도"],
        outcome: [movieGenreMap.Animation.bxb, movieGenreMap.Comedy.bxb],
        commentary: "알겠습니다, 편안한 여행 준비할께요"
      },
    ],
  },
    {
    question: "여행 중 먹고 싶은 스낵은?",
    options: [
      {
        text: "팝콘",
        match: ["팝콘"],
        outcome: [movieGenreMap.Thriller.bxb, movieGenreMap.Action.bxb],
        commentary: "역시 팝콘이죠."
      },
      {
        text: "초콜렛",
        match: ["초콜렛", "초콜릿"],
        outcome: [movieGenreMap.Fantasy.bxb, movieGenreMap.Romance.bxb],
        commentary: "Smooth."
      },
      {
        text: "신선한 과일과 채소",
        match: ["과일", "채소"],
        outcome: [movieGenreMap.Documentary.bxb, movieGenreMap.History.bxb],
        commentary: "건강한 간식이네요."
      },
      {
        text: "피자",
        match: ["피자"],
        outcome: [movieGenreMap.Animation.bxb, movieGenreMap.Comedy.bxb],
        commentary: "알겠습니다"
      },
    ],
  },
  {
    question: "아이들과 동행하십니까?",
    options: [
      {
        text: "네",
        match: ["네", "그럼요", "그렇습니다"],
        outcome: [movieGenreMap.Animation.bxb, movieGenreMap.Family.bxb],
        commentary: "알겠습니다."
      },
      {
        text: "아니오",
        match: ["아니오", "아니", "노"],
        outcome: [movieGenreMap.Crime.bxb, movieGenreMap.Horror.bxb, movieGenreMap.Romance.bxb, movieGenreMap.War.bxb],
        commentary: "알겠습니다."
      },
    ],
  },
  {
    question: "어떤 역사적 인물과 주말 여행에 동행하고 싶나요?",
    options: [
      {
        text: "광개토대왕, 고구려 19대 왕",
        match: ["광개토대왕", "고구려", "왕"],
        outcome: [movieGenreMap.Adventure.bxb, movieGenreMap.Western.bxb],
        commentary: "흥미진진하네요!"
      },
      {
        text: "박경리, 한국의 소설가",
        match: ["박경리", "소설가"],
        outcome: [movieGenreMap.ScienceFiction.bxb, movieGenreMap.War.bxb],
        commentary: "알겠습니다!"
      },
      {
        text: "프레디 머큐리, 영국의 록 보컬리스트",
        match: ["프레디", "머큐리", "보컬리스트", "록", "락"],
        outcome: [movieGenreMap.Drama.bxb, movieGenreMap.Music.bxb],
        commentary: "신나요!"
      },
      {
        text: "프라다 칼로, 멕시코 화가",
        match: ["프라다", "칼로", "화가"],
        outcome: [movieGenreMap.Animation.bxb, movieGenreMap.Fantasy.bxb],
        commentary: "Bien!"
      },
    ],
  },
  {
    question: "비가 온다는 예보가 있네요. 실내에서 하고 싶은 활동을 고르세요",
    options: [
      {
        text: "퍼즐 풀기와 독서",
        match: ["퍼즐", "독서"],
        outcome: [movieGenreMap.Crime.bxb, movieGenreMap.Documentary.bxb, movieGenreMap.Mystery.bxb],
        commentary: "재밌겠네요."
      },
      {
        text: "비디오 게임하기",
        match: ["게임"],
        outcome: [movieGenreMap.Music.bxb, movieGenreMap.ScienceFiction.bxb],
        commentary: "와우!"
      },
      {
        text: "체육관에서 운동하기",
        match: ["체육관", "운동"],
        outcome: [movieGenreMap.Thriller.bxb],
        commentary: "그런 취향이시군요!"
      },
    ],
  },
  {
    question: "여행 중에 읽을 책을 고른다면?",
    options: [
      {
        text: "판타지 소설책",
        match: ["판타지", "소설책"],
        outcome: [movieGenreMap.Drama.bxb, movieGenreMap.Fantasy.bxb, movieGenreMap.Music.bxb, movieGenreMap.Romance.bxb],
        commentary: "판타스틱!"
      },
      {
        text: "새로 나온 자기계발에 관한 베스트셀러",
        match: ["자기 개발", "베스트셀러"],
        outcome: [movieGenreMap.Documentary.bxb, movieGenreMap.Music.bxb, movieGenreMap.Family.bxb],
        commentary: "할 수 있습니다!"
      },
      {
        text: "전자책으로 된 두어 권의 과학 서적",
        match: ["과학", "서적", "전자책"],
        outcome: [movieGenreMap.Documentary.bxb, movieGenreMap.History.bxb, movieGenreMap.ScienceFiction.bxb],
        commentary: "그렇군요."
      },
      {
        text: "만화",
        match: ["만화", "코믹스"],
        outcome: [movieGenreMap.Animation.bxb, movieGenreMap.Comedy.bxb, movieGenreMap.Fantasy.bxb],
        commentary: "Cool!"
      },
    ],
  },
  {
    question: "당신은 저녁형 인간인가요 아침형 인간인가요?",
    options: [
      {
        text: "저녁형 인간. 어차피 죽으면 실컷 잘 수 있어.",
        match: ["저녁형", "죽으면"],
        outcome: [movieGenreMap.Crime.bxb, movieGenreMap.Horror.bxb, movieGenreMap.Mystery.bxb, movieGenreMap.Thriller.bxb],
        commentary: "좋아요, 늦은 밤에 즐길 거리를 찾아볼께요."
      },
      {
        text: "둘 다 아님. 나무 늘보에 가깝달까",
        match: ["아님", "나무 늘보"],
        outcome: [movieGenreMap.Drama.bxb, movieGenreMap.War.bxb, movieGenreMap.Fantasy.bxb, movieGenreMap.ScienceFiction.bxb],
        commentary: "알겠어요. 당신에게 활력을 줄만한 것으로 찾아볼께요."
      },
      {
        text: "아침형 인간. 커피만 있으면 준비 완료",
        match: ["아침형", "커피", "완료", "준비"],
        outcome: [movieGenreMap.Action.bxb, movieGenreMap.Adventure.bxb, movieGenreMap.History.bxb, movieGenreMap.Western.bxb],
        commentary: "좋아요, 재밌는 걸 찾아볼께요."
      },
    ],
  },

]