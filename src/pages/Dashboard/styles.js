import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      border: 0;
      color: #fff;
      font-weight: bold;
      background: #d44059;
      border-radius: 4px;
      padding: 12px 10px;
      margin-left: 10px;
      transition: opacity 0.5s;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  h1 {
    color: #fff;
  }
`;

export const Meetups = styled.ul`
  width: 100%;
  margin-top: 50px;
`;

export const Meetup = styled.li`
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  margin-top: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: #fff;
    font-size: 16px;
  }

  span {
    font-size: 14px;
    color: #999;
  }

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
  }
`;
