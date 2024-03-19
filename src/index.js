import React from 'react';
import ReactDOM from 'react-dom/client';
import Introduction from './Introduction';
import Projects from './Projects';
import Education from './Education';
import Contacts from './Contacts';


function Website() {
  return (
      <div>
          <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
              <h1>Shinichi Ishikawa</h1>
              <p>Software Engineer</p>
          </header>
          <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Introduction />
              <Projects />
              <Education />
              <Contacts />
          </div>
      </div>
  );
}

ReactDOM.render(<Website />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Website />
);

