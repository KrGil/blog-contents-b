# shell script  사용

> 첫 회사에서부터 꾸준히 git bash를 사용해 왔습니다(~~집에서는 mac, 회사에서는 window를 사용합니다.~~) 지금은 CLI가 오히려 편리하게 느껴질 때가 있습니다. shell script를 활용한 포스트를 몇개 올렸었는데 생각해보니 shell script 기본에 대해서 작성한 적이 없는 듯 하여 저도 기본 개념을 정리하면서 글을 작성하려고 합니다.

## 쉘 스크립트(shell script)란?

[wiki](https://en.wikipedia.org/wiki/Shell_script) 에서는 아래와 같이 설명합니다.

> A **shell script** is a [computer program](https://en.wikipedia.org/wiki/Computer_program) designed to be run by a [Unix shell](https://en.wikipedia.org/wiki/Unix_shell), a [command-line interpreter](https://en.wikipedia.org/wiki/Command-line_interpreter).[[1\]](https://en.wikipedia.org/wiki/Shell_script#cite_note-1) The various dialects of shell scripts are considered to be [scripting languages](https://en.wikipedia.org/wiki/Scripting_language). Typical operations performed by shell scripts include file manipulation, program execution, and printing text. A script which sets up the environment, runs the program, and does any necessary cleanup or logging, is called a **wrapper**.

간략하게 유닉스 쉘과 인터프리터로 실행되는 컴퓨터 프로그램이며 운영체제 쉘을 실행하는 자동화된 모드를 의미한다고 합니다. 말이 좀 어렵네요. 

저는 쉘이 커널과 사용자 사이를 연결해 사용자의 명령어를 처리한다면 쉘 스크립트는 명령어들을 모아(자동으로) 쉘을 실행시키는 프로그램이이라는 개념으로 접근했습니다.ㅎㅎ

## 기본 설명

### 확장자

shell script 파일은 기본적으로 `.sh` 확장자를 가집니다.

![image-20230223114259568](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20230223114259568.png)

### 실행

파일 실행은 `sh` 혹은 `bash` 명령어를 사용하면  됩니다.

```bash
bash build.sh
```

 ```bash
 sh build.sh
 ```





### References

https://en.wikipedia.org/wiki/Shell_script

https://engineer-mole.tistory.com/200



