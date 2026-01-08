import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  console.log('API_BASE:', API_BASE);

  useEffect(() => {
    fetch(`${API_BASE}/`)
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  },[]);

  return (
    <div><p>Rentool said:  {message}</p></div>
  )
}

export default App
