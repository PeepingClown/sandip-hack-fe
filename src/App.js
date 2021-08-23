import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/homepage/home';
import getCode from '../src/pages/getCodePage/getCode';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/code" exact component={getCode} />
    </Router>
  );
}

export default App;
