import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import PhotoMoreInfo from './components/PhotoMoreInfo/PhotoMoreInfo'
import AboutPage from './pages/AboutPage/AboutPage'
import HomePage from './pages/HomePage/HomePage'
import NewsPage from './pages/NewsPage/NewsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import PhotosPage from './pages/PhotosPage/PhotosPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='news' element={<NewsPage />} />
          <Route path='photos' element={<PhotosPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
        <Route path='photos/:id' element={<PhotoMoreInfo/> } />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
