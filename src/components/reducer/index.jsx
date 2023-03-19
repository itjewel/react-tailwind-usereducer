import React, { useReducer } from 'react'
import { Button } from '../../components/button'
import styled from 'styled-components';
import tw from 'twin.macro';
const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;

const initial = {
    count: 5,
    count2: 10
}

const reducerMeth = (state,action)=>{
    switch(action.type){
        case "Increment":
            return {...state, count: state.count + action.value}
            break
         case "Decrement":
            return {...state, count: state.count - action.value}
            break
        case "Increment2":
            return {...state, count2: state.count2 + action.value}
            break
         case "Decrement2":
            return {...state, count2: state.count2 - action.value}
            break
        case "Reset":
            return {...state, count: action.value}
            break
        default:
            return state
            break

    }
    
}


const Countreducer = () => {
    const [data, dispatch] = useReducer(reducerMeth, initial);
  
  return (
    <>
    <div>Counts:   {data.count}</div>
    <ButtonsContainer>
        <Button text="+" onClick={()=>dispatch({type:"Increment", value: 2})} />
        <Button  text="-" onClick={()=>dispatch({type:"Decrement", value: 2})} />
        <Button  text="Reset"  onClick={()=>dispatch({type:"Reset", value: 0})} />
    </ButtonsContainer>

    <div>Counts2:   {data.count2}</div>
    <ButtonsContainer>
        <Button text="+" onClick={()=>dispatch({type:"Increment2", value: 5})} />
        <Button  text="-" onClick={()=>dispatch({type:"Decrement2", value: 5})} />
        <Button  text="Reset"  onClick={()=>dispatch({type:"Reset", value: 0})} />
    </ButtonsContainer>
    </>
  )
}

export default Countreducer