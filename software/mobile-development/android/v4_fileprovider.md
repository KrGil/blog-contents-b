# [android] android.support.v4.content.FileProvider class not found 오류 해결



> 현재 모바일 프로젝트에서 다양한 버전의 안드로이드 기기를 사용중이라(~~7.1.1...~~) 버전이 올라갈수록 호환이 잘 안되는 경우가 많더군요. 검색해 보니 androidx라는 호환을 위한 라이브러리가 존재하더군요. 그래서 지금 프로젝트를 android -> androidx로 라이브러리 변경을 `시도`하는 중입니다.
>
> 여전히 아주 예전 버전의 라이브러리들을 사용중이고 버전 업만하면 오류를 토해내는 중이라 아주 골치가 아프지만 시간이 지나면 또 잊어먹기 때문에 변경하는 와중에 해결한 오류들을 기회가 될 때마다 작성해 보겠습니다.

# 버전 변경

`implementation 'com.android.support:appcompat-v7:23.4.0'` 에서 `implementation 'androidx.appcompat:appcompat:1.0.2'`로 라이브러리를 변경했습니다.

이후 어플을 실행하면 class not found 오류를 출력하면서 어플이 바로 꺼지더군요.

```xml
<provider
    android:name="android.support.v4.content.FileProvider`"
    android:authorities="${applicationId}.fileprovider"
    android:exported="false"
    android:grantUriPermissions="true">
    <meta-data
        android:name="android.support.FILE_PROVIDER_PATHS"
        android:resource="@xml/filepaths" />
</provider>
```



위의 `android.support.v4.content.FileProvider` 부분을 `androidx.core.content.FileProvider`

로 교체해 주면 해결이 됩니다. androidx로 라이브러리를 변경했기 때문에 `mainfest.xml`에 선언되어 있는 provider 부분의 경로를 `androidx` 하위에 존재하는 `FileProvider` 로 변경해 주어야 합니다.

프로젝트 하나는 우여곡절 끝에 `androidx`로 변경해서 `pie`에서 잘 동작하는것을 확인했습니다. 다른 버전에서도 잘 동작되는지 확인 후 최종 배포를 실행할 예정입니다만 모바일은 처음에 혼자 사용중이라 걱정이 많이 되는군요. 

 

짧은 글 읽어주어 감사합니다. 오늘도 좋은 코딩 하시길 바랍니다.



### References

https://stackoverflow.com/questions/48534293/android-support-v4-content-fileprovider-not-found

https://m.blog.naver.com/websearch/221738662288