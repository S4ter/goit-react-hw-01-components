import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendlist/FriendList';
import { TransactionHistory } from 'components/transactionhistory/TransactionHistory';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics />
    <FriendList />
    <TransactionHistory />
  </React.StrictMode>
);
