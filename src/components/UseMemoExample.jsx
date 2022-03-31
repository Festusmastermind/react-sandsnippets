import {useState, useEffect, useRef, useMemo} from 'react'

/**
 * Please use useMemo and useCallback when you are having a performance issue... 
 * especially when returning a large data, at the same time needs to render lot of components..
 * useMemo is a kind of caching your result once its been fetched for optimizing
 * by using the useMemo other components will not be re-rendering will not disturbed the fetched /process data at the moment..
 * @returns 
 */
function UseMemoExample() {
    const [number, setNumber]= useState(1)
    const [inc, setInc ] = useState(0)

   // const sqrt = getSqrt(number)
    const sqrt = useMemo(()=> getSqrt(number), [number]) //NB: the useMemo takes in a function and a dependency array..
    const renders = useRef(1)
    
    useEffect(()=>{
        //to display the number of times this component is has been rendered...
        renders.current = renders.current + 1
    })

    const onClick = () => {
        setInc((prevState) => {
            console.log(prevState + 1)
            return prevState + 1
        })
    }
    function getSqrt(n) {
        
        for(let i = 0; i <= 10000; i++){
            console.log(i)
        }
        console.log('Expensive function Called')
        return Math.sqrt(n)
    }
  return (
    <div>Renders: {renders.current} 
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control w-25" />
      <h2 className="my-3">The sqrt of {number} is {sqrt}</h2>
      <button type="submit" onClick={onClick} className='btn btn-primary'>Re Render</button>
    </div>
  )
}

export default UseMemoExample