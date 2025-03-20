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
    <pre style={{padding: 20}}>
      {fileContent}
    </pre>
  )
};

export default App;
