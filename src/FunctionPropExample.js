function FunctionPropExample(props){
    console.log(props)
    return(
        <div>
            <p>{props.framework}</p>
             <p>{props.number}</p> 
        </div>
    )
}
export default FunctionPropExample