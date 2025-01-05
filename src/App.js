import './App.css'
import Post from './components/post'
import Layout from './components/layout'
import LoginPage from './components/LoginPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<Post />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
      </Route>
    </Routes>
  )
}

export default App
