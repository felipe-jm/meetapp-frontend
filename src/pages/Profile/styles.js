import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  img {
    width: 64px;
    height: 64px;
    margin-bottom: 30px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      padding: 16px;
      margin: 0 0 15px;

      color: #fff;
      font-size: 18px;

      transition: color 0.5s;

      &:hover {
        color: #f94d6a;
      }

      &:focus {
        outline: 1px solid #f94d6a;
      }
    }

    button {
      border: 0;
      background: #f94d6a;
      border-radius: 4px;
      height: 44px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      transition: opacity 0.5s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 0.8;
      }
    }

    hr {
      border: 0;
      height: 2px;
      background: rgba(255, 255, 255, 0.5);
      margin: 10px 0 20px;
    }

    span {
      color: #fff;
      font-size: 16px;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    a {
      margin-top: 10px;
      color: #f94d6a;
      font-size: 18px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
