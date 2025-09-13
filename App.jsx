import { Routes, Route, useLocation } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import HomePages from './pages/HomePages';
import ClassPages from './pages/ClassPages';
import ProgramPages from './pages/ProgramPages';
import FaqPage from './pages/FaqPage';
import SyaratKetenPage from './pages/SyaratKetenPage';
import BeritaPages from './pages/BeritaPages';
import GalleryPages from './pages/GaleriPages';
import LoginPage from './pages/LoginPages';
import SignUpPage from './pages/SignUpPages';
import DaftarSiswaPages from './pages/DataSiswaPages';
import ForgotPasswordPage from './pages/ForgotPasswordPages';

function App() {
  const location = useLocation(); 
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forgot-password'; 
  return (
    <div>
      {!hideNavbar && <NavbarComponent />}
      {/* <NavbarComponent /> */}

      <Routes>
        <Route path='/' element={<HomePages />}/> 
        <Route path='/class' element={<ClassPages />}/> 
        <Route path="/berita" element={<BeritaPages />} />
        <Route path='/program' element={<ProgramPages />}/>
        <Route path='/galeri' element={<GalleryPages />}/>
        <Route path='/faq' element={<FaqPage />}/> 
        <Route path='/syaratKeten' element={<SyaratKetenPage />}/> 
        <Route path='/login' element={<LoginPage />}/> 
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/siswa' element={<DaftarSiswaPages />}/>
        <Route path='/forgot-password' element={<ForgotPasswordPage />}/>
      </Routes>

      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;