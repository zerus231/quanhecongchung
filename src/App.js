import { useEffect, useState } from 'react';
import sampleText from './assets/sample.txt';

const App = () => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    fetch(sampleText)
      .then((response) => response.text())
      .then((text) => setFileContent(text))
      .catch((error) => console.error('Error loading text file:', error));
  }, [])
  return (
    <div style={{ width: 720, wordBreak: 'break-all' }}>
      <pre style={{ padding: 20, fontSize: 20 }}>
        {fileContent}
      </pre>
    </div>
  )
};

export default App;
