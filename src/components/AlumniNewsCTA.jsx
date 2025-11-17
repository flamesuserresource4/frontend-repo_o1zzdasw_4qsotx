import { Users, Newspaper, Calendar, ArrowRight } from 'lucide-react'

export default function AlumniNewsCTA() {
  return (
    <section className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <a href="/alumni" className="group rounded-xl border border-white/10 bg-zinc-900 p-8 hover:bg-zinc-800 transition flex items-start gap-4">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <Users className="text-orange-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Comunidad Alumni</h3>
              <p className="mt-2 text-sm text-gray-300">Conecta con la Asociación para el Talento: mentoring, empleo, partners y más.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-orange-400 text-sm">Entrar <ArrowRight size={16} /></span>
            </div>
          </a>

          <a href="/noticias-eventos" className="group rounded-xl border border-white/10 bg-zinc-900 p-8 hover:bg-zinc-800 transition flex items-start gap-4">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <Newspaper className="text-orange-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Noticias</h3>
              <p className="mt-2 text-sm text-gray-300">Historias de impacto, acuerdos con empresas y novedades de la escuela.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-orange-400 text-sm">Leer <ArrowRight size={16} /></span>
            </div>
          </a>

          <a href="/noticias-eventos" className="group rounded-xl border border-white/10 bg-zinc-900 p-8 hover:bg-zinc-800 transition flex items-start gap-4">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <Calendar className="text-orange-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Eventos</h3>
              <p className="mt-2 text-sm text-gray-300">Demo days, workshops, encuentros de founders y viajes internacionales.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-orange-400 text-sm">Ver agenda <ArrowRight size={16} /></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
