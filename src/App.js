import './App.css';
import { Routes, Route } from 'react-router-dom'
import Banner from './components/Banner/Banner';
import Counter from './counter/Counter';
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  
  return (
    <div className="App">
    <Banner />
    <Routes>
      <Route path='/' element={<TodoPage />} />
      <Route path='/followers' element={<FollowersPage />} />
    </Routes>
    <Counter />
    </div>
  );
}

export default App;
