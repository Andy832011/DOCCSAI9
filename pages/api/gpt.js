import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, role } = req.body;

  let systemPrompt = 'You are DOCCSAi, a professional assistant for the NY State Department of Corrections and Community Supervision.';

  if (role === 'officer') {
    systemPrompt = 'You are DOCCSAi, focused on frontline staff duties.';
  } else if (role === 'supervisor') {
    systemPrompt = 'You are DOCCSAi, assisting with supervisory staff tasks.';
  } else if (role === 'exec') {
    systemPrompt = 'You are DOCCSAi, assisting NYSDOCCS executive leadership.';
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      temperature: 0.4
    });

    const reply = response.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error('OpenAI error:', error.message);
    res.status(500).json({ error: 'OpenAI API failed', details: error.message });
  }
}
