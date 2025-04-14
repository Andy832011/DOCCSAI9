// pages/assistant.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Assistant() {
  const router = useRouter();
  const { role } = router.query;
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const roleLabel = role === 'exec' ? 'Executive Staff' : role === 'supervisor' ? 'Supervisory Staff' : 'Line Staff';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');
    try {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, role })
      });
      const data = await res.json();
      setResponse(data.reply || 'No response received.');
    } catch (err) {
      setResponse('Error contacting assistant.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>DOCCSAi – {roleLabel}</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <textarea
          rows="4"
          style={{ width: '100%', maxWidth: '600px', padding: '1rem' }}
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="submit" style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#003366', color: 'white', border: 'none' }}>
          {loading ? 'Thinking...' : 'Submit'}
        </button>
      </form>
      {response && (
        <div style={{ marginTop: '2rem', maxWidth: '600px', backgroundColor: '#f4f4f4', padding: '1rem' }}>
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
