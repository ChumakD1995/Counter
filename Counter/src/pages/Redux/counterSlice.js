import { createSlice } from '@reduxjs/toolkit' 

const state = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: state,
    reducers: {
        increment: (state, action) => {
            state.value = state.value + 1;
        },
        decrement: (state, action) => {
            state.value = state.value - 1;
        },
        reset: (state, action) => {
            state.value = state.value = 0;
        }
    }
}) 

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;