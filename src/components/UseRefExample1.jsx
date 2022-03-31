import { useRef } from "react"


/**
 * 
 * a useRef is used to make a reference to a DOM element and manipulate it to what ever we want 
 * though they are other instance of using it which will be discussed in other useRef usage
 * it has a current property that showcase the DOM element itself with all its attributes...
 */
function UseRefExample1() {

    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        inputRef.current.value = 'Hello'
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText = 'GoodBye!!'
    }
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={inputRef} className="form-control mb-2" />
            <button type="submit" className="btn btn-primary">Submit</button>
            <p onClick={()=> inputRef.current.focus()} ref={paraRef}>click Me</p>
        </form>
    )
}

export default UseRefExample1