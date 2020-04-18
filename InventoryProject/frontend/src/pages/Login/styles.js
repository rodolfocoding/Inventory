import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1f59;
  width: 100%;
  height: 80%;
  border-radius: 20px;
`;
export const LoginImage = styled.div`
  display: block;
  width: 100%;
  img {
    display: block;
    height: 250px;
    max-width: 100%;
  }

  h3 {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 2.25em;
    line-height: 1.4em;
    color: #fff;
    text-align: center;
    width: 70%;
  }
`;
export const LoginForm = styled.div`
  width: 100%;

  input {
    flex: 1;
    background-color: #1a1f59;
    border: 2px solid #2deee2;
    border-radius: 20px;
    padding: 13px;
    color: #fff;
    margin: 10px 30px 10px 30px;

    ::placeholder {
      color: #fff;
    }
  }

  button {
    flex: 1;
    background: #00f344;
    border-radius: 20px;
    padding: 13px;
    margin: 10px 30px 10px 30px;

    transition: color 0.2s;
    &:hover {
      background: ${darken(0.05, '#00f330')};
    }
  }

  form {
    display: flex;
    flex-direction: column;

    h3 {
      color: #fff;
    }

    span {
      color: #fff;
      a {
        color: #ff0000;
      }
    }
  }
`;

export const Divisor = styled.div`
  align-self: center;
  border: 1px solid #2deee2;

  height: 700px;
  margin: 84 100 100 84;
`;
