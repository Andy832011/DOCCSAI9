import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{
        background: '#f5fbff',
        minHeight: '100vh',
        padding: '4rem 2rem',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#002244',
        lineHeight: '1.6',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem' }}>
          Contact the Developer
        </h1>

        <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
          For all questions, feedback, partnership inquiries, or pilot program discussions regarding DOCCSAi, please contact:
          <br /><br />
          <strong>Andrew Fuller</strong><br />
          New York State Department of Corrections and Community Supervision<br />
          📧 <a href="mailto:Andrew.Fuller3@doccs.ny.gov" style={{ color: '#0074D9' }}>Andrew.Fuller3@doccs.ny.gov</a>
          <br /><br />
          DOCCSAi is currently under internal pilot review and will be available for live deployment upon authorization from NYSDOCCS leadership.
        </p>
      </main>
    </>
  );
}
