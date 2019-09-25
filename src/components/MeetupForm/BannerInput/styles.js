import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      height: 400px;
      background: #eee;
      margin-bottom: 15px;
    }

    input {
      display: none;
    }
  }
`;
