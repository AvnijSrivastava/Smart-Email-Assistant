import React, { useState } from 'react'
import { generateEmail } from './api'

export default function App() {
  const [tone, setTone] = useState('Professional')
  const [emailContent, setEmailContent] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const tones = ['Professional', 'Casual', 'Friendly', 'Formal', 'Concise']

  async function onGenerate(e) {
    e.preventDefault()
    setError(null)
    setResult('')
    setLoading(true)
    try {
      const res = await generateEmail({ tone, emailContent })
      setResult(res)
    } catch (err) {
      setError(err?.response?.data || err.message || 'Request failed')
    } finally {
      setLoading(false)
    }
  }

  function onCopy() {
    if (!result) return
    navigator.clipboard.writeText(result)
  }

  return (
    <div className="container">
      <h1>Email Writer</h1>
      <form onSubmit={onGenerate} className="card">
        <label>Tone</label>
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          {tones.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label>Original Email / Prompt</label>
        <textarea
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          placeholder="Paste the email or write a short brief here..."
          rows={8}
        />

        <div className="actions">
          <button type="submit" className="primary" disabled={loading}>
            {loading ? 'Generating…' : 'Generate Email'}
          </button>
          <button type="button" onClick={() => { setEmailContent(''); setResult(''); }}>
            Clear
          </button>
        </div>
      </form>

      <div className="output card">
        <div className="output-header">
          <h2>Generated Email</h2>
          <div>
            <button onClick={onCopy} disabled={!result}>Copy</button>
          </div>
        </div>

        {error && <div className="error">{String(error)}</div>}

        <pre className="result">{result || 'Your generated email will appear here.'}</pre>
      </div>

      <footer className="footer">
        <small>Frontend (React + Vite) · POST /api/email/generate</small>
      </footer>
    </div>
  )
}
