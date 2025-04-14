// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const pass = password.toLowerCase().trim();
    if (pass === 'officer') {
      router.push('/assistant?role=officer');
    } else if (pass === 'supervisor') {
      router.push('/assistant?role=supervisor');
    } else if (pass === 'exec team') {
      router.push('/assistant?role=exec');
    } else {
      setError('Invalid passcode.');
    }
  };

  return (
    <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>DOCCSAi Login</h1>
      <form onSubmit={handleLogin} style={{ marginTop: '2rem' }}>
        <input
          type="password"
          placeholder="Enter passcode..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.75rem', fontSize: '1rem', width: '250px' }}
        />
        <button
          type="submit"
          style={{ marginLeft: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#003366', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}
