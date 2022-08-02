import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import StoryPage from './StoryPage'
import Nav from './Nav'
import Error from './Error'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/topstory/:id' element={<StoryPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
