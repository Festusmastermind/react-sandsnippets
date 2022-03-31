import { useRef, useState, useEffect } from "react" 

/**
 * we can as well use useRef to get the value of the previous state of a DOM element 
 * an example that illustrates this is below..
 * 
 * @returns 
 */

function UseRefExample2 () {
    const [name, setName] = useState('')
    
    const renders = useRef(1) //because when the component renders..its 1 by default
    const prevName = useRef('')

    useEffect(()=>{
       renders.current  = renders.current + 1 //since you effect loads immediate after the jsx is returned am guessing the value should be 2.
       prevName.current = name
    },[name]) //name is dependency..it can change..

    return (
        <div>
            <h1>Renders: {renders.current}</h1>
            <h2>PrevName: {prevName.current}</h2>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control mb-2" />
        </div>
    )
}

export default UseRefExample2