# [OZ]오즈리포트 라이센스 변경

> 담당하는 회사에서 결제 관련된 문서의 경우 오즈리포트를 사용하고있습니다. 그런데 결제 과정에서 문제가 발생해 아주 오랜만에 오즈 리포트를 실행해 보았습니다. 그런데 라이센스가 만료되어 라이센스를 변경해 보았습니다. 이 과정을 간략하게 작성해 보도록 하겠습니다.



## 라이센스 변경

`.ozr` 파일을 실행시켜 보니 아래와 같이 라이센스가 만료되었다는 팝업을 확인할 수 있었습니다.

![image-20240110153534377](https://raw.githubusercontent.com/KrGil/blog-contents-b/9eb94c049796759a56f13c2c28d5d7447ac7ac94/computer-science/human-computer-interaction/oz%EB%A6%AC%ED%8F%AC%ED%8A%B8%20%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4%20%EB%B3%80%EA%B2%BD.assets/image-20240110153534377.png)

### 새로운 라이센스 발급받기

아래와 같이 새로운 라이센스를 발급 받습니다. 저는 로컬에서 확인용도로만 사용하기에 designer 부분만 라이센스를 교체해 주었습니다.

![image-20240110153909556](https://raw.githubusercontent.com/KrGil/blog-contents-b/9eb94c049796759a56f13c2c28d5d7447ac7ac94/computer-science/human-computer-interaction/oz%EB%A6%AC%ED%8F%AC%ED%8A%B8%20%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4%20%EB%B3%80%EA%B2%BD.assets/image-20240110153909556.png)

### 라이센스 경로 확인하기

`C:\Program Files (x86)\FORCS\OZ Report 8.0`

저는 위의 경로에 오즈 폴더들이 위치해 있더군요. 그래서 아래와 같이 4개의 폴더의 라이센스를 변경해 주었습니다.

> - OZ Enterprise Manager 8.0
> - OZ Query Designer 8.0
> - OZ Report Designer 8.0
> - OZ Repository Manager 8.0

![image-20240110153350262](https://raw.githubusercontent.com/KrGil/blog-contents-b/9eb94c049796759a56f13c2c28d5d7447ac7ac94/computer-science/human-computer-interaction/oz%EB%A6%AC%ED%8F%AC%ED%8A%B8%20%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4%20%EB%B3%80%EA%B2%BD.assets/image-20240110153350262.png)



### 라이센스 이름 수정

라이센스 파일 명을 `ozlicense.xml`로 수정한 후 위에 언급한 4개 폴더 내의 license 폴더에 복사 붙여넣기 해 줍니다.

![image-20240110153422845](https://raw.githubusercontent.com/KrGil/blog-contents-b/9eb94c049796759a56f13c2c28d5d7447ac7ac94/computer-science/human-computer-interaction/oz%EB%A6%AC%ED%8F%AC%ED%8A%B8%20%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4%20%EB%B3%80%EA%B2%BD.assets/image-20240110153350262.png)



그럼 오즈리포트가 제대로 열리는 것을 확인할 수 있습니다.



감사합니다.