import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;

  img {
    width: 100%;
    margin-top: 52px;
  }
`;

export const MeetupTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 32px;
  }

  div {
    a:first-child {
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

    a {
      border: 0;
      color: #fff;
      font-weight: bold;
      background: #4dbaf9;
      border-radius: 4px;
      padding: 12px 10px;
      margin-left: 10px;
      transition: opacity 0.5s;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const MeetupInfo = styled.div`
  color: #fff;
  font-size: 18px;
  margin-top: 20px;

  p {
    line-height: 32px;
  }

  div {
    text-align: left;
    margin-top: 20px;
    display: flex;

    span {
      color: #999;
      margin: 0 30px;
    }
  }
`;
