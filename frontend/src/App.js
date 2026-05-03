import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import RegisterPaciente from "./pages/RegisterPaciente";
import RegisterMedico from "./pages/RegisterMedico";

import DashboardPaciente from "./pages/DashboardPaciente";
import DashboardMedico from "./pages/DashboardMedico";
import DashboardAdmin from "./pages/DashboardAdmin";

import AgendarCita from "./pages/AgendarCita";
import RecoverPassword from "./pages/RecoverPassword";

import PerfilPaciente from "./pages/PerfilPaciente";
import CrearMedico from "./pages/CrearMedico";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register-paciente" element={<RegisterPaciente />} />
        <Route path="/register-medico" element={<RegisterMedico />} />

        <Route path="/dashboard-paciente" element={<DashboardPaciente />} />
        <Route path="/dashboard-medico" element={<DashboardMedico />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />

        <Route path="/agendar-cita" element={<AgendarCita />} />
        <Route path="/recover" element={<RecoverPassword />} />

        <Route path="/perfil" element={<PerfilPaciente />} />
        <Route path="/crear-medico" element={<CrearMedico />} />
      </Routes>
    </Router>
  );
}

export default App;