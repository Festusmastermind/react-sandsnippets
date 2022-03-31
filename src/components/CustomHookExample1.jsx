import useFetch from "../hooks/useFetch"

function CustomHookExample1() {
    // const res = useFetch('https://jsonplaceholder.typicode.com/posts', {})
    // console.log(res)
    //NB: when destructing an array of objects, use curly brace i.e {} and not block brace i.e.[]
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    if(loading){
        return <h2>Loading ....</h2>
    }
  return (
    <div>
        {
            data.map((post)=>(
                <h3 key={post.id}>{post.title}</h3>
            ))
        }
    </div>
  )
}

export default CustomHookExample1