import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import { MdNotifications } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationsList,
  Notification,
  Scroll,
  MarkAsRead
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatRelative(
          parseISO(notification.createdAt),
          new Date()
        )
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#D44059" size={32} />
      </Badge>

      <NotificationsList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <MarkAsRead onClick={() => handleMarkAsRead(notification._id)}>
                  Mark as read
                </MarkAsRead>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationsList>
    </Container>
  );
}
