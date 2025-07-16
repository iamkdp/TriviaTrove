import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1')
      .then(response => response.json())
      .then(data => {
        console.log(data.results[0].question);
        setQuestion(data.results[0].question);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>Trivia Quiz</h1>
      {question ? <p>{question}</p> : <p> Loading...</p>}
    </>
  )
}

export default App
