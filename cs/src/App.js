import React from 'react';
import Login from './components/Login';
import log from './images/young.png';
import log2 from './components/cslabs.png';

function App() {
  return (
    <div className='start-container'>
      <div className='start'>
        <img src={log2} alt="Logo" className="Logo" style={{ width: 190, marginBottom: 50 }}/>
        <p className='para1'>Login below to get started</p>
        <div>
          <Login />
        </div>
         <p className='copy-rt'>Copyright Code14 Labs 2023</p>
      </div>

      <div className='young1'>
      <img src={log} alt="Logo" className="young" />
      </div>
    </div>
  );
}

export default App;