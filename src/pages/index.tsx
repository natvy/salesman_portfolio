import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <main>
                <h1>Portfolio - Proyectos</h1>
                <section>
                    {/* mapeo de las tarjetas del proyecto 1 */}
                    <div className="project-card">
                        <h2>Proyecto 1</h2>
                        <p>Descripción del proyecto 1</p>
                        <Link href="/proyecto1">Ver más</Link>
                    </div>
                </section>
            </main>
        </Layout>
    )
}