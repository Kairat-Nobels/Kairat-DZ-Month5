import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
    name: "calcSlice",
    initialState: {
        firstNumber: '',
        secondNumber: '',
        result: 0
    },
    reducers: {
        setFirstNumber: (state, action) => {
            state.firstNumber = action.payload;
        },
        setSecondNumber: (state, action) => {
            state.secondNumber = action.payload;
        },
        add: (state) =>
        {
            state.result = Number(state.firstNumber) + Number(state.secondNumber);   
        },  
        minus: (state) =>
        { 
            state.result = Number(state.firstNumber) - Number(state.secondNumber);
        },
        multiply: (state) =>
        {
            state.result = Number(state.firstNumber) * Number(state.secondNumber);
        },
        devided: (state) =>
        {
            state.result = Number(state.firstNumber) / Number(state.secondNumber)
        }
    }
})

export const {setFirstNumber, setSecondNumber, add, minus, multiply, devided } = calcSlice.actions;
export default calcSlice.reducer;