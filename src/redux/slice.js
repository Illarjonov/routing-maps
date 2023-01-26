import { createSlice } from "@reduxjs/toolkit";

const someSlice = createSlice({
    name: "someSlice",
    initialState: {
        selectedCoordinates: {
            from: { lat: null, ing: null },
            to: { lat: null, ing: null },
            name: ""
        },
        data: []
    },
    reducers: {
        actionSelectedCoordinates: (state, { payload }) => {
            state.selectedCoordinates = payload
        },
        actionSetData: (state, {payload}) => {
            state.data = [...payload]
        }
    }
});

export const { actionSelectedCoordinates, actionSetData } = someSlice.actions
const someReducer = someSlice.reducer
export default someReducer
