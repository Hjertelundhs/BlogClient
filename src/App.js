import "./App.css"
import HomePage from './components/HomePage'
import Layout from './components/layout'
import LoginPage from './components/LoginPage'
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
