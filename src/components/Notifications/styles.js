import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  margin-right: 15px;
  position: relative;
  z-index: 10;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 8px;
        top: 0;
        width: 10px;
        height: 10px;
        background: #4DBAF9
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationsList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 20px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(255, 255, 255, 0.3);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }
`;

export const MarkAsRead = styled.span`
  cursor: pointer;
  margin-left: 5px;
  font-size: 14px;
  color: #fff;

  &:hover {
    color: ${(0.2, '#D44059')};
  }
`;
