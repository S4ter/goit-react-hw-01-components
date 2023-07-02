import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { Statistics } from 'components/statistics/Statistics.jsx';
import { FriendList } from 'components/friendlist/FriendList.jsx';
import { Profile } from 'components/profiles/Profile.jsx';
import { TransactionHistory } from 'components/transactionhistory/TransactionHistory.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Statistics />
    <Profile />
    <FriendList />
    <TransactionHistory />
  </React.StrictMode>
);
