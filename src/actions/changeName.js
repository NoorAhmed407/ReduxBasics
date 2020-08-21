const anotherName = (name) =>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            dispatch({type: 'CHANGE_NAME', payload: json[3].name})
        })

    }
}


export default anotherName;