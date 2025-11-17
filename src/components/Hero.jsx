import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-black text-white flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-24">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Forma el futuro con una escuela creada por emprendedores
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl"
            >
              Programas prácticos para iniciar, escalar e internacionalizar proyectos. Subvencionados, Accelerator, Executive y Máster con CETT-UB.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#programas" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold text-sm px-5 py-3 shadow hover:opacity-90 transition">
                Ver Programas
              </a>
              <a href="/contacto" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white font-semibold text-sm px-5 py-3 hover:bg-white/10 transition">
                Solicita información
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:block hidden">
            <div className="relative p-1 rounded-xl bg-gradient-to-br from-orange-500/40 to-yellow-400/40">
              <div className="rounded-xl bg-black/60 border border-white/10 p-6">
                <p className="text-sm text-gray-300">Reconocida por impulsar la empleabilidad y el autoempleo con programas 100% subvencionados.</p>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {[
                    { k: '+1.2k', v: 'Alumnos' },
                    { k: '92%', v: 'Empleabilidad' },
                    { k: '4.8/5', v: 'Satisfacción' },
                  ].map((m) => (
                    <div key={m.k} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-white">{m.k}</p>
                      <p className="text-xs text-gray-400">{m.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
