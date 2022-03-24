import React from 'react';
import { useSelector } from 'react-redux';
import { selectedUsersSelector } from '../redux/userSlice';
import UserCard from './UserCard';
import styled from 'styled-components';

const UsersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function DetailedUsers() {
  const users = useSelector(selectedUsersSelector)
  return (
    <UsersDiv>{users.map(u => <UserCard {...u} />)}</UsersDiv>
  )
}
