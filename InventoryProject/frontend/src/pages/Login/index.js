import React from 'react';

import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Container, LoginImage, LoginForm, Divisor, Content } from './styles';

import Logo from '../../assets/images/Logo/Logo.png';

export default function Login() {
  return (
    <Container>
      <Content>
        <LoginImage>
          <img src={Logo} alt="" />
          <h3>“Controle seu estoque de forma inteligente.”</h3>
        </LoginImage>
        <Divisor />
        <LoginForm>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <h3>Faça seu login</h3>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Entrar</button>
                <span>
                  Não é cadastrado?
                  <Link>Cadastre-se</Link>{' '}
                </span>
              </form>
            )}
          </Formik>
        </LoginForm>
      </Content>
    </Container>
  );
}
