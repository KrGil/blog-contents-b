

# (IIS)Windows 2008 r2 서버에서 tls1.2 적용하기

> jeus6에서 tls1.2를 적용시켰었는데 알고보니 모바일은 정책이 조금 다르게 설정 되어 있었습니다ㅠ 천천히 타고가다보니 window 2008 r2서버를 거쳐서 jeus6번 쪽으로 넘어오는 듯 하네요(통신 어렵...) 그래서 IIS에 tls1.2를 적용시키는 방법을 찾다가 너무 예전 서버라 지원이 안될것 같더군요. 다행이 저는 지원이 되는 버전이어 그대로 적용시켜 보았습니다.

**참고링크**

설명이 너무 잘 되어 있는 포스트를 확인했습니다ㅎㅎ 다행이네요 아래의 링크를 참고해 적용시켜 보겠습니다ㅎㅎ

- https://blog.naver.com/ncloud24/221872340346

## 지원 버전 및 확인사항

> 아래 세가지 버전을 확인하시길 바랍니다.(TLS1.2를 지원하는지)
>
> 1. server (Windows 2008 r2 - service pack1)
> 2. iis (7.5): 하단의 `curl` 커맨드를 사용하면 출력문 하단에 iis 버전을 확인할 수도 있습니다.
> 3. .net (4.6): 버전 4에서 안돼서 4.6을 설치했습니다.

![image-20240514105325739](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\security\window2008r2에서 tls1.2 적용하기.assets\image-20240514105325739.png)

다행히 window server 2008 r2는 지원이 되기는 하네요ㅎㅎ 활성화 시켜주면 될 듯 합니다.

**주의** 아래의 Service Pack 1 이라고 표기 되어야 TLS1.2를 활성화 시킬 수 있다네요. 만약 service pack 1이 없다면 아래 링크를 참고해 주세요!

- [Windows 업데이트 링크](https://support.microsoft.com/ko-kr/topic/windows%EC%9D%98-winhttp%EC%97%90%EC%84%9C-tls-1-1-%EB%B0%8F-tls-1-2%EB%A5%BC-%EA%B8%B0%EB%B3%B8-%EB%B3%B4%EC%95%88-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8F%84%EB%A1%9D-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-c4bd73d2-31d7-761e-0178-11268bb10392)

![image-20240514105510144](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\security\window2008r2에서 tls1.2 적용하기.assets\image-20240514105510144.png)





### 1. 레지스트리 수정

`regedit ` 명령으로 Registry Editor를 켜서 아래의 설정을 해 줍니다. 아래 캡쳐를 따라하면 됩니다.

```
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client]
"Enabled"=dword:00000001
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Server]
"Enabled"=dword:00000001
```

#### 1. TLS 1.2 Key(Server, Client)

![image-20240522143146832](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\security\window2008r2에서 tls1.2 적용하기.assets\image-20240522143146832.png)

**Client와 Server로 Key 두개를 생성합니다.**

![image-20240522143546547](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\security\window2008r2에서 tls1.2 적용하기.assets\image-20240522143546547.png)

![image-20240522143638180](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\security\window2008r2에서 tls1.2 적용하기.assets\image-20240522143638180.png)

위와 같이 `Enabled`와 `DisabledByDefault` 두 개의`16진수(H)` `DWORD` 를 생성한 후 Value Data를 각각 1과 0으로 맞춰 줍니다.

> Enabled: 1, DisabledByDefault: 0

*서버 재시작 후 tls1.2를 시도해 봅니다. 여기까지만 해도 적용되는 분들이 계시더군요. 물론 저는 안됐습니다ㅎ*

#### 2. .NET Framework Key

본인의 `.NET Framework`가 몇 버전인지 확인해 봅니다. stackoverflow와 공식 사이트에서 이것저것 찾아봤는데 확실하게 몇 버전부터 지원하는지는 나와있지 않네요. 대신 `.NET Framework 4.6` 버전 이후에는 `TLS1.2`가 default 라고 합니다. 저는 `.NET Framework 4` 였는데 아래 설정을 해도 되지 않아 `.NET Framework 4.6` 버전을 설치했습니다.

```ini
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]
"SchUseStrongCrypto"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v4.0.30319]
"SchUseStrongCrypto"=dword:00000001
```

![image-20240522144639150](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\security\window2008r2에서 tls1.2 적용하기.assets\image-20240522144639150.png)

*서버를 재시작 후 아래 작성한 사이트에서 접속 테스트를 해 보시면 됩니다. 혹은 `git bash`를 사용하신다면 아래 작성한 커맨드로 확인해 보실 수 있습니다.*

#### 3. IISCrypto 설치

> 위의 1번과 2번을 했는데도 적용이 되지 않는다면(TLS1.2를 지원하는지 server, iis, .net 버전 확인은 필수입니다.) IISCrypto 서버에 설치해서 사용해 보시길 바랍니다. 저는 이걸로 해결 했네요ㅎㅎ ~~오랜 시간 고뇌의 결실!~~
>
> - [IISCrypto 설치](https://www.nartac.com/Products/IISCrypto)

지원하는 버전인지 잘 확인해 본 후에 설치하면 됩니다. 

설치 후 아래 이미지처럼 체크 후 `Best Practices` 클릭 > `Apply` 를 누르고 서버를 재시작 하면 됩니다!ㅎㅎ

![image-20240522151142027](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\security\window2008r2에서 tls1.2 적용하기.assets\image-20240522151142027.png)



### TLS 1.2 적용 확인하기

#### 1. 사이트 활용

- https://wincert.com/?c=Tool&m=serverssltest

- https://www.ssllabs.com/ssltest/index.html

#### 2. 커맨드 활용

```bash
openssl s_client -connect [ip주소]:[포트번호] -tls1_2
```

```bash
curl -svo /dev/null [url주소] 2>&1 | egrep -v "^{.*$|^}.*$|^* http.*$"
```



### 후기

다들 간단하게 설정하면 잘 적용된다는데 전 아무리 해도 적용이 안되더라구요. 그래서 인터넷에 나와있는 대부분의 정보들을 검색해 본 듯 합니다... registry 설정 중 tls1.1은 잘 적용이 안되던데 1.2만 적용이 안되더라구요 ㅠ 결국 IISCrypto 를 활용하여 완료했었지만 그 사이에 있는 iis 설정부터 참 많은 것들을 배울 수 있었습니다.(~~화남~~) ㅎㅎ 폐쇄망이라고 몇 년동안 업데이트 안하다가 결국 밀린 응아가 저에게 넘어왔네요ㅎㅎ 보안업데이트 같은 큰 업데이트는 미리미리 적용하는걸로...ㅎㅎ

### References

https://kb.certkorea.co.kr/knowledgebase/iis-tls1-2-%EC%84%A4%EC%A0%95%EB%B0%A9%EB%B2%95/

https://blog.naver.com/ncloud24/221872340346

훨씬 많은 사이트들을 봤지만 다른 컴퓨터에서 작업을 진행해서...ㅠ 대부분 공식홈페이지, 관련 stackoverflow 페이지였습니다ㅎㅎ

