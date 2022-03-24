import React from 'react';
import { useSelector } from 'react-redux';
import { selectedUsersSelector } from '../redux/userSlice';
import UserCard from './UserCard';

export default function DetailedUsers() {
  const users = useSelector(selectedUsersSelector)
  return (
    <div>{users.map(u => <UserCard {...u} />)}</div>
  )
}
