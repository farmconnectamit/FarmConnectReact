import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../src/types/auth';


export interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },

        logOutUser: (state) => {
            state.user = null;
        },
    },
});

export const { updateUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;