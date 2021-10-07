import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import {useSelector, useDispatch} from 'react-redux'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import todosList from './reducers'
import {getTodo} from './actions/action'
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const store = createStore(todosList, composeWithDevTools(applyMiddleware(thunk)));

function MyBorder(props){
    return(
      <div className={'MyBorder MyBorder-'+props.color}>
        {props.children}
      </div>
    );
  
}
const App =() =>{

    const todosList= useSelector(state=> state.todosList)
     const {loading, error, todos} = todosList
    const dispatch = useDispatch()

    useEffect( () =>{
        dispatch( getTodo() )
    }, [dispatch] 
    )

   return( 
    <ErrorBoundary FallbackComponent = {ErrorFallback} onReset={() => {  }}>
    <MyBorder color="green"><ul>
    {loading ? "Loading..." : error ? error.message : todos.map(item => {  
                        return <li key={item.id}>  
                            {item.title}</li>                             
                    })}</ul>
    </MyBorder>
    </ErrorBoundary>
    ) 
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.getElementById('root')
    );