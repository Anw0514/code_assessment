import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUser } from '../redux/userSlice';
import styled from 'styled-components';

const User = styled.li`
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;

  &:hover {
    background-color: #c2c2c2;
  }
`
const Users = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
`

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderUsers = () => {
    if (Array.isArray(users)) {
      return users.map(u => (
        <User onClick={() =>dispatch(selectUser(u.id))}>
          {u.name} at {u.company}
        </User>
      ));
    }
  }

  return (
    <div>
      <h2>Users</h2>
      <Users>
        {renderUsers()}
      </Users>
    </div>
  )
}
