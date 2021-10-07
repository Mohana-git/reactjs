import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import {useSelector, useDispatch} from 'react-redux'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import actions from './actions'
import styles from './index.css';

const store = createStore(rootReducer)

const App =() =>{

    const counterReducer = useSelector(state=> state.counterReducer) 
    const userReducer = useSelector(state => state.userReducer) 
    const dispatch = useDispatch()

    const user = {name: "Mohana"}

    useEffect( () =>{
        dispatch(actions.userAction.setUser(user))
    }, [] )

    const incrementd =()=> {
     return  dispatch(actions.counterAction.increment())
    } 

   return(
    <div> 
    { userReducer.loggedIn ? 
    <>
     <h1>Hi, {userReducer.user.name} </h1>     
     <button className ={styles.btn} onClick = {() => dispatch(actions.userAction.logout())}>LOGOUT</button>
     <h1>Counter: {counterReducer}</h1>
       <button onClick = {incrementd}>Increase Counter</button>
       <button onClick = {() => dispatch(actions.counterAction.decrement())}>Decrease Counter</button>
    </> 
      : 
      <>
      <h1>Please Login</h1>
      <button onClick = {() => dispatch(actions.userAction.setUser(user))}>LOGIN</button>
      </>
      }       
    </div>    
    ) 
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.getElementById('root'));