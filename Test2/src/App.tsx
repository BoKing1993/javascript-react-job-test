import React from 'react';
import { Security, Person } from '@material-ui/icons'
import { List } from './components';
import { invites, teamMembers } from './mock';
import './App.css';

function App() {
  const admins = teamMembers.filter((member) => member.role === 'Administrator');
  const users = teamMembers.filter((member) => member.role === 'Standard');
  const adminInvites = invites.filter((invite) => invite.role === 'Administrator');
  const userInvites = invites.filter((invite) => invite.role === 'Standard');

  return (
    <div className="App">
      <List icon={<Security className="item-icon" />} title="Administrators" members={admins} invites={adminInvites} />
      <List icon={<Person className="item-icon" />} title="Standard Users" members={users} invites={userInvites} />
    </div>
  );
}

export default App;
