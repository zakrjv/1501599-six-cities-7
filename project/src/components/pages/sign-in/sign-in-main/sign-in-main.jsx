import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from '../../../../store/api-actions';

function SignInMain() {
  const dispatch = useDispatch();

  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = (authData) => {
    dispatch(login(authData));
  };

  const handlePasswordInput = (evt) => {
    evt.target.value.trim().length < 1
      ? evt.target.setCustomValidity('Password cannot contain only spaces')
      : evt.target.setCustomValidity('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1
            className="login__title"
            data-testid="login__title"
          >
            Sign in
          </h1>

          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={loginRef}
                className="login__input form__input"
                type="email" name="email"
                placeholder="Email"
                required=""
                data-testid="email"
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
                onInput={handlePasswordInput}
                data-testid="password"
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>

        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="/">
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignInMain;
