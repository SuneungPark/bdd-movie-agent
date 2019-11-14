<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Movie Agent Sample Capsule</h1>
</p>

Watching movies is a way to travel to new worlds.
This Capsule is like a travel agent to help you find your next movie adventure.

## Usage

1. Clone this repo.
1. Get started with the [Bixby Studio](https://bixbydevelopers.com/dev/docs/dev-guide/developers/ide).
1. Run a query in the [Simulator](https://bixbydevelopers.com/dev/docs/dev-guide/developers/ide.simulator).
   1. Open the Simulator window.
   1. Pick a target device and locale.
   1. Compile NL.
   1. Enter your query by text or voice. See use cases below for example utterances.

## Use Cases

| Use Cases | Example Utterances |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Recommend a movie: <br> When no other inputs are specified, prompt for a genre <br> - Provide a selection of genres, with the "genre of the day" highlighted at the top <br> - Display a conversation driver "Help me choose" to launch the quiz to infer a genre | "What movie should I watch?" |
| Play a quiz: <br> - Launch a quiz to infer a genre by asking a series of personality type questions <br> - The genre will be used to recommend a movie. | "Play the movie quiz" <br> "Help me choose" when on the genre prompt |
| Recommend a movie by genre | "Recommend a fantasy movie" |
| Browse movies by release window | "Show me movies released last spring" |
| Find movies involving person (cast or crew member) <br> When multiple people share the same name, disambiguate with a selection prompt | "What movies feature Emma Watson" <br> "Find movies by James Cameron" |
| Find movies with a combination of inputs | "What movies did Xavier Dolan work on last year?" <br> "What documentaries came out last spring?" |
| 영화 추천하기:<br/> 다른 조건이 명시되지 않았을 경우, 장르를 물어본다 - "오늘의 장르"라는 제목으로 선택 가능한 장르 리스트를 보여준다. 장르를 유추하기 위한 퀴즈를 시작하기 위해서 '선택 도와주기'라는 conversation driver를 출력. | "어떤 영화를 봐야 할까?" |
| 퀴즈 시작하기:<br/> 취향에 대한 질문들로 추천 장르를 유추하기 위한 퀴즈 시작 - 선택된 장르는 영화를 추천하기 위해 사용된다. | "영화 퀴즈 실행"<br/> 장르 prompt에서 "선택 도와줘"라고 말 할 수 있다. |
| 장르로 영화 추천하기| "판타지 영화 추천해줘" |
| 배우나 감독으로 영화 찾기:<br/> 동명이인이 있을 경우, 선택 prompt가 뜬다. | "엠마 왓슨이 주연한 영화 보여줘"<br/>"제임스 카메론 감독의 영화 찾아줘' |
| 여러 조건으로 영화 찾기| "자비에 돌란이 작년에 작업한 영화가 뭐야?"<br/> "작년 여름에 개봉한 다큐멘터리 알려줘" |

## Code Puzzles
For hands-on exercises that build upon this Capsule, head over to the [Code
Puzzles](./codelab/CODELAB.md).

## References

### Data Source

The Movie DB (TMDb). This product uses the TMDb API but is not endorsed or certified by TMDb.

https://www.themoviedb.org

https://www.themoviedb.org/documentation/api

https://developers.themoviedb.org/3

https://www.themoviedb.org/documentation/api/terms-of-use

### Bixby

[Bixby Developer Center](https://bixbydevelopers.com/)
