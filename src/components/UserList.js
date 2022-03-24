import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUser } from '../redux/userSlice';

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderUsers = () => {
    if (Array.isArray(users)) {
      return users.map(u => (
        <li onClick={() =>dispatch(selectUser(u.id))}>
          {u.name} at {u.company}
        </li>
      ));
    }
  }

  return (
    <div>
      <ul>
        {renderUsers()}
      </ul>
    </div>
  )
}
