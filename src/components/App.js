import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import Friends from './Friends/Friends';
import friends from './Friends/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

function App() {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 120,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
