let initaialState={count:0}
function reducer(state=initaialState,action){
    if(action.type==="RESET"){
        return{
            // count:state.count*0
            count:initaialState.count
        }
    }
    if(action.type==="INCREMENT"){
        return{
            count:state.count+1
        }
    }
   
    if(action.type==="DECREMENT"){
        return{
            count:state.count-1
        }
    }
    return state;
}
export default reducer;