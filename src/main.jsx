import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Placeholder from './pages/Placeholder'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programas" element={<Placeholder title="Programas" description="Explora todos nuestros itinerarios: Subvencionados, Accelerator, Executive y Máster." />} />
        <Route path="/programas/subvencionados" element={<Placeholder title="Programas Subvencionados" description="Formación práctica 100% financiada para impulsar tu empleabilidad y emprendimiento." />} />
        <Route path="/programas/accelerator" element={<Placeholder title="Accelerator" description="Para emprendedores que quieren avanzar: producto, ventas y métricas." />} />
        <Route path="/programas/executive" element={<Placeholder title="Executive" description="Para founders y CEOs que buscan escalar equipos, operaciones y financiación." />} />
        <Route path="/programas/master" element={<Placeholder title="Máster CETT-UB + San Francisco" description="Una experiencia internacional para llevar tu proyecto al siguiente nivel." />} />
        <Route path="/alumni" element={<Placeholder title="Comunidad Alumni" description="Asociación para el Talento: networking, mentoring y oportunidades." />} />
        <Route path="/noticias-eventos" element={<Placeholder title="Noticias y Eventos" description="Historias, acuerdos y agenda de actividades de la escuela." />} />
        <Route path="/sobre-nosotros" element={<Placeholder title="Sobre Nosotros" description="Conoce nuestra misión, equipo y metodología." />} />
        <Route path="/contacto" element={<Placeholder title="Contacto / Inscripción" description="Solicita información y te acompañamos a elegir el mejor recorrido para ti." />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
