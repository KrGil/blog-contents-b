# [library] react start 오류

> 리엑트 관련해서 간단하게 프로젝트를 만들어보고 싶어 유튜브를 검색한 후 [여기](https://www.youtube.com/watch?v=LoYbN6qoQHA)를 보고 간단한 todolist를 만들어 보기로 했습니다. 영상에 나오는대로 우선 따라해보는 중(~~무지성 따라하기 실패 ㅠ~~)에 만난 오류에 대해 작성해 보려고 합니다.

## Error

`npm start` 커맨드로 서버를 띄우는 과정에서 오류가 뜨지 뭔가요...ㅠ 무지성 따라하기 실패ㅠ

![image-20230426150128813](https://raw.githubusercontent.com/KrGil/blog-contents-b/53638381a36e83fc90daef62cecab37edba2c747/software/web-development/react/error.assets/image-20230426150128813.png)

*브라우저에서 위와 같은 오류를 띄우고 있습니다*

```
[eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app » C:\Users\admin\Documents\Github\react-todo-list\node_modules\eslint-config-react-app\base.js" and "BaseConfig » C:\Users\admin\Documents\GitHub\react-todo-list\node_modules\eslint-config-react-app\base.js".
```

대충 이런 오류인데 슬쩍 보니 `eslint ` 버전 관련 오류일 확률이 높을 듯 합니다.(~~*그야 예전에 설치하고 따로 건들인적이 없기 때문이죠!*~~)



![image-20230426150242275](https://raw.githubusercontent.com/KrGil/blog-contents-b/53638381a36e83fc90daef62cecab37edba2c747/software/web-development/react/error.assets/image-20230426150242275.png)

*서버 로그 역시 브라우저와 비슷하네요*

> **The error "Plugin "react" was conflicted between "package.json » eslint-config-react-app" occurs for multiple reasons:**
>
> 1. The path you used to navigate to your project with your terminal uses different casing than the actual path on your file system.
> 2. You have an outdated installation or multiple versions of the React eslint packages.
>
> 출처: https://bobbyhadz.com/blog/react-error-plugin-react-was-conflicted-between-package-json-eslint-config-react-app

`chatGPT` 친구에게 번역해 달라니 아래와 같이 깔끔하게 번역에다 코맨트까지 해 줍니다.

> "Plugin 'react' was conflicted between 'package.json » eslint-config-react-app'" 오류는 여러 가지 이유로 발생할 수 있습니다.
>
> 1. 터미널을 통해 프로젝트 경로에 접근하는 방법과 실제 파일 시스템의 경로가 대소문자를 포함하여 다른 경우 발생할 수 있습니다.
> 2. React eslint 패키지의 오래된 설치 또는 여러 버전의 설치가 원인일 수 있습니다.
>
> 이 오류가 발생하는 경우, 가장 먼저 확인해야 할 것은 프로젝트 경로와 파일 시스템 경로가 대소문자를 포함하여 정확히 일치하는지 확인하는 것입니다. 또한, React eslint 패키지가 최신 버전인지 확인하고, 필요한 경우 패키지를 업데이트해야 합니다. 이를 위해 npm이나 yarn 등의 패키지 매니저를 사용하여 패키지를 업데이트하거나, 기존 패키지를 삭제하고 최신 버전의 패키지를 새로 설치하는 방법을 시도해 볼 수 있습니다.



## Solution

위에 알려준 것처럼 `eslint`패키지를 업데이트 합니다.  `eslint-config-react-app` 패키지도 같이 업데이트 시켜줍니다.

```bash
npm update eslint
npm update eslint-config-react-app
```

`npm start` 커맨드로 화면을 띄워 봅니다.

![image-20230426151615387](https://raw.githubusercontent.com/KrGil/blog-contents-b/53638381a36e83fc90daef62cecab37edba2c747/software/web-development/react/error.assets/image-20230426151615387.png)

잘 뜨네요. 로고가 안뜨고 화면이 뜨는건 css 문제니 넘어갑니다.

![image-20230426150445796](https://raw.githubusercontent.com/KrGil/blog-contents-b/53638381a36e83fc90daef62cecab37edba2c747/software/web-development/react/error.assets/image-20230426150445796.png)

서버 로그 역시 제대로 뜨는것을 확인했습니다.

`npm update eslint`,  `npm update eslint-config-react-app` 와 같은 `eslint` 패키지 업데이트 후에도 동일한 문제가 발생한다면`Reference`의 주소를 참고해 주세요.



감사합니다. 



### final

계속 안되서 아래와 같이 script를 실행할때 `eslint`가 먹히지 않도록 `package.json` 파일을 수정 했습니다.

```script
{
  "scripts": {
    "start": "DISABLE_ESLINT_PLUGIN=true react-scripts start",
    "build": "DISABLE_ESLINT_PLUGIN=true react-scripts build",
    "test": "DISABLE_ESLINT_PLUGIN=true react-scripts test"
  }
}
```

![image-20230426155644857](C:\Users\admin\Documents\GitHub\blog-contents-b\software\web-development\react\error.assets\image-20230426155644857.png)

저장하니 바로 잘 되네요.

![image-20230426155717833](C:\Users\admin\Documents\GitHub\blog-contents-b\software\web-development\react\error.assets\image-20230426155717833.png)

### Reference

https://bobbyhadz.com/blog/react-error-plugin-react-was-conflicted-between-package-json-eslint-config-react-app