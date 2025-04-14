import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#e6f0ff', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#003366' }}>
          Welcome to DOCCSAi
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#001f3f', marginTop: '1rem' }}>
          Operational Intelligence. Correctional Precision.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Image src="/doccs-logo.png" alt="DOCCS Logo" width={250} height={100} />
        </div>

        <div style={{ marginTop: '3rem' }}>
          <a href="/assistant" style={{
            background: '#0070f3',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.25rem'
          }}>
            Launch Assistant
          </a>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#003366', color: 'white' }}>
        Built for the New York State Department of Corrections and Community Supervision by Andrew Fuller
      </footer>
    </div>
  );
}
