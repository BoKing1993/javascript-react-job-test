import React from 'react';
import { Invite, TeamMember } from '../types';
import ListItem from './ListItem';

const List: React.FC<PropTypes> = (props) => {
  const { icon, title, members, invites } = props;

  function onClickItem(item: TeamMember | Invite) {
    console.log(item);
  }

  return (
    <div className="list-container">
      <div className="list-header">
        {icon}
        <p className="title">{title}</p>
      </div>
      <div className="list-content">
        {
          members.map((member: TeamMember) => (
            <ListItem key={member.id} onClick={() => onClickItem(member)}>
              <p className="item-name">{member.user.name} {member.user.lastName}</p>
            </ListItem>
          ))
        }
        {
          invites.map((invite: Invite) => (
            <ListItem key={invite.id} onClick={() => onClickItem(invite)}>
              <div className="item-invite">
                <p className="txt-phone">{invite.phone}</p>
                <p className="item-name">Invited</p>
              </div>
            </ListItem>
          ))
        }
      </div>
      
    </div>
    
  )
};

type PropTypes = {
  icon: React.ReactNode,
  title: string,
  members: TeamMember[],
  invites: Invite[]
}

export default List;
