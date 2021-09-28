import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

class Todos extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: false , tododata:[] };
  }

  componentDidMount(){
    this.setState( {loading:true}  );
  fetch('https://jsonplaceholder.typicode.com/todos')
     .then(response => response.json())
     .then(data => 
         this.setState({ loading: false , tododata: data })
          ) 
  }

render(){
  return(
    <div>
      {this.state.loading ? (<p>loading</p>) : 
      <ol>
        {this.state.tododata.map((todo,i) => { 
          return <li key={i}>{todo.title} - {todo.completed ? "True" : "False"} </li>
        }
        )}
      </ol>
      }
    </div>
  )
}

}

ReactDOM.render(
  <React.StrictMode>
    <Todos /> 
  </React.StrictMode>,
  document.getElementById('root'));

