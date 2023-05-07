# [giscus] slack 으로 giscus 댓글 알람 받기

> giscus로 변경 후 대댓글의 경우 알람이 오지 않는다고 해서 [Giscus 댓글, 텔레그램 (Telegram) 으로 알람 받기](https://jojoldu.tistory.com/705?category=777282)을 참고해서 slack으로 알람을 받는 방법을 적용했습니다. 처음에 적용을 마음먹었을땐 slack을 사용중이니 그냥 slack으로 알림 받아야지 했었습니다. 상당한 시행착오(~~*따라적힌것도 잘 못함ㅠ*~~) 를 겪다 `git action` 부분을 `github-discussions-notifier `을 활용하여 적용했습니다. 대단하신 분들이 참 많은 듯 합니다.



slack으로 giscus 댓글 알림을 받기 위해선  아래의 두가지 작업이 선행되어야 합니다.

1. slack 봇 생성하기 (*slack 봇을 생성하지 않으신 경우 [slack 봇 생성하기](https://jjam89.tistory.com/286)를 참고하시면 됩니다.*)
1. github repository에 giscus 적용하기(*github에 giscus를 적용하시고 싶으신 분들은 향로님의 [Utterances 에서 Giscus 로 마이그레이션하기](https://jojoldu.tistory.com/704?category=777282)를 참고해 주시기 바랍니다.*)

# action 추가하기

적용시킬 `repository`에서 Actions를 추가해 줍니다. 아래 이미지처럼 `Actions` 클릭 후 workflow를 만들어 봅니다.

![image-20230427155405462](https://raw.githubusercontent.com/KrGil/blog-contents-b/8ed94b7886d446339a15e65df10a906c917cd9c6/information-technology-tools/ci-cd/discussion.assets/image-20230427155405462.png)

이후 `.yml` 파일을 설정해야 합니다.  `.yml` 파일이 익숙하지 않으신 분들은 `github-discussions-notifier` (https://github.com/ostk0069/github-discussions-notifier) 에서 알려주는 방법을 사용하면 됩니다.(잘 아시는 분들은 직접... ㅎㅎ). 혹은 내가 손수 짜고 싶으신 분들은 https://github.com/ostk0069/github-discussions-notifier/blob/main/action.yml 여기를 참고하셔도 좋을 듯 합니다.

![image-20230427155905881](https://raw.githubusercontent.com/KrGil/blog-contents-b/8ed94b7886d446339a15e65df10a906c917cd9c6/information-technology-tools/ci-cd/discussion.assets/image-20230427155905881.png)

> github-discussions-notifier: https://github.com/ostk0069/github-discussions-notifier

위 링크에서 코드만 쏙 빼서 `blank.yml` 내용은 싹 지운 후 복붙 합니다.(~~*복붙만세!*~~)

```yaml
name: GitHub Discussions Notifier

on:
  discussion:
    types: [created]
  discussion_comment:
    types: [created]
    
jobs:
  notify-github-discussions:
    runs-on: ubuntu-latest
    steps:
      - uses: ostk0069/github-discussions-notifier@v0.0.2
        with:
          SLACK_CHANNEL_ID: <your slack channel id>
          SLACK_BOT_TOKEN: <your slack bot token>
          send-discussion-create: true
          send-discussion-comment: false
```

여기서 `SLACK_CHANNEL_ID`, `SLACK_BOT_TOKEN` 부분을 수정해 주어야 하는데요. 하드코딩을 하게되면 누구나 볼 수 있게 되니 github repository의 `Secrets and variables`에 변수를 지정해 줍니다.

##  Secrets and variables 설정하기

![image-20230427150930685](https://raw.githubusercontent.com/KrGil/blog-contents-b/8ed94b7886d446339a15e65df10a906c917cd9c6/information-technology-tools/ci-cd/discussion.assets/image-20230427150930685.png)

위의 이미지와 같이 `Settings` > `Secrets and variables` > `Actions` 화면에서  `New repository secret`를 클릭하시면 아래 이미지와 같이 Actions secrets를 추가할 수 있습니다. 

![image-20230427170235966](https://raw.githubusercontent.com/KrGil/blog-contents-b/8ed94b7886d446339a15e65df10a906c917cd9c6/information-technology-tools/ci-cd/discussion.assets/image-20230427170235966.png)

`SLACK_CHANNEL_ID`와 `SLACK_BOT_TOKEN`를 추가하시면 되는데 bot token의 경우 bot을 slack workspace에 설치할 때 알려주고 channel id는 해당 workspace의 채널 명을 작성하면 됩니다.

### SLACK_BOT_TOKEN

![image-20230427143135148](https://raw.githubusercontent.com/KrGil/blog-contents-b/8ed94b7886d446339a15e65df10a906c917cd9c6/information-technology-tools/ci-cd/discussion.assets/image-20230427143135148.png)

### SLACK_CHANNEL_ID

![image-20230427170731599](https://raw.githubusercontent.com/KrGil/blog-contents-b/8ed94b7886d446339a15e65df10a906c917cd9c6/information-technology-tools/ci-cd/discussion.assets/image-20230427170731599.png)

`blog-comments`가 channel_id가 되겠네요.

setting이 끝났으면 좀 전에 생성했던 `.yml` 파일의 코드 중 일부를 아래처럼 변경해 줍니다. 

```yaml
SLACK_CHANNEL_ID: ${{secrets.SLACK_CHANNEL_ID}}
SLACK_BOT_TOKEN: ${{secrets.SLACK_BOT_TOKEN}}
```

최종적인 코드입니다.

```yml
name: GitHub Discussions Notifier

on:
  discussion:
    types: [created]
  discussion_comment:
    types: [created]
    
jobs:
  notify-github-discussions:
    runs-on: ubuntu-latest
    steps:
      - uses: ostk0069/github-discussions-notifier@v0.0.2
        with:
          SLACK_CHANNEL_ID: ${{secrets.SLACK_CHANNEL_ID}}
          SLACK_BOT_TOKEN: ${{secrets.SLACK_BOT_TOKEN}}
          send-discussion-create: true
          send-discussion-comment: true
```

# 테스트하기

이제 적용이 잘 되었는지 확인을 해 봅니다.(~~*저는 댓글이 잘 안달려서 ㅎㅎ*~~)

discussion에서 테스트를 위한 comments를 남겨봅니다.

![image-20230427171148483](https://raw.githubusercontent.com/KrGil/blog-contents-b/8ed94b7886d446339a15e65df10a906c917cd9c6/information-technology-tools/ci-cd/discussion.assets/image-20230427171148483.png)

`Actions`에서 실제 동작되는지 확인해 봅니다.

![image-20230427150742448](https://raw.githubusercontent.com/KrGil/blog-contents-b/8ed94b7886d446339a15e65df10a906c917cd9c6/information-technology-tools/ci-cd/discussion.assets/image-20230427150742448.png)



slack에서 알람이 잘 도착하는 것을 확인할 수 있습니다.

![image-20230427171746689](https://raw.githubusercontent.com/KrGil/blog-contents-b/8ed94b7886d446339a15e65df10a906c917cd9c6/information-technology-tools/ci-cd/discussion.assets/image-20230427171746689.png)



긴 글 읽느라 고생하셨습니다. 

오늘도 즐코하는 하루 되시길 바랍니다. 

감사합니다.



### References

https://github.com/ostk0069/github-discussions-notifier

https://jojoldu.tistory.com/704?category=777282

https://jojoldu.tistory.com/705?category=777282
