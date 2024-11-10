import { useState } from 'react';

const App = () => {
  return (
    <div>
      {
        Array.from({ length: 24 }, (_, index) => (
          <p className='wrap-img'><img src={`/pdf/img${index + 1}.jpg`} alt="" /></p>
        ))
      }
    </div>
  );
};

export default App;
