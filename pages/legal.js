import Navbar from '../components/Navbar';

export default function Legal() {
  return (
    <>
      <Navbar />
      <main style={{
        background: '#eef6ff',
        minHeight: '100vh',
        padding: '4rem 2rem',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#002244',
        lineHeight: '1.6',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem' }}>
          Legal & Compliance
        </h1>

        <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
          <strong>DOCCSAi is fully aligned with the policies and standards of the New York State Department of Corrections and Community Supervision.</strong>
          <br /><br />
          The assistant is trained on source material including:
          <br /><br />
          • Official NYSDOCCS directives<br />
          • NYS Civil Service Law<br />
          • NYSCOPBA contractual protections<br />
          • HALT Act provisions<br />
          • NYS Correction Law & Labor Law<br /><br />

          DOCCSAi is built with legal safety in mind and respects:<br />
          - Bid rights and seniority<br />
          - RDO protections<br />
          - Due process for misbehavior hearings<br />
          - Mental health program compliance<br />
          - Staff fatigue protections under operational policy<br /><br />

          Data is never stored. All conversations are real-time and policy-based — ensuring union, legal, and departmental safety at every step.
        </p>
      </main>
    </>
  );
}
