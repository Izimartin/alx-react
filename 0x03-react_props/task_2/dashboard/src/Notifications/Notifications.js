import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.jpg';
import NotificationItem from './NotificationItem'

export const Notification = () => {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem data-priority='default'>New course available</NotificationItem>
        <NotificationItem data-priority='urgent'>New resume available</NotificationItem>
        <NotificationItem
          data-priority='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}>
          </NotificationItem>
      </ul>
      <button
        className='close-icon'
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
      >
        <img
          src={closeIcon}
          alt='Close Icon'
          style={{ height: '20px', width: '20px' }}
        />
      </button>
    </div>
  );
};
export default Notification;