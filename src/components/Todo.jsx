import {useState, useEffect, useRef } from 'react' 

/**
 * useRef3 Demo is about solving an error that have to with memory leaks i.e waiting from data response from the server 
 * while the component to diplay this data has been unmounted. 
 * @returns 
 * NB: setTimeOut takes in a function and the time it will take in milliseconds.
 * its just a way of manipulating the tin..
 */

function Todo() {
    const[loading, setLoading ] = useState(true) 
    const[todo, setTodo] = useState({})

    const isMounted = useRef(true)
    
    useEffect(()=>{
        fetch('https:/jsonplaceholder.typicode.com/todos/1')
          .then((res) => res.json())
          .then((data) => {
              setTimeout(()=>{
                  if(isMounted.current){
                    setTodo(data)
                    setLoading(false)
                  }
              }, 3000)
          })
        //runs when a component is unmounted on finish loading of the function inside the useEffect 
          return ()=>{
              //console.log('123')
              isMounted.current = false
          }
    }, [])

  return loading ? 
    <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo