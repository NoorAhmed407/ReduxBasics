

const iState = {
    name: "Noor",
    wishes: ["Eat", "Sleep", "Code"]
}

const reducer = (state=iState,action) =>{
        if(action.type === 'CHANGE_NAME'){
            return{
                ...state,
                name: action.payload
                
            }
        }    
    
    return state;


}

export default reducer;