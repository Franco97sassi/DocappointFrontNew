import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import './App.css'
import { Header } from "./layout/Header/Header";
import { Home } from "./pages/Home/Home";
import { Footer } from "./layout/Footer/Footer";
import { Login } from "./pages/Login/Login";
import { AuthProvider } from "./components/context/AuthContext";
import { Especialistas } from "./pages/Especialistas/Especialistas";
import { Error } from "./pages/Error/Error";
import  Consulta  from "./pages/Consulta/Consulta";
import Perfil from "./pages/Perfil";

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
           <Route path="/consulta" element={<Consulta />} /> 

          <Route path="/login/*" element={<Login />} />
          <Route path="/especialistas/*" element={<Especialistas />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

