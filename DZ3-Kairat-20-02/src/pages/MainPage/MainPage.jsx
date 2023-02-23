import { useDispatch, useSelector } from "react-redux"
import styles from './mainPage.module.css'

function MainPage()
{
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)

    const plusCounter = () =>
    {
        dispatch({
            type: 'PLUS_COUNTER'
        })
    }
    const minusCounter = () =>
    {
        dispatch({
            type: "MINUS_COUNTER"
        })
    }
    const restartCounter = () =>
    {
        dispatch({
            type: "RESTART_COUNTER"
        })
    }

  return (
    <>
          <h1>Counter</h1>
          <h2 className={styles.counterValue}>{count}</h2>
          <div className={styles.counterActions}>
              <button onClick={plusCounter}>+</button>
              <button onClick={restartCounter}>restart</button>
              <button onClick={minusCounter}>-</button>
          </div >
    </>
  )
}


export default MainPage