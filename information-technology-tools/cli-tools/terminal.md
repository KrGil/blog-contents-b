# [terminal] git bash 흑백 현상 해결(TERM)

> 저는 개인적으로 window에서는 git bash를 사용하는것을 선호합니다. 원격 접속 관련해서 설정을 이것저것 만졌다가 git bash에서 vim을 실행시키면 오류와 함께 흑백으로 출력되더군요. 그래서 이 현상을 해결하면서 알게 된 것들을 간략하게 정리해 보겠습니다.



## problem

어느날 `vim` 명령어를 실행했는데 아래와 같이 error message를 뱉은 후 `vim`이 실행되었습니다.

```bash
E558: Terminal entry not found in terminfo
'vt100' not known. Available builtin terminals are:
    builtin_amiga
    builtin_ansi
    builtin_pcansi
    builtin_win32
    builtin_vt320
    builtin_vt52
    builtin_xterm
    builtin_iris-ansi
    builtin_debug
    builtin_dumb
defaulting to 'ansi'
```

원격 서버 관련해서 몇가지 테스트를 하다 `git bash`설정을 만진 듯 합니다. 껐다 켜도 동일한 현상이 나오네요.

![image-20230329104312520](https://raw.githubusercontent.com/KrGil/blog-contents-b/46d96b58c9b06ebd289672cbb6600d720c5591c1/information-technology-tools/cli-tools/terminal.assets/image-20230329104312520.png)

## solution

우선 해결 방법부터 작성하도록 하겠습니다. 현재 session에만 적용하는 방법과 설정이 계속 지속되게 되는 방법을 작성하겠습니다.

### 1. permanent

git bash `Options`에서 설정을 `Terminal > Type`을 `xterm`으로 변경해 줍니다.

![image-20230329104010194](https://raw.githubusercontent.com/KrGil/blog-contents-b/46d96b58c9b06ebd289672cbb6600d720c5591c1/information-technology-tools/cli-tools/terminal.assets/image-20230329104010194.png)

아래와 같이 `vt100`을 `xterm-256color`로 수정해 주면 됩니다.

![image-20230329103913899](https://raw.githubusercontent.com/KrGil/blog-contents-b/46d96b58c9b06ebd289672cbb6600d720c5591c1/information-technology-tools/cli-tools/terminal.assets/image-20230329103913899.png)

그 후 다시 `vim`을 실행시키면 아래와 같이 color가 적용된 것을 볼 수 있습니다.

![image-20230329104505449](https://raw.githubusercontent.com/KrGil/blog-contents-b/46d96b58c9b06ebd289672cbb6600d720c5591c1/information-technology-tools/cli-tools/terminal.assets/image-20230329104505449.png)

### 2. temporary

일시적인 방법입니다. terminal에서 아래의 command를 작성해 봅니다.

```
echo $TERM
```

그럼 현재 terminal에 적용되어 있는 `TERM`을 확인할 수 있습니다.

```
TERM=xterm
```

을 작성하시면 됩니다. 간단하죠?

## cause

저는 `TERM` 이란게 무엇인지 궁금해서 간단하게 검색을 해 보았는데 `stack over flow`에 이런 글이 있더군요. 그래서 해당 글을 가져왔습니다.

> You can specify the terminal setting into the putty session, but users can have it specify on their environment variables. TERM will define your terminal type and also some will have more features that other, example, xterm supports colors and it will update the rows and columns automatically. If you use vt100, it will default to 24 rows by 80 columns when you resize your terminal you will see that it sticks to 24x80. – [BitsOfNix](https://unix.stackexchange.com/users/27827/bitsofnix)  [Jan 7, 2013 at 9:01](https://unix.stackexchange.com/questions/60499/how-to-set-the-bash-display-to-not-show-the-vim-text-after-exit#comment83718_60504)

`TERM`이란 것은 terminal type을 의미하여 `vt100`, `xterm`과 같이 여러가지 타입이 존재하는것을 알 수 있습니다. 

`vt100` > `vt220` > `xterm`으로 기능들이 추가되어왔다고 보면 될 듯 합니다. 좀 더 자세한 글은 [여기 참고](https://unix.stackexchange.com/questions/43945/whats-the-difference-between-various-term-variables)의 사이트를 읽어보시는 것을 추천드립니다.



### Refernces

https://unix.stackexchange.com/questions/60499/how-to-set-the-bash-display-to-not-show-the-vim-text-after-exit

https://unix.stackexchange.com/questions/43945/whats-the-difference-between-various-term-variables