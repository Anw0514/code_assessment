import React from 'react';
import DetailedUsers from './DetailedUsers';
import UserList from './UserList';
import styled from 'styled-components';

const AppDiv = styled.div`
  display: flex;
  gap: 10px;
  padding: 2em;
  align-items: flex-start;
`

function App() {
  return (
    <AppDiv>
      <UserList/>
      <DetailedUsers/>
    </AppDiv>
  );
}

export default App;
