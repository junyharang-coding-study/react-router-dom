# 생활코딩 - React Router
<br><br><br>

## 공부 필기 자료<br>
https://junyharang.tistory.com/165
<br><br>

## 소스코드 정리<br>
https://github.com/junyharang-coding-study/react-router-dom
<br><br>

## React Router Dom 설치

https://reactrouter.com/web/guides/quick-start

Guide 탭에서 Quick Start 클릭

명령어 : 해당 프로젝트 디렉터리에서 $ npm install react-router-dom



여기서 Router는 이용자가 URL로 어떤 주소를 치고 들어왔을 때에 해당 URI에 맞는 페이지로 보내주는 것이다.


### Router

```JavaScript
import {BrowserRouter} from 'react-router-dom';
```

Router에는 기본적인 라우팅 관련 속성만 정의 되어 있기 때문에 아래 라우터를 사용할 수 있다.

* \<BrowserRouter\>
* \<HashRouter\>
* \<MemoryRouter\>
* \<NativeRouter\>
* \<StaticRouter\>


Router에는 history 객체를 이용해 네이게이팅을 한다.



출처: https://junyharang.tistory.com/165 [Juny's Complex Blog]

여기서 BrowserRouter는 React Router Component의 최상위 Component를 쏴주는 Wrapper Component 


https://localhost:3000/
path="/"


https://localhost:3000/topics
path="/"
path="/topics"

위와 같이 두 URI에 걸리게 된다.

이를 해결하기 위해 아래 방법을 사용한다.

```JavaScript
<Route exact path="/one">
  <About />
</Route>
```


위와 같이 exact를 사용하여 정확하게 일치시켜 준다.


### Switch

Switch Component로 사용자 정의 Coponent들을 감싸주면 exact를 사용하지 않고도 정확한 URI Matching을 기대할 수 있다.

Switch로 Route Component를 감싸게 되면 리엑트 라우터 돔은 path와 일치하는 첫번째 Component를 발견하면 나머지 Component는 무시한다.

그렇다면 위에 써논 말은 거짓말일까? 최상위 URI를 지정한 [ "/" ] Component를 최하단으로 옮기거나, 최상위 URI에만 exact를 사용하면 위에 결과를 얻을 수 있다.

```javaScript
<Route path="/">
  Not Found
</Route>
```


위와 같이 exact를 기입하지 않은 최상위 URI로 Not Found를 설정해 두면 사용자가 없는 URI를 입력했을 때, 위의 코드에 기재된 내용이 보이게 된다.


### LINK

```JavaScript
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


<ul>
  <li>
    <a href="/">Home</a>
    <a href="/topics">Topics</a>
    <a href="/contact">Contact</a>
  </li>      
</ul>
```

위의 a Tag로 코딩을 하게 되면 우리는 싱글 페이지를 만들고 있는데, 새로고침이 a Tag를 누를때마다 작동되게 된다.

```JavaScript
<ul>
  <li>
    <Link to="/">Home</Link>
    <Link to="/topics">Topics</Link>
    <Link to="/contact">Contact</Link>
  </li>      
</ul>
```

하지만, 이를 Link Tag로 고치게 되면 새로고침을 방지할 수 있다.



### Hash Router

BrowserRouter 와 HashRouter
HashRouter는 URL 창(주소창)의 URI부분에 해쉬(#)이 붙게 된다. 그리고, 검색 엔진이 읽을 수 없다.

URL Hash를 사용하면 HashRouter는 지원되는 브라우저나 웹 서버에 제한이 없다.

하지만, 위에서 언급한 것처럼 example.com/#/messages/messages와 같이 주소에 Hash가 붙게 된다. HashRouter는 URL Hash를 서버에서 읽을 수 없기 때문에 Server Side Rendering으로 설정을 Backup할 수 없다. 또한, Hash History를 지원하지 않는다.

BrowserRouter는 Link Component로 to 속성에 이동할 경로를 사용한다.

Route Component Path 속성을 Link의 to 속성으로 Component Mapping Path를 기술한다.

새로고침 시 경로를 못 찾아 Error가 나며, 대부분의 레거시 브라우저(IE 9 이하)에서 사용할 수 없다.

또한, BrowserRouter는 History API를 사용해야 한다.

사실 많은 React 코드에서 Routing 하는 Logic을 살펴보면 BrowserRotuer가 압도적으로 많이 사용된다. 왜냐하면 예전에는 사람들이 URL 위치 변경 시 javaScript를 사용할 수 없었기 때문에 HashRouter를 사용했으나, 최근에는 BrowserRotuer가 이 불편함을 해소해주고 있기 때문이며, HashRouter는 History Location을 지원하지 않기 때문에 불편함이 많기 때문이다. BrowserRotuer는 History Location을 지원하며, 다양한 기능을 사용하여 멋진 웹을 만들 수 있다.


```javaScript
import {HashRouter, Route, Switch, Link} from 'react-router-dom';

ReactDOM.render(
  // BrowserRouter로 App을 감싸 App Component에서 BrwoserRouter를 사용할 수 있게 한다.
    <HashRouter>
      <App />
    </HashRouter>,
  document.getElementById('root')
);
```

위와 같이 BrowserRouter를 HashRouter로 변경하게 되면 



### Nav Link

Link와 유사하지만, 좀 더 부가 기능이 더 존재

```javaScript
import {HashRouter, Route, Switch, NavLink} from 'react-router-dom';


<ul>
  <li>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/topics">Topics</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </li>      
</ul>
```

해당 Link를 클릭하면 Browser에서 Rander를 할 때, class가 생기게 된다. 그리고 해당 Link를 클릭했을 때, 해당 class가 active가 되게 하려면 NavLink 뒤에 exact를 붙혀주면 된다.


```javaScript
<ul>
  <li>
    <NavLink exact to="/">Home</NavLink>
    <NavLink exact to="/topics">Topics</NavLink>
    <NavLink exact to="/contact">Contact</NavLink>
  </li>      
</ul>
```

이렇게 설정 해 두면 이용자가 자신이 위치한 위치를 직관적으로 이해할 수 있게 Navigation에 표시를 해줄 수 있다.

해당 js의 css에다가 active Class CSS를 만들어주면 된다.

index.css

```css
.active{
    background-color: blueviolet;
    text-decoration: none;
}
```



### Nested Routing

이번에는 파라미터를 살펴보자

useParams는 하나의 Route에 파라미터를 받기 위한 표시를 해주면(아래 코드에서 :/topic_id 부분)

예:)

```javaScript
<Route path="/topics:/topic_id">
  <Topic></Topic>
</Route>
```

저 자리에 들어오는 값들을 아래 컴포넌트로 전달 되는데, 해당 값을 useParams()로 받을 수 있고, 그 값에 따라서 동적으로 동작하는 페이지를 만들 수 있다.