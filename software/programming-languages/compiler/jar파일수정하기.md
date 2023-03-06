# [java] jar 내부 class 파일 수정하기

> 직접 사용중이던 jar 파일이 android 버전이 올라감에 따라 클래스명이 겹치는 오류가 발생했습니다.(Type `class` is defined multiple times:...) 따라서 직접 jar의 클래스 명을 수정해 보기로 했습니다.(~~build.gradle에서 exclude가 왜안될까...~~)

# solution

크게 세 단계로 수정해 보았습니다.

**1. `.jar`파일 구조 분석**

**2. 동일한 구조로 구현(maven)**

**3. 생성된 `.jar`파일 구조 확인**



## .jar 파일 구조 분석

`.jar`파일 내부를 볼 수 있는 프로그램이 필요합니다. 저는 [알집](https://www.altools.co.kr/download/alzip.aspx)을 사용했습니다. 

제가 분석할 `.jar`파일은 아래와 같은 구조와 `.class`파일들을 포함하고 있습니다.

![image-20230306164135407](C:\Users\admin\Documents\GitHub\blog-contents-b\software\programming-languages\compiler\jar파일수정하기.assets\image-20230306164135407.png)

`maven`을 사용했군요. 내부 설정도 확인할 수 있습니다. 

![image-20230306164220257](C:\Users\admin\Documents\GitHub\blog-contents-b\software\programming-languages\compiler\jar파일수정하기.assets\image-20230306164220257.png)



[JD-GUI](http://java-decompiler.github.io/#jd-gui-download)와 같은 converting 프로그램을 활용하여 `.class`파일을 `.java`로 쉽게 변환해서 보실 수 있습니다.

![image-20230306163716717](C:\Users\admin\Documents\GitHub\blog-contents-b\software\programming-languages\compiler\jar파일수정하기.assets\image-20230306163716717.png)

설치 후 `.jar` 파일을 프로그램에 드래그앤드랍하시면 아래와 같이 내부 코드와 구조 등을 쉽게 확인할 수 있습니다.

![image-20230306165503387](C:\Users\admin\Documents\GitHub\blog-contents-b\software\programming-languages\compiler\jar파일수정하기.assets\image-20230306165503387.png)



## 동일한 구조로 구현(maven)

분석 단계에서 `.jar`가 어떻게 구현되어 있는지 알았으니 새로운 프로젝트를 생성해서 동일하게 구현 해 줍니다. [JD-GUI](http://java-decompiler.github.io/#jd-gui-download)를 활용하여 확인한 코드들을 붙여넣은 후 수정하고 싶은 부분을 수정하신 후 저장하면 됩니다. 저는 클래스 명이 중복되는 것으로 인한 오류라 클래스명만 수정하고 내부 코드는 수정하지 않았습니다.

![image-20230306164732181](C:\Users\admin\Documents\GitHub\blog-contents-b\software\programming-languages\compiler\jar파일수정하기.assets\image-20230306164732181.png)

구현 후 `maven`을 활용하여 `compile`을 실행, `.jar` 생성합니다.

 ![image-20230306163441986](C:\Users\admin\Documents\GitHub\blog-contents-b\software\programming-languages\compiler\jar파일수정하기.assets\image-20230306163441986.png)



##  생성된 .jar 파일 구조 확인

`compile`로 생성된 파일과 구조가 같은지 확인해 봅니다.

![image-20230306165232825](C:\Users\admin\Documents\GitHub\blog-contents-b\software\programming-languages\compiler\jar파일수정하기.assets\image-20230306165232825.png)

위의 화면과 같이 변경할 `.jar` 파일과 동일한 구조를 가지게 되는 것을 확인할 수 있습니다. 

기존에 존재하는 path에 수정한 `.jar` 파일로 교체하시면 됩니다.



감사합니다.



### References

https://bongra.tistory.com/287

https://bongra.tistory.com/285