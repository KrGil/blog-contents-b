# [Android] jCenter 서비스 종료로 PhotoPicker 의존성 오류



안녕하세요 뱅타입니다.

정말 오랜만에 글을 작성하는데요ㅎㅎ(아마 앞으로도 드문드문 글을 작성하지 않을까 합니다.)  다들 겨울은 따뜻하게 보내셨는지ㅎㅎ 이젠 1년에 글을 한두번 쓸까 말까네요. 아무래도 저도 일이 있고 이리저리 바쁘게 지내다 보니 그러네요ㅎㅎ 바로 본론으로 들어가 보겠습니다.



### 문제

오늘은 JCenter가 서비스 종료됨에 따라 MVN repository에 첨부된 `.arr` 파일이 사라져 발생해 버린 의존성 오류를 해결한 것에 대해 글을 작성하려고 합니다. 바로 `Y PhotoPicker` 인데요. 제가 관리하는 모바일 어플 중 하나가  `.arr` 을 참조하고 있더라구요.

근데 오늘 확인해보니 오류가 발생하는것 아니겠습니까?!(사실 언제 오류가 발생한지 모르겠네요ㅎㅎㅎㅎ;;) 그래서 직접 `mvn repository`를 들어가보니 웬걸? `.arr` 파일을 보관하는 링크가 `404`를 뱉는거 아니겠어요?

![image-20250227135245718](https://raw.githubusercontent.com/KrGil/blog-contents-b/8d88e2137fbdf6de78bc1f30ae06893d1d186f7c/software/mobile-development/android/y_photopicker.assets/image-20250227135245718.png)

*mvn에는 잘 올라가져 있는데...?*

![image-20250227135048781](https://raw.githubusercontent.com/KrGil/blog-contents-b/8d88e2137fbdf6de78bc1f30ae06893d1d186f7c/software/mobile-development/android/y_photopicker.assets/image-20250227135048781.png)

*링크를 클릭하니 404...*

아 이것 참... 무슨일인가 싶어 이리저리 알아보고 주변 지인들에게도 물어보니 `JCenter`가 서비스 종료되었다고 하더라구요...? ~~*JCenter가 망했다.*~~

큰일났다 싶어 `.arr` 파일을 혹시 가지고 있나 싶어 찾아보고,,, 이미 배포된 `.apk`파일을 `apktool`을 사용해서 디코드도 해보고... 혼자 쇼를 했었네요ㅎㅎ 그러다 결국 github 링크 찾아서 직접 내부 라이브러리로 활용하려고 했습니다ㅎㅎ

> [GitHub - kenn-ai/Android-Y-PhotoPicker: android MultiImageSelector library](https://github.com/kenn-ai/Android-Y-PhotoPicker)

그러다 작업한 github 레파지토리가 여러개란 걸 알고 왜지? 왜 여러개지? 싶어 이것저것 들쑤셔 보았습니다ㅎㅎ 그러다 발견...! 오...

[GitHub - YongRay/Android-Y-PhotoPicker: android MultiImageSelector library](https://github.com/YongRay/Android-Y-PhotoPicker)

![image-20250227135438920](https://raw.githubusercontent.com/KrGil/blog-contents-b/8d88e2137fbdf6de78bc1f30ae06893d1d186f7c/software/mobile-development/android/y_photopicker.assets/image-20250227135438920.png)

*오잉 이것은...?! 설마?*

네 찾았쥬? 위대하신 개발자 님께서 `jitpack`으로 올려 놓으셨쥬?ㅎㅎ 바로 복사해서 `build.gradle` 파일에 붙여넣고 실행! 했는데...

엥 왜 안되는겨ㅠ

그래도 포기할 수 없다... 어떻게 찾은 빛(조금이라도 더 쉬운...)인데!!!!

바로 `JitPack` 사이트에 접속(예전에 한번 해본적 있어 흐릿하게...)해서 해당 git 레포 복붙!

![image-20250227135535102](https://raw.githubusercontent.com/KrGil/blog-contents-b/8d88e2137fbdf6de78bc1f30ae06893d1d186f7c/software/mobile-development/android/y_photopicker.assets/image-20250227135535102.png)

오오...!! 된다...!

![image-20250227135734990](https://raw.githubusercontent.com/KrGil/blog-contents-b/8d88e2137fbdf6de78bc1f30ae06893d1d186f7c/software/mobile-development/android/y_photopicker.assets/image-20250227135734990.png)

따잇...!!! 그렇다... 저 부분이 바뀌었다는것...!

넵 위대하신 개발자분께선 README 파일에 약간의 오타가 있었던 것!!ㅎㅎ 아래처럼 수정해주시면 아주 쉽게 해결됩니당ㅎㅎ

### 해결

```java
// 원본
// implementation 'com.yongbeam.y_photopicker:y-photopicker:0.0.1'

// 1차 수정
// implementation 'com.github.yongbeam:Android-Y-PhotoPicker:x.x.x'

// final!!
// 그리고 버전도 제 쪽에선 0.0.1 이었는데 여긴 1.0.1로 시작하더라구요! 꼼꼼하게 확인해야ㅠ
implementation 'com.github.YongRay:Android-Y-PhotoPicker:1.0.1'
```

오전 내도록 고생했지만 여러가지 알 수 있는 시간이었네요!

역시 개발은 할땐 아주 화나지만 끝나고 나면 행복! (git clone도 해놨겠다... 다음에 혹시 호옥시 무슨 일 있으면 직접 .jar나 .arr로 마는걸로...!)



다들 즐거운 코딩 되세욥.



### References

[GitHub - YongRay/Android-Y-PhotoPicker: android MultiImageSelector library](https://github.com/YongRay/Android-Y-PhotoPicker)

