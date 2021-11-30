import React from 'react';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <div className='main-cont'>
      <header className='header'>
        <h1>Form Validation Project</h1>
      </header>
      <main className='main'>
        <SignUpForm />
      </main>
      <footer className='footer'>
        <div>This is footer</div>
      </footer>
    </div>
  );
}

export default App;
