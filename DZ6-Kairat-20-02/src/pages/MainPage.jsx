import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus, multiply, devided, setFirstNumber, setSecondNumber } from '../store/calcSlice'

function MainPage()
{
    
    const dispatch = useDispatch()
    const { firstNumber, secondNumber, result } = useSelector(state => state.calcReducer)
    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const sumFunction = () =>
    {
        if (firstValue && secondValue) {
            dispatch(setFirstNumber(firstValue))
            dispatch(setSecondNumber(secondValue))
            dispatch(add())
        }
        else {
            alert('Please enter both numbers')
        }
        
    }
    const minusFunction = () =>
    {
        if (firstValue && secondValue) {
            dispatch(setFirstNumber(firstValue))
            dispatch(setSecondNumber(secondValue))
            dispatch(minus())
        }
        else { 
            alert('Please enter both numbers')
        }
    }
    const multiplyFunction = () =>
    {
        if (firstValue && secondValue) { 
            dispatch(setFirstNumber(firstValue))
            dispatch(setSecondNumber(secondValue))
            dispatch(multiply())
        }
        else {
            alert('Please enter both numbers')
        }
    }
    const divideFunction = () =>
    {
        if (firstValue && Number(secondValue)) { 
            dispatch(setFirstNumber(firstValue))
            dispatch(setSecondNumber(secondValue))
            dispatch(devided())
        }
        else if(secondValue) alert('Делить на 0 нельзя')
        else {
            alert('Please enter both numbers')
        }

    }

    return (
        <>
            <h1>Calculator</h1>
            <div className="pole">
                <label htmlFor="first">First number:</label>
                <input value={firstValue} onChange={(e)=>{setFirstValue(e.target.value)}} name='first' type="number" />
            </div>
            <div className="pole">
                <label htmlFor="second">Second number:</label>
                <input value={secondValue} onChange={(e)=>{setSecondValue(e.target.value)}} name='second' type="number" />
            </div>
            <div className='action'>
                <button onClick={sumFunction}>+</button>
                <button onClick={minusFunction}>-</button>
                <button onClick={multiplyFunction}>*</button>
                <button onClick={divideFunction}>/</button>
            </div>
            <h2 style={{marginTop: '30px'}}>Result: </h2>
            <h2>{result}</h2>

        </>
    )
}

export default MainPage