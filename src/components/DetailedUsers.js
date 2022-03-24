import React from 'react';
import { useSelector } from 'react-redux';
import { selectedUsersSelector } from '../redux/userSlice';

export default function DetailedUsers() {
  const users = useSelector(selectedUsersSelector)
  return (
    <div>{JSON.stringify(users)}</div>
  )
}
