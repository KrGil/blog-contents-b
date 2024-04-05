# JEUS6(java6)에서 TLS1.2 통신 하기

> 회사에서 android 어플을 유지보수 담당을 하고 있습니다. 저희 어플은 예전어플을 사용하고 있어서  android API가 28로 높지 않습니다. 사내 기기 내에서 내부적으로만 사용하고 있기 때문에 소프트웨어 업데이트를 하지 못하게 하고 있습니다.
>
> 다만 사용하시는 직원 분들이 자꾸 업데이트를 해서(...) 발생하는 문제를 해결하는 과정을 작성해 볼까 합니다. 이번에는 업데이트로 인해 통신 프로토콜 TLSv1이 막히면서 발생한 사항에 대해 작성해 볼까 합니다.

안드로이드에는 android 버전과 API level이 따로 있습니다. 

> 안드로이드 버전과 API level
>
> - https://developer.android.com/tools/releases/platforms?hl=ko

지금 회사에 처음 왔을 당시 사내에서 사용되던 버전이 android 7(API 24)을 사용했던 것으로 기억합니다. 

테스트용 안드로이드 기기가 android 9(API 28)을 사용했었구요. 지금은 업데이트 해서 anrdoid11(API 30)를 사용하고 있네요.

서론이 길었네요ㅎㅎ 아무튼 오늘은 android 특정 버전부터 `TLS1.0`, `TLS1.1`,  통신이 불가로 문제가 발생한 일에 대해 작성할 예정입니다.



## 문제

지금 있는 곳의 프로그램은 오래되었습니다. 2009년에 만들어 졌으니 벌써 15년이 지났네요. 서버도 그때 당시에 구축 되어 있고 모바일 어플은 2019년 즈음에 만들어진 것으로 알고 있습니다.

이로인해 요즘 나오는 버전들을 적용시키기에는 많은 문제가 발생하고 있습니다. 서버의 경우 java1.6으로 돌아가는 JEUS6를 사용하고 있습니다. java 버전으로 인해 불편한 점이 상당히 많죠.(허드슨이라던가, gitblit이라던가...) 

오늘의 문제는 java1.6버전이 TLS1.2 이상을 지원하지 않으므로 발생한 문제입니다.

> java version에 따른 TLS 지원 버전.
>
> - https://www.ateam-oracle.com/post/transport-level-security-tls-and-java

| Java Version | SSL/TLS Default | Other Supported Versions                 |
| ------------ | --------------- | ---------------------------------------- |
| Java 6       | TLS 1.0         | TLS 1.1 (update 111 and later), SSLv3.0* |
| Java 7       | TLS 1.0         | TLS 1.2, TLS 1.1, SSLv3.0*               |
| Java 8       | TLS 1.2         | TLS 1.1, TLS 1.0, SSLv3.0*               |

이렇게 java 6은 TLS1.0과 TLS1.1만 지원하고 있습니다. 요즘에는 TLS1.3을 기본으로 사용하는데 말이죠.

정확히 안드로이드 몇 버전에서부터 TLS1.0과 TLS1.1 통신이 강제로 막혔는지는 알 수 없지만 제가 사용하는 테스트용 안드로이드 기기(android11)에서는 TLS1.0 통신이 가능하네요. 안타깝게도 이번에 업데이트 하신 분의 기기는 android13(API 33) 입니다.(~~후... 업데이트 하지말란 말을 왜 안듣냐 진짜...~~)

이로 인해 어플 사용 시 서버에 요청을 보내면 아래와 같은 문제가 발생합니다.

```
javax.net.ssl.SSLHandshakeException: Read error: ssl=0x74ea629d48: Failure in SSL library, usually a protocol error
  error:100000f0:SSL routines:OPENSSL_internal:UNSUPPORTED_PROTOCOL (external/boringssl/src/ssl/handshake_client.cc:713 0x7568c8c791:0x00000000)
  	at com.android.org.conscrypt.SSLUtils.toSSLHandshakeException(SSLUtils.java:356)
  	at com.android.org.conscrypt.ConscryptEngine.convertException(ConscryptEngine.java:1134)
  	at com.android.org.conscrypt.ConscryptEngine.unwrap(ConscryptEngine.java:919)
  	at com.android.org.conscrypt.ConscryptEngine.unwrap(ConscryptEngine.java:747)
  	at com.android.org.conscrypt.ConscryptEngine.unwrap(ConscryptEngine.java:712)
  	at com.android.org.conscrypt.ConscryptEngineSocket$SSLInputStream.processDataFromSocket(ConscryptEngineSocket.java:896)
  	at com.android.org.conscrypt.ConscryptEngineSocket$SSLInputStream.-$$Nest$mprocessDataFromSocket(Unknown Source:0)
  	at com.android.org.conscrypt.ConscryptEngineSocket.doHandshake(ConscryptEngineSocket.java:236)
  	at com.android.org.conscrypt.ConscryptEngineSocket.startHandshake(ConscryptEngineSocket.java:218)
  	at okhttp3.internal.io.RealConnection.connectTls(RealConnection.java:239)
  	at okhttp3.internal.io.RealConnection.establishProtocol(RealConnection.java:196)
  	at okhttp3.internal.io.RealConnection.buildConnection(RealConnection.java:171)
  	at okhttp3.internal.io.RealConnection.connect(RealConnection.java:111)
  	at okhttp3.internal.http.StreamAllocation.findConnection(StreamAllocation.java:187)
  	at okhttp3.internal.http.StreamAllocation.findHealthyConnection(StreamAllocation.java:123)
  	at okhttp3.internal.http.StreamAllocation.newStream(StreamAllocation.java:93)
  	at okhttp3.internal.http.HttpEngine.connect(HttpEngine.java:296)
  	at okhttp3.internal.http.HttpEngine.sendRequest(HttpEngine.java:248)
  	at okhttp3.RealCall.getResponse(RealCall.java:243)
  	at okhttp3.RealCall$ApplicationInterceptorChain.proceed(RealCall.java:201)
  	at okhttp3.logging.HttpLoggingInterceptor.intercept(HttpLoggingInterceptor.java:145)
  	at okhttp3.RealCall$ApplicationInterceptorChain.proceed(RealCall.java:190)
  	at okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:163)
  	at okhttp3.RealCall.access$100(RealCall.java:30)
  	at okhttp3.RealCall$AsyncCall.execute(RealCall.java:127)
  	at okhttp3.internal.NamedRunnable.run(NamedRunnable.java:32)
  	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)
  	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:644)
  	at java.lang.Thread.run(Thread.java:1012)
  Caused by: javax.net.ssl.SSLProtocolException: Read error: ssl=0x74ea629d48: Failure in SSL library, usually a protocol error
  error:100000f0:SSL routines:OPENSSL_internal:UNSUPPORTED_PROTOCOL (external/boringssl/src/ssl/handshake_client.cc:713 0x7568c8c791:0x00000000)
  	at com.android.org.conscrypt.NativeCrypto.ENGINE_SSL_read_direct(Native Method)
  	at com.android.org.conscrypt.NativeSsl.readDirectByteBuffer(NativeSsl.java:568)
  	at com.android.org.conscrypt.ConscryptEngine.readPlaintextDataDirect(ConscryptEngine.java:1095)
  	at com.android.org.conscrypt.ConscryptEngine.readPlaintextData(ConscryptEngine.java:1079)
  	at com.android.org.conscrypt.ConscryptEngine.unwrap(ConscryptEngine.java:876)
  	... 26 more
```



그래서 서버에서 허용하는 TLS 통신 버전을 확인해 보니 `TLS1.0`만 허용하는 것을 알 수 있었습니다.

```cmd
$curl -svo /dev/null https://SERVER_URL 2>&1 | egrep -v "^{.*$|^}.*$|^* http.*$"

```



## 원인

확인해보니 android 10부터는 `TLS1.3` 이 기본으로 설정되게 되었더군요. 위에 언급했듯이 정확히 안드로이드 몇 버전에서부터 TLS1.0과 TLS1.1 통신이 강제로 막혔는지는 알 수 없지만 아래와 같이 `TLS1.0`으로 통신하게끔 직접 코드를 작성해도 오류가 발생하더군요.

*`TLS1.0`  프로토콜을 찾지를 못하더군요...*

- code

```java
ConnectionSpec spec = new ConnectionSpec.Builder(ConnectionSpec.COMPATIBLE_TLS)
                .tlsVersions(TlsVersion.TLS_1_0)
                .cipherSuites(
                        CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
                        CipherSuite.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,
                        CipherSuite.TLS_DHE_RSA_WITH_AES_128_GCM_SHA256,
                        CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,
                        CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,
                        CipherSuite.TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,
                        CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,
                        CipherSuite.TLS_DHE_RSA_WITH_AES_128_CBC_SHA,
                        CipherSuite.TLS_DHE_RSA_WITH_AES_256_CBC_SHA,
                        CipherSuite.TLS_RSA_WITH_AES_128_GCM_SHA256,
                        CipherSuite.TLS_RSA_WITH_AES_128_CBC_SHA,
                        CipherSuite.TLS_RSA_WITH_AES_256_CBC_SHA,
                        CipherSuite.TLS_RSA_WITH_3DES_EDE_CBC_SHA
                )
                .build();

        OkHttpClient client = new OkHttpClient.Builder()
                .connectionSpecs(Arrays.asList(spec))
                .build();

        retrofit = new Retrofit.Builder()
                .baseUrl(webUrl)
                .addCallAdapterFactory(new RetrofitHttpService.HandlingCallAdapterFactory())
                .addConverterFactory(GsonConverterFactory.create(gson))
                .client(client)
                .build();
```

위의 코드와 같이 `TLS1.0` 으로 통신하게 했는데 아래와 같은 오류가 나오면서 프로토콜을 찾지 못한다고 합니다. `supported protocols=[TLSv1.2, TLSv1.3]`을 보면 1.2버전과 1.3버전만 지원하는 것을 알 수 있습니다. 

- error log

```
java.net.UnknownServiceException: Unable to find acceptable protocols. isFallback=false, modes=[ConnectionSpec(cipherSuites=[TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, TLS_DHE_RSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_DHE_RSA_WITH_AES_128_CBC_SHA, TLS_DHE_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_3DES_EDE_CBC_SHA], tlsVersions=[TLS_1_0], supportsTlsExtensions=true)], supported protocols=[TLSv1.2, TLSv1.3]
at okhttp3.internal.ConnectionSpecSelector.configureSecureSocket(ConnectionSpecSelector.java:72)
at okhttp3.internal.io.RealConnection.connectTls(RealConnection.java:232)
at okhttp3.internal.io.RealConnection.establishProtocol(RealConnection.java:196)
at okhttp3.internal.io.RealConnection.buildConnection(RealConnection.java:171)
at okhttp3.internal.io.RealConnection.connect(RealConnection.java:111)
at okhttp3.internal.http.StreamAllocation.findConnection(StreamAllocation.java:187)
at okhttp3.internal.http.StreamAllocation.findHealthyConnection(StreamAllocation.java:123)
at okhttp3.internal.http.StreamAllocation.newStream(StreamAllocation.java:93)
at okhttp3.internal.http.HttpEngine.connect(HttpEngine.java:296)
at okhttp3.internal.http.HttpEngine.sendRequest(HttpEngine.java:248)
at okhttp3.RealCall.getResponse(RealCall.java:243)
at okhttp3.RealCall$ApplicationInterceptorChain.proceed(RealCall.java:201)
at okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:163)
at okhttp3.RealCall.access$100(RealCall.java:30)
at okhttp3.RealCall$AsyncCall.execute(RealCall.java:127)
at okhttp3.internal.NamedRunnable.run(NamedRunnable.java:32)
at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)
at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:644)
at java.lang.Thread.run(Thread.java:1012)
```



## 해결방안

이에 두가지 방안을 생각했습니다.

1. android 다운그레이드 하기
2. 서버가 TLS1.2 이상의 프로토콜 하기.

1번 방안인 다운그레이드 방법은 넘어가고(업데이트 하지말라해도 할꺼니까... 배포되어있는 기기만 수십대인데ㅠ) 2번 방안인 서버가 `TLS1.2` 이상의 프로토콜을 허용되는 방법을 찾아 보았습니다.



### java6에서 TLS1.2 하기

본문 시작부분에 언급했듯이 java6의 경우 `TLS1.2`를 지원하지 않습니다. 다행이 검색해 보니 한분이 이러한 문제를 해결하시고 블로그를 작성해 놓으셨더라구요. 그 분의 과정을 간략하게 작성해 놓으려고 합니다.

총 3단계로 

1. .jar 파일 두개 다운받기
2. java.security 파일 수정하기
3. 최신버전 JCE파일 다운받기
4. security 파일에서 폴더 덮어쓰기

> 링크 참고
>
> - https://dev-bri.tistory.com/2
> - (감사합니다.)

#### 1. 필요한 .jar 파일 다운받기

> 필요한 .jar 파일 받는 곳
>
> https://www.bouncycastle.org/latest_releases.html

1. [**bcprov-jdk15to18-168.jar**](https://www.bouncycastle.org/download/bcprov-jdk15to18-168.jar) 및 [**bctls-jdk15to18-168.jar**](https://www.bouncycastle.org/download/bctls-jdk15to18-168.jar) 를 다운로드

${JAVA_HOME}/jre/lib/ext 폴더에 복사.

 

#### 2. ${JAVA_HOME}/jre/lib/security 폴더 내의 java.security 파일을 수정하기

 ```xml
 <수정 전>
 security.provider.1=sun.security.provider.Sun
 security.provider.2=sun.security.rsa.SunRsaSign
 security.provider.3=com.sun.net.ssl.internal.ssl.Provider
 security.provider.4=com.sun.crypto.provider.SunJCE
 security.provider.5=sun.security.jgss.SunProvider
 security.provider.6=com.sun.security.sasl.Provider
 security.provider.7=org.jcp.xml.dsig.internal.dom.XMLDSigRI
 security.provider.8=sun.security.smartcardio.SunPCSC
 security.provider.9=sun.security.mscapi.SunMSCAPI
 
 <수정 후>
 <!--추가-->
 security.provider.1=org.bouncycastle.jce.provider.BouncyCastleProvider
 security.provider.2=org.bouncycastle.jsse.provider.BouncyCastleJsseProvider
 
 security.provider.3=sun.security.provider.Sun
 security.provider.4=sun.security.rsa.SunRsaSign
 security.provider.5=com.sun.net.ssl.internal.ssl.Provider
 security.provider.6=com.sun.crypto.provider.SunJCE
 security.provider.7=sun.security.jgss.SunProvider
 security.provider.8=com.sun.security.sasl.Provider
 security.provider.9=org.jcp.xml.dsig.internal.dom.XMLDSigRI security.provider.10=sun.security.smartcardio.SunPCSC
 security.provider.11=sun.security.mscapi.SunMSCAPI
 <!--추가-->
 ssl.SocketFactory.provider=org.bouncycastle.jsse.provider.SSLSocketFactoryImpl
 ```



#### 3. 최신버전 JCE파일 다운받기

> 해당 경로에서 **jce_policy-6.zip** 파일을 다운받기
>
> - https://www.oracle.com/java/technologies/jce-6-download.html



#### 4. .jar 파일 덮어쓰기

그 후 ${JAVA_HOME}/jre/lib/security 폴더에서 아래 두 파일 덮어씌우기.

- `US_export_policy.jar`
- `local_policy.jar`

만약 최신버전 JCE파일을 사용하지 않는 경우, `InvalidKeyException : Illegal key size` 이와 같은 에러가 날 수 있다고 합니다.

여기까지 수정하면 java6에서 `TLS1.2` 통신이 가능하다고 합니다~



### Result

저 같은 경우 서버에서 돌리는 프로그램들이 많아서 섣불리 java 파일을 건드리기 힘들더군요. 그래서 현재는 서버쪽에 백업 요청을 해 놓은 상태입니다.(~~혹시 모르니 책임 뿌려놓기~~) 시간이 좀 걸린다니 그때까지 기다렸다가 적용을 해볼 예정입니다.

감사합니다.



### References

하는 방법이 적힌 링크(크나큰 감사!)

- https://dev-bri.tistory.com/2

jav 파일

- https://www.bouncycastle.org/latest_releases.html

JCE파일

- https://www.oracle.com/java/technologies/jce-6-download.html

java 버전에 따른 TLS 지원

- https://www.ateam-oracle.com/post/transport-level-security-tls-and-java

stackoverflow

- https://stackoverflow.com/questions/33364100/how-to-use-tls-1-2-in-java-6