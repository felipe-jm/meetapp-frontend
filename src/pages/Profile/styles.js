import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;

  img {
    width: 64px;
    height: 64px;
    margin-bottom: 30px;
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
`;
