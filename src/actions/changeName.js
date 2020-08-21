
    // API FETCH

const anotherName = (name) =>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            dispatch({type: 'CHANGE_NAME', payload: json[3].name})
        })

    }
}

    // SAME TASK WITH ASYNC AWAIT 

// const anotherName = (name) =>{
//     return async (dispatch)=>{
//         const data = await fetch('https://jsonplaceholder.typicode.com/users')
//         const resData = await data.json()
//          dispatch({type: 'CHANGE_NAME', payload: resData[3].name})

//     }
// }


export default anotherName;