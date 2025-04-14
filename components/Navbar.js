import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      background: '#003366',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        DOCCSAi
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/"><span style={{ cursor: 'pointer', color: 'white' }}>Home</span></Link>
        <Link href="/about"><span style={{ cursor: 'pointer', color: 'white' }}>About</span></Link>
        <Link href="/demo"><span style={{ cursor: 'pointer', color: 'white' }}>Demo</span></Link>
        <Link href="/contact"><span style={{ cursor: 'pointer', color: 'white' }}>Contact</span></Link>
        <Link href="/assistant"><span style={{ cursor: 'pointer', color: 'white' }}>Launch</span></Link>
      </div>
    </nav>
  );
}
