import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Switch, NavLink, useParams} from 'react-router-dom';

function Home() { // Component는 하나의 페이지를 담당한다고 생각하자
  return ( // return은 실제로 페이지에 보여질 View의 내용을 담는다.
    <div>
      <h2>Home</h2>
      Home...
    </div>
  ) // return() 끝
} // Home() 끝

var contents = [ // contents라는 Array 안에 딕셔너리(Map)으로 아래 값을 담는다.
  {id:1, title: 'HTML', description:'HTML is ...'},
  {id:2, title: 'JavaScript', description:'JavaScript is ...'},
  {id:3, title: 'React', description:'React is ...'}
]

function Topic() {

  var params = useParams();

  console.log('params', params);

  return(
    <div>
      <h3>Topic</h3>
      Topic is ...
    </div>
  );
}

function Topics() { // Component는 하나의 페이지를 담당한다고 생각하자

  var lis = [];

  for(var i = 0; i < contents.length; ++i) {
    lis.push(<li> <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink> </li>)
  }

  return ( // return은 실제로 페이지에 보여질 View의 내용을 담는다.
    <div>

      <h2>Topics</h2>
      
      <ul>
        {lis}
      </ul>

      <Route path="/topics:/topic_id">
        <Topic></Topic>
      </Route>
{/*       
      <Switch>
        <Route path="/topics/1">
          HTML is ...
        </Route>

        <Route path="/topics/2">
          JavaScript is ...
        </Route>

        <Route path="/topics/3">
          React is ...
        </Route>
      </Switch>
*/}

    </div>
  ) // return() 끝
} // Topics() 끝

function Contact() { // Component는 하나의 페이지를 담당한다고 생각하자
  return ( // return은 실제로 페이지에 보여질 View의 내용을 담는다.
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  ) // return() 끝
} // Contact() 끝

function App() {
  return (
    <div> 
      <h1>React Rount Dom exaple</h1>

      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact  to="/topics">Topics</NavLink>
          <NavLink exact  to="/contact">Contact</NavLink>
        </li>      
      </ul>

      <Switch>

        {/* 이용자가 URL 입력창에 URI에 아무것도 입력 안했을 때 Home으로 Routing */}
        <Route exact path="/">
          <Home></Home>
        </Route>

        {/* 이용자가 URL 입력창에 URI에 topics를 입력 했을 때 Topics로 Routing */}
        <Route path="/topics">
          <Topics></Topics>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>

        <Route path="/">
          Not Found
        </Route>
    
      </Switch>
    </div>
  )

      // 이용자가 URL 입력창에 URI에 contact로 입력 했을 때 Contact로 Routing 
//      <Route exact path="/contact">
//        <Contact></Contact>
//      </Route>
} // APP () 끝

ReactDOM.render(
  // BrowserRouter로 App을 감싸 App Component에서 BrwoserRouter를 사용할 수 있게 한다.
    <HashRouter>
      <App />
    </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();