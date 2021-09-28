import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';  
import Axios from 'axios';  
function Todos() {  
    const [data, setData] = useState([]);  
  
    useEffect(() => {  
        Axios  
            .get("https://jsonplaceholder.typicode.com/todos/")  
            .then(result => setData(result.data));  
      //  console.log(data);
    }, []);  
    return (         
                <div> 
                     <ol>
                    {data.map(item => {  
                        return <li key={item.id}>  
                            {item.title}</li>  
                            
                    })}  
                    </ol>
                </div>  
           
         
    )  
}  

ReactDOM.render(
    <Todos />
    ,document.getElementById("root") );