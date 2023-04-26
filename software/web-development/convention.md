# convention

> git commit과 프로젝트 파일 및 폴더 관리할때마다 매번 검색하는것이 귀찮아서 이번에 한꺼번에 정리할 생각입니다.
>
> 개인 프로젝트나 지금 진행중인 프로젝트의 경우 아래의 convention을 따르고 있습니다만 기본적으로 아래의 convention을 지킬 생각입니다.

## folder and files
### Folder
1. 영문 소문자로만 구성한다.
2. 가능하면 짧게 구성한다(축약어 사용).
3. 특수문자와 빈 공백sᴘᴀᴄᴇ은 사용하지 않는다.
4. 단어와 단어의 구분은 ‘-’(ʜʏᴘʜᴇɴ)으로 구성한다.
### File
1. 가능하면 영문 소문자로만 구성한다.
2. 가능하면 짧게 구성한다(축약어 사용).
3. 특수문자와 빈 공백sᴘᴀᴄᴇ은 사용하지 않는다.
4. 단어와 단어의 구분은 ‘_’(ᴜɴᴅᴇʀʙᴀʀ) 로 구성한다.

## git commit
### message structure
```
type: subject

body

footer
```
### commit type
1. feat: 새로운 기능 추가
2. fix: 버스 수정
3. docs: 문서 수정
4. style: 코드 포매팅, 세이콜론 누락 등 코드 변경이 없는 경우
5. refactor: 코드 리펙토링
6. test: 테스트 코드, 리펙토링 테스트 코드 추가
7. chore: 빌드 업무 수정, 패키지 매니저 수정

### etc
1. subject: 과거형은 쓰지 않는다. fixed -> fix
2. type: 대문자는 쓰지 않는다.
3. body: 부연설명이 필요할 시 작성
4. footer: 선택사항. issue tracker id를 작성할때 사용.





### References

https://doublesprogramming.tistory.com/256

https://github.com/KrGil/blog-contents-b