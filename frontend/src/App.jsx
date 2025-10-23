import React, { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Chargement...')

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Erreur de connexion au backend'))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '3rem' }}>
      <h1>🚀 Frontend React + Backend FastAPI</h1>
      <p>Message du backend : <strong>{message}</strong></p>
    </div>
  )
}

export default App
