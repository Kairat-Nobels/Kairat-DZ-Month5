import { useDispatch, useSelector } from "react-redux"
import { addNumberAction, changeInputAction, clearAllAction, minusNumberAction } from "../../redux/actions"
import Number from '../../components/Number/Number'


function NumbersPage()
{
    const dispatch = useDispatch()
    const { inputValue, numbers } = useSelector(state => state)


    const changeInput = (e) =>
    {
        dispatch(changeInputAction(e.target.value))
    }
    const addNumber = () =>
    {
        if(inputValue) dispatch(addNumberAction(inputValue))
    }
    const clearAll = () =>
    {
        dispatch(clearAllAction())
    }
    const minusNumber = () =>
    {
        if(inputValue && numbers.length > 0) dispatch(minusNumberAction(inputValue))
    }
  return (
    <>
        <input type="number" placeholder="123" onChange={changeInput} value={inputValue} />      
        <button onClick={addNumber}>add number</button>
        <button className="minus" onClick={minusNumber}>minus number</button>
        <button className="clear" onClick={clearAll}>clear</button>
        {  
            numbers.length > 0
                ? numbers.map(num => <Number key={num.id} numberInfo={num} />) 
                : <p>Пусто</p>
        }
    </>
  )
}

export default NumbersPage