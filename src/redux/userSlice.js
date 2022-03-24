import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  selectedUserIds: [],
  loading: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchUsers = createAsyncThunk(
  'users/fetchCount',
  async () => {
    return fetch("https://immense-bastion-95145.herokuapp.com/api/users")
      .then(res => res.json()).then(r => r.users);
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectUser: (state, action) => {
      if (!state.selectedUserIds.includes(action.payload)) {
        state.selectedUserIds.push(action.payload);
      }
    },
    deselectUser: (state, action) => {
      state.selectedUserIds = state.selectedUserIds.filter(id => id !== action.payload);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export const { selectUser, deselectUser } = userSlice.actions;
export const selectedUsersSelector = (state => state.user.selectedUserIds.map(id => state.user.users.find(u => u.id === id)))
export default userSlice.reducer;
