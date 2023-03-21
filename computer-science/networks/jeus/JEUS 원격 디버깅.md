# JEUS 원격 디버깅

JEUSMain.xml 파일에

```xml
<command-option>
	-Xms512m -Xmx512m -XX:MaxPermSize=128m 
    -Xdebug -Xnoagent 
    -Xrunjdwp:transport=dt_socket,address=8000,suspend=n,serve
r=y 
    -Djava.awt.headless=true -Djava.net.preferIPv4Stack=true
<command-option>
```

 추가 후 아래와 같이 추가하면 됩니다.

![image-20230321160218745](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20230321160218745.png)