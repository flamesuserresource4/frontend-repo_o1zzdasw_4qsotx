export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="w-9 h-9 rounded bg-gradient-to-br from-orange-500 to-yellow-400 mb-4" />
            <p className="text-sm text-gray-300">Phimister’s Business School. Innovación, emprendimiento y liderazgo con impacto.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-3">Programas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/programas/subvencionados" className="hover:text-white">Subvencionados</a></li>
              <li><a href="/programas/accelerator" className="hover:text-white">Accelerator</a></li>
              <li><a href="/programas/executive" className="hover:text-white">Executive</a></li>
              <li><a href="/programas/master" className="hover:text-white">Máster</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-3">Institución</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/sobre-nosotros" className="hover:text-white">Sobre Nosotros</a></li>
              <li><a href="/alumni" className="hover:text-white">Comunidad Alumni</a></li>
              <li><a href="/noticias-eventos" className="hover:text-white">Noticias y Eventos</a></li>
              <li><a href="/contacto" className="hover:text-white">Contacto/Inscripción</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Aviso legal</a></li>
              <li><a href="#" className="hover:text-white">Privacidad</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Phimister’s Business School. Todos los derechos reservados.</p>
          <p>Hecho con pasión por el emprendimiento.</p>
        </div>
      </div>
    </footer>
  )
}
