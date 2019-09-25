import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input,
    textarea {
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
  }
`;
