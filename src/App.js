import React, { useState } from 'react';
import loremData from './data.json'; // Import the JSON data

function App() {
  const [count, setCount] = useState(1);
  const [lorem, setLorem] = useState([]);

  const handleGenerate = () => {
    const amount = parseInt(count);
    setLorem(loremData.slice(0, amount)); // Limit paragraphs based on user input
  };

  return (
    <div className="App" style={styles.app}>
      <h1>Lorem Ipsum Generator</h1>
      <div style={styles.formGroup}>
        <label htmlFor="paragraphs">Number of Paragraphs:</label>
        <input
          type="number"
          id="paragraphs"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min="1"
          max={loremData.length}
          style={styles.input}
        />
        <button onClick={handleGenerate} style={styles.button}>
          Generate
        </button>
      </div>
      <div style={styles.loremOutput}>
        {lorem.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

// Simple CSS in JS for styling
const styles = {
  app: { fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' },
  formGroup: { marginBottom: '20px' },
  input: { padding: '5px', width: '50px', textAlign: 'center' },
  button: { marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' },
  loremOutput: { textAlign: 'left', maxWidth: '600px', margin: '0 auto' }
};

export default App;
