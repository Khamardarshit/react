function counter(){
    const [count, setCount] = useState(0);
    return(
        <>
        <div>
            <h1>count</h1>
            <button onClick={()=>setCount+1}>increment</button>
            <button onClick={()=>setCount-1}>decrement</button>
            <button onClick={()=>setCount=0}>reset</button>
        </div>
        </>
    )
}

export default counter