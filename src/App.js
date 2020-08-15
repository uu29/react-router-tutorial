import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Login from './routes/Login';
import MyPage from './routes/MyPage';
import Search from './routes/Search';
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          {/* 스위치가 있으면 가장 처음 매칭되는 것만 보여주고 아무것도 매칭되는 것이 없으면 마지막 컴포넌트를 보여줌 */}
          <Route exact="true" path="/" component={Home}/>
          <Route path="/about/:username" component={About}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/login" component={Login}/>
          <Route path="/mypage" component={MyPage}/>
          <Route path="/search" component={Search}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;