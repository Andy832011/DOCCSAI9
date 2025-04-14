import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{
        background: '#f5faff',
        minHeight: '100vh',
        padding: '4rem 2rem',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#002244',
        lineHeight: '1.6',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem' }}>
          About DOCCSAi
        </h1>

        <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
          <strong>DOCCSAi</strong> is the next-generation correctional operations assistant — built specifically for the
          <strong> New York State Department of Corrections and Community Supervision</strong> by Andrew Fuller.
          <br /><br />
          Designed to streamline decision-making, staffing support, and policy clarity across all security levels,
          DOCCSAi is an artificial intelligence system powered by GPT-4. It empowers staff, simplifies paperwork, interprets policy,
          and accelerates routine administrative tasks — all with precision and professionalism.
          <br /><br />
          From misbehavior report guidance to administrative hearing logic, DOCCSAi turns hours of analysis into
          **minutes of trusted clarity**.
        </p>
      </main>
    </>
  );
}
