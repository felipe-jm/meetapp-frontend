import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
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

  div {
    strong {
      color: ${props => (props.past ? '#999' : '#fff')};
      font-size: 18px;
      margin-right: 12px;
    }

    p {
      color: #d44059;
      font-size: 16px;
    }
  }

  span {
    font-size: 14px;
    color: #999;
  }

  background: ${props =>
    props.past ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)'};
  cursor: ${props => (props.past ? 'not-allowed' : 'pointer')};
  transition: 0.5s;

  &:hover {
    background: ${props => (props.past ? 'rgba(0, 0, 0, 0.3)' : '')};
    ${props =>
      !props.past &&
      css`
        background: rgba(0, 0, 0, 0.7);
        transform: scale(1.1);
      `};
  }
`;
