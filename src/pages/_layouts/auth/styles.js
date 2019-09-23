import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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

      &:hover {
        opacity: 0.8;
      }
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
