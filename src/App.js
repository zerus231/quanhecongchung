import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import file from './file.pdf';
// Text layer for React-PDF.
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const App = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from({ length: numPages }, (_, index) => (
          <Page key={index + "ádasd"} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default App;
