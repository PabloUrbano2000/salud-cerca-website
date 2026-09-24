import { Navigate, Route, Routes } from 'react-router'
import BookingPage from './pages/BookingPage'
import ConfirmationPage from './pages/ConfirmationPage'
import DoctorHomePage from './pages/DoctorHomePage'
import DoctorProfilePage from './pages/DoctorProfilePage'
import DoctorSettingsPage from './pages/DoctorSettingsPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PatientHomePage from './pages/PatientHomePage'
import SchedulePage from './pages/SchedulePage'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/paciente" element={<PatientHomePage />} />
      <Route path="/doctores/:id" element={<DoctorProfilePage />} />
      <Route path="/reserva/:id" element={<BookingPage />} />
      <Route path="/confirmacion" element={<ConfirmationPage />} />
      <Route path="/doctor" element={<DoctorHomePage />} />
      <Route path="/doctor/perfil" element={<DoctorSettingsPage />} />
      <Route path="/doctor/horarios" element={<SchedulePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
