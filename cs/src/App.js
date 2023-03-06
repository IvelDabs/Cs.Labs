import React from 'react';
import Login from './components/Login';
import log from './images/young.png';

function App() {
  return (
    <div className='start-container'>
      <div className='start'>
        <p className='para1'>
          Login below to get started
        </p>
        <div>
          <Login />
        </div>
        <p className='copy-rt'> 
         Copyright &copy; Code14 LABS {new Date().getFullYear()}
        </p>
      </div>

      <div className='young1'>
      <img src={log} alt="Logo" className="young" />
      </div>
    </div>
  );
}

export default App;