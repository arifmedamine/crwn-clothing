import './App.css';
import {HomePage} from './pages/homepage/homepage.component';
import {Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Route path='/' component={HomePage}></Route>
      <Route path='/hats' component={HatsPage}></Route> 
    </div>
  );
}

export default App;
