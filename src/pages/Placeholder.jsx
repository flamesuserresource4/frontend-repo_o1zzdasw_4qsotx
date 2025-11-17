import Layout from '../components/Layout'

export default function Placeholder({ title, description }) {
  return (
    <Layout>
      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl">{description}</p>
          <div className="mt-10 rounded-xl border border-white/10 bg-zinc-900 p-8">
            <p className="text-sm text-gray-400">Esta es una vista provisional. Aquí añadiremos los contenidos y llamadas a la acción definitivas.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
