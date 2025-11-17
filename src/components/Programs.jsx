import { GraduationCap, Rocket, Briefcase, School } from 'lucide-react'

const items = [
  {
    icon: GraduationCap,
    title: 'Subvencionados',
    desc: 'Formación práctica 100% financiada para iniciar tu carrera o proyecto con acompañamiento real.',
    href: '/programas/subvencionados',
  },
  {
    icon: Rocket,
    title: 'Accelerator',
    desc: 'Para emprendedores que quieren avanzar con velocidad: validación, tracción y métricas.',
    href: '/programas/accelerator',
  },
  {
    icon: Briefcase,
    title: 'Executive',
    desc: 'Para founders y CEOs que necesitan escalar equipos, operaciones y financiación.',
    href: '/programas/executive',
  },
  {
    icon: School,
    title: 'Máster',
    desc: 'Máster junto al CETT-UB con estancia en San Francisco y foco en internacionalización.',
    href: '/programas/master',
  },
]

export default function Programs() {
  return (
    <section id="programas" className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Recorridos formativos</h2>
          <a href="/programas" className="text-sm text-orange-400 hover:text-orange-300">Ver todos</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc, href }) => (
            <a key={title} href={href} className="group relative rounded-xl border border-white/10 bg-zinc-900 p-6 hover:bg-zinc-800 transition overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-400/0 group-hover:from-orange-500/10 group-hover:to-yellow-400/10 transition pointer-events-none" />
              <Icon className="text-orange-400" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
              <span className="mt-4 inline-flex text-sm text-orange-400">Explorar →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
