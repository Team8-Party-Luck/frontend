import React from 'react';
import UserCard from '../components/UserList/UserCard';
import HeaderNav from '../shared/HeaderNav';

const UserList = () => {
 return(<React.Fragment>
   <HeaderNav name='유저 리스트'/>
   <UserCard/>
   <UserCard/>
   <UserCard/>
 </React.Fragment>)
}

export default UserList;