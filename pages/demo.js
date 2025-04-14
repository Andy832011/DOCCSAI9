import Navbar from '../components/Navbar';

export default function Demo() {
  return (
    <>
      <Navbar />
      <main style={{
        background: '#f0f8ff',
        minHeight: '100vh',
        padding: '4rem 2rem',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#002244',
        lineHeight: '1.6',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem' }}>
          DOCCSAi Demo Overview
        </h1>

        <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
          <strong>DOCCSAi is powered by GPT-4</strong> and is trained to operate as a high-performance assistant for the
          New York State Department of Corrections and Community Supervision. It understands DOCCS directives,
          NYS labor law, HALT provisions, misbehavior codes, and staffing challenges.
          <br /><br />
          Officers, sergeants, lieutenants, and administrators can ask questions, submit incident descriptions,
          and receive clear answers — instantly.
          <br /><br />
          🧠 Example Prompts:<br />
          • “What charges apply to a refusal to lock in?”<br />
          • “List the required steps for a Tier III hearing.”<br />
          • “Fix this misbehavior report draft for legal clarity.”<br />
          • “Show me SHU policies for mental health watches.”<br />
          • “Explain 106.10 and 113.25 for cell search protocol.”<br /><br />

          What would take **hours of time or confusion** is solved by DOCCSAi in **seconds** — with accuracy, authority, and clarity.
        </p>
      </main>
    </>
  );
}
