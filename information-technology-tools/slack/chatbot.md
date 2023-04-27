# [slack] bot 생성하기

> tistory 블로그 댓글을 utterences에서 giscus로 변환했습니다. *참고: [Utterances 에서 Giscus 로 마이그레이션하기](https://jojoldu.tistory.com/704)*  그런데 에서처럼 새 댓글의 경우 알람이 오지 않습니다. 그래서 slack으로 알람을 받는 방법을 작성해 보기로 했습니다(텔레그램의 경우 향로님의 [Giscus 댓글, 텔레그램 (Telegram) 으로 알람 받기](https://jojoldu.tistory.com/705?category=777282)에서 확인하실 수 있습니다.)

# bot 생성

가장 먼저 봇 생성입니다. giscus 댓글 알람을 받기 위해선 봇을 생성해야 합니다.

## APP 생성

>  https://api.slack.com/apps

봇 앱을 생성하기 위해 위의 링크를 클릭합니다. 

![image-20230427142324791](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427142324791.png)

그 후 우측 상단의 `Create New App`을 클릭합니다.



![image-20230427142343259](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427142343259.png)

`From scratch`를 선택할게요. 그 후 chatbot 이름과 적용할 workspace를 선택하여 생성해 주면 됩니다.

![image-20230427142421086](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427142421086.png)

## Bot 설정

기본적인 앱이 생성 되었으면 bot으로 활용하기 위해 추가적인 설정을 해 주어야 합니다.

`Add features and functionality`의 `Bots`를 클릭합니다. 

![image-20230427142556450](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427142556450.png)

Messages Tab을 활성해 했습니다ㅎㅎ

![image-20230427142714123](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427142714123.png)



## Permissions 설정

이렇게 기본적인 bot 설정이 끝났다면 생성된 bot에게 권한을 부여해 주어야합니다.

bot 기능을 추가할 때와 마찬가지로 `Add features and functionality` 의 `Permissions`를 클릭합니다.

![image-20230427142932592](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427142932592.png)



그 후 `Scope`에서 봇이 가지길 원하는 권한들을 부여해 줍니다. 저는 기본적인 쓰기 권한과 명령어 권한을 주어 보았습니다.

![image-20230427142910840](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427142910840.png)



## 봇 설치하기

권한 설정이 완료 되면 `Add features and functionality` 우측에 초록색으로 체크 표시가 됩니다. 그 후 `install to Workspace`를 클릭해 생성된 chatbot을 원하는 workspace에 추가해 봅니다.

![image-20230427142752589](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427142752589.png)



권한 부여가 잘 되었는지 확인해 봅니다.(갑자기 한글로 바꼈네요ㅎㅎ)

![image-20230427143053283](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427143053283.png)



### Token 발급

권한까지 완전히 부여하고 나면 해당 봇의 `Token`이 발급됩니다. 이 토큰으로 다양한 api들을 활용할 수 있으니 잘 간직해 둡니다.

![image-20230427143135148](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427143135148.png)



이렇게 봇이 잘 추가되었습니다. api 테스트를 원하시면 https://api.slack.com/ 사이트에서 documents를 확인할 수 있습니다.

적용된 app들을 확인하고 싶으시면 아래와 같이 확인하실 수 있습니다. 

![image-20230427143305258](https://raw.githubusercontent.com/KrGil/blog-contents-b/b06ada764054ca5ffa4c705d12862b1a7c544752/information-technology-tools/slack/chatbot.assets/image-20230427143305258.png)



감사합니다.



### References

https://jojoldu.tistory.com/704

https://jojoldu.tistory.com/705?category=777282

https://velog.io/@chosh/Slack-%EB%B4%87-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%A9%94%EC%8B%9C%EC%A7%80-%EB%B3%B4%EB%82%B4%EA%B8%B0