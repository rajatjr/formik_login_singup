import React from 'react';
import SignUpForm from './Component/SignUpForm';
import LoginForm from './Component/LoginForm';

const App = () => {
  return (
    <div>
  {/* <h2>Sign Up</h2> */}
      <SignUpForm />

      {/* <h2>Login</h2> */}
      <LoginForm />
    </div>
  );
};

export default App;
