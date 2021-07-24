import React from 'react';
import Header from '../../elements-page/header/header';
import SignInMain from './sign-in-main/sign-in-main';

function SignIn() {
  return (
    <div className="page page--gray page--login">
      <Header/>
      <SignInMain/>
    </div>
  );
}

export default SignIn;
