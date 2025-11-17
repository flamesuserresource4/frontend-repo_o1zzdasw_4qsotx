import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Inicio', to: '/' },
  {
    label: 'Programas',
    to: '/programas',
    children: [
      { label: 'Subvencionados', to: '/programas/subvencionados' },
      { label: 'Accelerator', to: '/programas/accelerator' },
      { label: 'Executive', to: '/programas/executive' },
      { label: 'Máster', to: '/programas/master' },
    ],
  },
  { label: 'Comunidad Alumni', to: '/alumni' },
  { label: 'Noticias y Eventos', to: '/noticias-eventos' },
  { label: 'Sobre Nosotros', to: '/sobre-nosotros' },
  { label: 'Contacto/Inscripción', to: '/contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openPrograms, setOpenPrograms] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-yellow-400" />
            <span className="text-white font-semibold tracking-wide">Phimister’s Business School</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="text-sm text-gray-200 hover:text-white transition"
                    onMouseEnter={() => setOpenPrograms(true)}
                    onMouseLeave={() => setOpenPrograms(false)}
                  >
                    {item.label}
                  </button>
                  <div
                    onMouseEnter={() => setOpenPrograms(true)}
                    onMouseLeave={() => setOpenPrograms(false)}
                    className={`absolute left-0 mt-3 w-64 bg-zinc-900 border border-white/10 rounded-lg shadow-lg overflow-hidden transition-opacity ${
                      openPrograms ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 text-sm ${
                              isActive ? 'text-orange-400' : 'text-gray-200 hover:text-white'
                            } hover:bg-white/5`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm ${isActive ? 'text-orange-400' : 'text-gray-200 hover:text-white'} transition`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <Link
              to="/contacto"
              className="ml-2 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold text-sm px-4 py-2 shadow hover:opacity-90 transition"
            >
              Solicita Información
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="list-none flex items-center justify-between text-gray-200 py-2 cursor-pointer">
                      <span>{item.label}</span>
                      <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <div className="pl-3 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `block text-sm ${isActive ? 'text-orange-400' : 'text-gray-300 hover:text-white'} py-1`
                          }
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </details>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block ${isActive ? 'text-orange-400' : 'text-gray-200 hover:text-white'} py-2`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <Link
              to="/contacto"
              className="block w-full text-center rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold text-sm px-4 py-2"
              onClick={() => setOpen(false)}
            >
              Solicita Información
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
